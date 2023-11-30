"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Account, UserResponse } from "@/types/types";
import { Heading } from "@/components/ui/heading";
import { useUserModal } from "@/hooks/use-user-modal";

interface UserClientProps {
  data: UserResponse[];
}

const UserClient: React.FC<UserClientProps> = ({ data }) => {
  const userModal = useUserModal();

  return (
    <>
      <div className="flex border-b pb-2 items-center justify-between">
        <Heading title={`Users (${data.length})`} description="Manage users" />
        <div></div>
        <div>
          <Button
            size="sm"
            className="bg-cyan-500"
            onClick={() => userModal.onOpen()}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>
      <DataTable
        searchKey="fullName"
        clickable={false}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default UserClient;
