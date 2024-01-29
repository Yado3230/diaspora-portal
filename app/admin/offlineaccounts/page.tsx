"use client";

import { OfflineAccount } from "@/types/types";
import ClientAccount from "./components/client";
import { useEffect, useState } from "react";
import { getAllOfflineAccounts } from "@/actions/offline-account-action";

const Page = () => {
  const [offlineAccounts, setOfflineAccounts] = useState<OfflineAccount[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res2 = await getAllOfflineAccounts("");
      const data2 = res2 instanceof Array ? res2 : [];
      setOfflineAccounts(data2);
    };
    fetchData();
  }, []);

  const offlineformattedclients: OfflineAccount[] = offlineAccounts.map(
    (item) => ({
      id: item.id,
      fullName: item.fullName,
      email: item.email,
      file: item.file,
      status: item.status,
      emailVerified: item.emailVerified,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    })
  );

  return (
    <div>
      <ClientAccount offlineData={offlineformattedclients} />
    </div>
  );
};

export default Page;
