"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import React, { useState } from "react";

import toast from "react-hot-toast";
import { DialogFooter } from "../ui/dialog";
import { useRoleModal } from "@/hooks/use-roles-modal";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";
import { PermissionTemplate } from "@/types/types";

interface PermissionProps {
  invoice: {
    roleId: string;
    roleName: string;
    permissions: {};
    createdAt: string;
  };
  updated: boolean;
  setUpdated: (updated: boolean) => void;
  permissions: PermissionTemplate[];
}

export const RoleModal: React.FC<PermissionProps> = ({
  invoice,
  updated,
  setUpdated,
  permissions,
}) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const roleModal = useRoleModal();
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    roleId: z.string().default(""),
    roleName: z.string().default(""),
    permissions: z.any().default({}),
    createdAt: z.string().default(""),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: invoice
      ? invoice
      : {
          roleId: "",
          roleName: "",
          permissions: {},
          createdAt: currentDate,
        },
  });

  function getDefaultValues() {
    return invoice
      ? {
          roleId: invoice?.roleId,
          roleName: invoice?.roleName,
          permissions: invoice?.permissions,
          createdAt: invoice?.createdAt,
        }
      : {
          roleId: "",
          roleName: "",
          permissions: {},
          createdAt: currentDate,
        };
  }

  const defaultValues = React.useMemo(() => getDefaultValues(), [invoice]);

  React.useEffect(() => {
    const { setValue } = form;
    setValue("roleName", defaultValues?.roleName ?? "");
    setValue("permissions", defaultValues?.permissions ?? {});
    setValue("createdAt", currentDate);
  }, [defaultValues]);

  const handleCheckboxSelect = async (key: string, value: string) => {
    const { setValue, getValues } = form;
    const currentPermissions = getValues("permissions");

    const existingValues = currentPermissions[key] || [];

    const index = existingValues.indexOf(value);
    const updatedPermissions = [...existingValues];

    if (index !== -1) {
      // Value is already present, so remove it
      updatedPermissions.splice(index, 1);
    } else {
      // Value is not present, so add it
      updatedPermissions.push(value);
    }

    setValue("permissions", {
      ...currentPermissions,
      [key]: updatedPermissions,
    });
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // try {
    //   setLoading(true);
    //   const response = invoice.roleId.length
    //     ? await fetch("/api/permissions", {
    //         method: "PATCH",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           roleId: invoice.roleId,
    //           roleName: values.roleName,
    //           permissions: values.permissions,
    //           createdAt: currentDate,
    //         }),
    //       })
    //     : await fetch("/api/permissions", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(values),
    //       });
    //   roleModal.onClose();
    //   const data = await response.json();
    //   setUpdated(!updated);
    //   toast.success(invoice.roleId.length ? "Updated" : "Saved");
    //   return data;
    // } catch (error) {
    //   toast.error("Something went wrong!");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <Modal
      title="Role"
      description="Manage roles"
      isOpen={roleModal.isOpen}
      onClose={roleModal.onClose}
    >
      <div className="spaye-y-4 py-2 pb-4 w-[550px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="roleName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Permission Name:</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="my-4">
              <Separator />
            </div>
            <div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Role Permissions</h2>
                {Object.keys(invoice.permissions).length > 0
                  ? Object.entries(form.control._formValues.permissions).map(
                      ([key, permission]) => {
                        const selectedPermissions =
                          form.control._formValues.permissions[key];
                        return (
                          <div className="flex items-center justify-between border-t border-b py-2">
                            <div>{key}</div>
                            <div className="flex space-x-5 whitespace-nowrap">
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="read"
                                  value="read"
                                  checked={selectedPermissions.includes("read")}
                                  onClick={(e) => {
                                    handleCheckboxSelect(
                                      key,
                                      (e.target as HTMLInputElement).value
                                    );
                                    roleModal.onClose();
                                    roleModal.onOpen();
                                  }}
                                />
                                <label
                                  htmlFor="read"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Read
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="write"
                                  value="write"
                                  checked={selectedPermissions?.includes(
                                    "write"
                                  )}
                                  onClick={(e) => {
                                    handleCheckboxSelect(
                                      key,
                                      (e.target as HTMLInputElement).value
                                    );
                                    roleModal.onClose();
                                    roleModal.onOpen();
                                  }}
                                />
                                <label
                                  htmlFor="write"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Write
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="create"
                                  value="create"
                                  checked={selectedPermissions?.includes(
                                    "create"
                                  )}
                                  onClick={(e) => {
                                    handleCheckboxSelect(
                                      key,
                                      (e.target as HTMLInputElement).value
                                    );
                                    roleModal.onClose();
                                    roleModal.onOpen();
                                  }}
                                />
                                <label
                                  htmlFor="create"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Create
                                </label>
                              </div>
                              <div className="flex items-center space-x-2 text-red-500">
                                <Checkbox
                                  id="delete"
                                  color="#DE8224"
                                  value="delete"
                                  checked={selectedPermissions?.includes(
                                    "delete"
                                  )}
                                  onClick={(e) => {
                                    handleCheckboxSelect(
                                      key,
                                      (e.target as HTMLInputElement).value
                                    );
                                    roleModal.onClose();
                                    roleModal.onOpen();
                                  }}
                                  className="bg-orange-500"
                                />
                                <label
                                  htmlFor="terms"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  delete
                                </label>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )
                  : permissions.map((permission) => (
                      <div className="flex items-center justify-between border-t border-b py-2">
                        <div>{permission.permissionName}</div>
                        <div className="flex space-x-5 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="read"
                              value="read"
                              onClick={(e) =>
                                handleCheckboxSelect(
                                  permission.permissionName,
                                  (e.target as HTMLInputElement).value
                                )
                              }
                            />
                            <label
                              htmlFor="read"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Read
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="write"
                              value="write"
                              onClick={(e) =>
                                handleCheckboxSelect(
                                  permission.permissionName,
                                  (e.target as HTMLInputElement).value
                                )
                              }
                            />
                            <label
                              htmlFor="write"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Write
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="create"
                              value="create"
                              onClick={(e) =>
                                handleCheckboxSelect(
                                  permission.permissionName,
                                  (e.target as HTMLInputElement).value
                                )
                              }
                            />
                            <label
                              htmlFor="create"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Create
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 text-red-500">
                            <Checkbox
                              id="delete"
                              value="delete"
                              color="#DE8224"
                              onClick={(e) =>
                                handleCheckboxSelect(
                                  permission.permissionName,
                                  (e.target as HTMLInputElement).value
                                )
                              }
                              className="bg-orange-500"
                            />
                            <label
                              htmlFor="delete"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Delete
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
            <DialogFooter>
              <div className="pt-6 space-x-2 flex items-center justify-end w-full mt-12">
                <Button
                  variant="outline"
                  type="button"
                  onClick={roleModal.onClose}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-cyan-500"
                >
                  {invoice?.roleId?.length ? "Update" : "Add"}
                </Button>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </div>
    </Modal>
  );
};
