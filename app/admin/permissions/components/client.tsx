"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { PermissionColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { PermissionModal } from "@/components/modals/permission-modal";
import { useState } from "react";
import { usePermissionModal } from "@/hooks/use-permission-modal";
// import { ApiList } from "@/components/ui/api-list";

interface PermissionClientProps {
  data: PermissionColumn[];
}

const PermissionClient: React.FC<PermissionClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  const [updated, setUpdated] = useState(false);
  const permissionModal = usePermissionModal();

  const [invoice, setInvoice] = useState<{
    permissionId: string;
    permissionName: string;
    assignedTo: string[];
    createdAt: string;
  }>({
    permissionId: "",
    permissionName: "",
    assignedTo: [],
    createdAt: "",
  });

  return (
    <>
      <PermissionModal
        invoice={invoice}
        updated={updated}
        setUpdated={setUpdated}
      />
      <div className="flex items-center justify-between">
        <Heading
          title={`Permissions (${data.length})`}
          description="Manage permission for your users"
        />
        <Button
          size="sm"
          className="bg-cyan-500"
          onClick={() => {
            setInvoice({
              permissionId: "",
              permissionName: "",
              assignedTo: [],
              createdAt: "",
            });
            permissionModal.onOpen();
          }}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Permission
        </Button>
      </div>
      <Separator />
      <DataTable
        searchKey="permissionName"
        clickable={true}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default PermissionClient;
