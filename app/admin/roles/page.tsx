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
import { Copy, Trash, UserCog } from "lucide-react";
import { RoleModal } from "@/components/modals/role-modal";
import { useRoleModal } from "@/hooks/use-roles-modal";
import { PermissionTemplate, Role } from "@/types/types";
import {
  deleteRole,
  getAllAuthorities,
  getAllRoles,
} from "@/actions/role-action";
import { AlertModal } from "@/components/modals/alert-modal";
import toast from "react-hot-toast";

const CardWithForm = () => {
  const roleModal = useRoleModal();
  const [updated, setUpdated] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [idToDelete, setIdToDelete] = React.useState(0);

  const [roles, setRoles] = React.useState<Role[]>([]);
  const [authorities, setAuthorities] = React.useState<PermissionTemplate[]>(
    []
  );

  React.useEffect(() => {
    const fetchData = async () => {
      const res2 = await getAllRoles();
      const res3 = await getAllAuthorities();
      setRoles(res2);
      setAuthorities(res3);
    };

    fetchData();
  }, [updated]);

  const [invoice, setInvoice] = React.useState<Role>({
    id: 0,
    roleName: "",
    authorities: [],
  });

  const onDelete = async () => {
    try {
      setLoading(true);
      await deleteRole(idToDelete);
      toast.success("Role deleted.");
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      setLoading(false);
      setUpdated(!updated);
      setOpen(false);
    }
  };
  return (
    <div>
      <RoleModal
        invoice={invoice}
        updated={updated}
        authorities={authorities}
        setUpdated={setUpdated}
      />
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="mb-4">
        <Heading
          title={`Role Lists`}
          description="A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need"
        />
      </div>
      <div className="w-full grid grid-cols-3 gap-8">
        {roles.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardDescription>
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span>Total 4 Users</span>
                    </div>
                    <div>
                      <div className="text-xl text-black my-1 font-bold">
                        {item.roleName}
                      </div>
                    </div>
                  </div>
                  <div>
                    {item.roleName !== "SUPER-ADMIN" ? (
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => {
                          setIdToDelete(item.id);
                          setOpen(true);
                        }}
                      >
                        <Trash className="w-5 h-5" />
                      </Button>
                    ) : (
                      <div>
                        <UserCog className="w-10 h-10" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-1">
                  <Button
                    onClick={() => {
                      setInvoice(item);
                      roleModal.onOpen();
                    }}
                    variant="outline"
                  >
                    {item.roleName === "SUPER-ADMIN"
                      ? "View Authorities"
                      : "Edit Role"}
                  </Button>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
        <Card>
          <CardHeader>
            <CardTitle>New Role</CardTitle>
            <CardDescription>create new role.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              onClick={() => {
                setInvoice({
                  id: 0,
                  roleName: "",
                  authorities: [],
                });
                roleModal.onOpen();
              }}
              className="w-full"
            >
              Add New Role
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CardWithForm;
