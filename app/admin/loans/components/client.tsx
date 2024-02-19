"use client";

import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Loan } from "@/types/types";
import { Heading } from "@/components/ui/heading";
import exportDataToExcel from "@/components/exportDataToExcel";
import exportLoanDataToExcel from "@/components/exportLoanDataToExcel";

interface LoanClientProps {
  data: Loan[];
}

const LoanClient: React.FC<LoanClientProps> = ({ data }) => {
  // const clientModal = useClientModal();

  return (
    <>
      <div className="flex border-b pb-2 items-center justify-between">
        <Heading
          title={`Loan Requests (${data.length})`}
          description="Manage every loan requests"
        />
        <div></div>
        <div>
          <Button
            size="sm"
            className="bg-cyan-500"
            onClick={() => exportLoanDataToExcel("notfiltered", data)}
          >
            <Download className="mr-2 h-4 w-4" />
            Export All
          </Button>
        </div>
      </div>
      <DataTable
        type="loan"
        searchKey="fullName"
        clickable={false}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default LoanClient;
