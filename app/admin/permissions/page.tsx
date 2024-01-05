"use client";
import React, { useEffect, useState, useCallback, lazy, Suspense } from "react";
import { PermissionColumn } from "./components/columns";

const fetchData = async (
  setPermissions: React.Dispatch<React.SetStateAction<PermissionColumn[]>>,
  setUpdated: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await fetch("/api/permissions");
    if (!res.ok) {
      throw new Error(`Request failed with status: ${res.status}`);
    }
    const responseData = await res.json();
    const data = responseData instanceof Array ? responseData : [];
    setPermissions(data);
    setUpdated(false); // If necessary, update other state variables in the same batch
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const PermissionPage: React.FC = () => {
  const [updated, setUpdated] = useState<boolean>(false);
  const [permissions, setPermissions] = useState<PermissionColumn[]>([]);

  useEffect(() => {
    fetchData(setPermissions, setUpdated);
  }, [updated]);

  const formattedPackages: PermissionColumn[] = permissions.map((item) => ({
    permissionId: item.permissionId?.toString() || "0",
    permissionName: item.permissionName,
    assignedTo: item.assignedTo,
    createdAt: item.createdAt,
  }));

  const PermissionClientLazy = lazy(() => import("./components/client"));

  return (
    <div className="flex-col bg-background shadow-sm">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Suspense fallback={<div>Loading...</div>}>
          <PermissionClientLazy data={formattedPackages} />
        </Suspense>
      </div>
    </div>
  );
};

export default PermissionPage;
