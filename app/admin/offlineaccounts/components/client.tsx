"use client";

import { Button } from "@/components/ui/button";
import { Download, Lock, Plus, User } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Account, OfflineAccount } from "@/types/types";
import { Heading } from "@/components/ui/heading";
import exportDataToExcel from "@/components/exportDataToExcel";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ClientAccountProps {
  offlineData: OfflineAccount[];
}

const ClientAccount: React.FC<ClientAccountProps> = ({ offlineData }) => {
  // const clientModal = useClientModal();
  const params = useParams();
  const router = useRouter();

  const userAuthorities = localStorage.getItem("authorities");

  return (
    <>
      <div className="flex border-b pb-2 items-center justify-between">
        <Heading
          title={`Offline Accounts (${offlineData.length})`}
          description="Manage Offline Accounts"
        />
        <div></div>
        <div
          className={`${
            !userAuthorities?.includes("READ_ACCOUNT") && "cursor-not-allowed"
          }`}
          title={`${
            !userAuthorities?.includes("READ_ACCOUNT") && "Not Authorized"
          }`}
        >
          <Button
            disabled={!userAuthorities?.includes("READ_ACCOUNT")}
            size="sm"
            className={`bg-cyan-500`}
            onClick={() => exportDataToExcel("notfiltered", offlineData)}
            title="disabled"
          >
            <Download className="mr-2 h-4 w-4" />
            Export All
          </Button>
        </div>
      </div>
      <DataTable
        searchKey="fullName"
        clickable={true}
        columns={columns}
        data={offlineData}
      />
    </>
  );
};

export default ClientAccount;
