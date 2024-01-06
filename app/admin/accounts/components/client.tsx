"use client";

import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Account } from "@/types/types";
import { Heading } from "@/components/ui/heading";
import exportDataToExcel from "@/components/exportDataToExcel";

interface ClientAccountProps {
  data: Account[];
}

const ClientAccount: React.FC<ClientAccountProps> = ({ data }) => {
  // const clientModal = useClientModal();
  const params = useParams();
  const router = useRouter();

  const userAuthorities = localStorage.getItem("authorities");

  return (
    <>
      <div className="flex border-b pb-2 items-center justify-between">
        <Heading
          title={`Accounts (${data.length})`}
          description="Manage Accounts"
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
            onClick={() => exportDataToExcel("notfiltered", data)}
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
        data={data}
      />
    </>
  );
};

export default ClientAccount;
