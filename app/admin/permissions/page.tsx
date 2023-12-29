"use client";

import { useEffect, useState } from "react";
import PermissionClient from "./components/client";
import { PermissionColumn } from "./components/columns";

const PermissionPage = async () => {
  const [updated, setUpdated] = useState<boolean>(false);
  const [permissions, setPermissions] = useState<PermissionColumn[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/permissions");
      if (!res.ok) {
        throw new Error(`Request failed with status: ${res.status}`);
      }
      const responseData = await res.json();
      const data = responseData instanceof Array ? responseData : [];
      setPermissions(data);
    };
    fetchData();
  }, [updated]);

  // const packages = [
  //   {
  //     permissionId: "23232",
  //     permissionName: "DSTV",
  //     assignedTo: ["amdin", "user"],
  //     createdAt: "1991/12/12",
  //   },
  //   {
  //     permissionId: "4321",
  //     permissionName: "Canal +",
  //     assignedTo: ["amdin"],
  //     createdAt: "1991/12/12",
  //   },
  // ];

  const formattedPackages: PermissionColumn[] = permissions.map((item) => ({
    permissionId: item.permissionId?.toString() || "0",
    permissionName: item.permissionName,
    assignedTo: item.assignedTo,
    createdAt: item.createdAt,
  }));

  return (
    <div className="flex-col bg-background shadow-sm">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <PermissionClient data={formattedPackages} />
      </div>
    </div>
  );
};

export default PermissionPage;
