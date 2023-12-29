"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Copy } from "lucide-react";
import { RoleModal } from "@/components/modals/role-modal";
import { useRoleModal } from "@/hooks/use-roles-modal";
import { PermissionTemplate } from "@/types/types";

const CardWithForm = () => {
  const [permissions, setPermissions] = React.useState<PermissionTemplate[]>(
    []
  );
  const roleModal = useRoleModal();
  const [updated, setUpdated] = React.useState(false);

  React.useEffect(() => {
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

  const [invoice, setInvoice] = React.useState<{
    roleId: string;
    roleName: string;
    permissions: {};
    createdAt: string;
  }>({
    roleId: "",
    roleName: "",
    permissions: {},
    createdAt: "",
  });
  return (
    <div>
      <RoleModal
        invoice={invoice}
        updated={updated}
        permissions={permissions}
        setUpdated={setUpdated}
      />
      <div className="mb-4">
        <Heading
          title={`Role Lists`}
          description="A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need"
        />
      </div>
      <div className="w-full grid grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardDescription>
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span>Total 4 Users</span>
                  </div>
                  <div>
                    <div className="text-xl text-black my-1 font-bold">
                      Administration
                    </div>
                  </div>
                </div>
                <div>
                  <Button size="icon" variant="outline">
                    <Copy className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="mt-1">
                <Button onClick={() => roleModal.onOpen()} variant="outline">
                  Edit Role
                </Button>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span>Total 4 Users</span>
                  </div>
                  <div>
                    <div className="text-xl text-black my-1 font-bold">
                      User
                    </div>
                  </div>
                </div>
                <div>
                  <Button size="icon" variant="outline">
                    <Copy className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="mt-1">
                <Button variant="outline">Edit Role</Button>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span>Total 4 Users</span>
                  </div>
                  <div>
                    <div className="text-xl text-black my-1 font-bold">
                      Editor
                    </div>
                  </div>
                </div>
                <div>
                  <Button size="icon" variant="outline">
                    <Copy className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="mt-1">
                <Button variant="outline">Edit Role</Button>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span>Total 4 Users</span>
                  </div>
                  <div>
                    <div className="text-xl text-black my-1 font-bold">
                      Administration
                    </div>
                  </div>
                </div>
                <div>
                  <Button size="icon" variant="outline">
                    <Copy className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="mt-1">
                <Button variant="outline">Edit Role</Button>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span>Total 4 Users</span>
                  </div>
                  <div>
                    <div className="text-xl text-black my-1 font-bold">
                      User
                    </div>
                  </div>
                </div>
                <div>
                  <Button size="icon" variant="outline">
                    <Copy className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="mt-1">
                <Button variant="outline">Edit Role</Button>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>New Role</CardTitle>
            <CardDescription>create new role.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full">
              {/* <CheckIcon className="mr-2 h-4 w-4" />  */}
              Add New Role
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CardWithForm;
