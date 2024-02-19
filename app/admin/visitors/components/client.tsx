"use client";

import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Account } from "@/types/types";
import { Heading } from "@/components/ui/heading";
import exportDataToExcel from "@/components/exportDataToExcel";

interface VisitorClientProps {
  data: Account[];
}

const VisitorClient: React.FC<VisitorClientProps> = ({ data }) => {
  // const clientModal = useClientModal();

  return (
    <>
      <div className="flex border-b pb-2 items-center justify-between">
        <Heading
          title={`Visitors (${data.length})`}
          description="Manage uncompleted account registrations"
        />
        <div></div>
        <div>
          <Button
            size="sm"
            className="bg-cyan-500"
            onClick={() => exportDataToExcel("notfiltered", data)}
          >
            <Download className="mr-2 h-4 w-4" />
            Export All
          </Button>
        </div>
      </div>
      <DataTable
        type="account"
        searchKey="fullName"
        clickable={false}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default VisitorClient;
