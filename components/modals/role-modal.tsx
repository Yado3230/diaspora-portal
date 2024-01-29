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
import React, { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { DialogFooter } from "../ui/dialog";
import { useRoleModal } from "@/hooks/use-roles-modal";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";
import { PermissionTemplate, Role } from "@/types/types";
import { createRole, editRole } from "@/actions/role-action";

interface PermissionProps {
  invoice: Role;
  updated: boolean;
  setUpdated: (updated: boolean) => void;
  authorities: PermissionTemplate[];
}

export const RoleModal: React.FC<PermissionProps> = ({
  invoice,
  updated,
  setUpdated,
  authorities,
}) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const roleModal = useRoleModal();
  const [loading, setLoading] = useState(false);
  const [groupedAuthorities, setGroupedAuthorities] = useState<
    Record<string, PermissionTemplate[]>
  >({});
  const [groupedAuthoritiesUser, setGroupedAuthoritiesUser] = useState<
    Record<string, PermissionTemplate[]>
  >({});

  const formSchema = z.object({
    id: z.number().default(0),
    roleName: z.string().default(""),
    authorities: z.array(
      z.object({
        id: z.number().default(0),
        resource: z.string().default(""),
        authorityAction: z.string().default(""),
        description: z.string().default(""),
        authority: z.string().default(""),
      })
    ),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: invoice
      ? invoice
      : {
          id: 0,
          roleName: "",
          authorities: [],
        },
  });

  const getDefaultValues = () => {
    return invoice
      ? {
          id: invoice.id,
          roleName: invoice.roleName,
          authorities: invoice.authorities,
        }
      : {
          id: 0,
          roleName: "",
          authorities: [],
        };
  };

  const defaultValues = React.useMemo(() => getDefaultValues(), [invoice]);

  React.useEffect(() => {
    const { setValue } = form;
    setValue("roleName", defaultValues?.roleName ?? "");
    setValue("authorities", defaultValues?.authorities ?? []);
  }, [defaultValues]);

  const handleCheckboxSelect = (resource: string, authorityAction: string) => {
    const { setValue, getValues } = form;
    const currentPermissions = getValues("authorities");

    // Check if the selected authority already exists
    const existingIndex = currentPermissions.findIndex(
      (auth) =>
        auth.resource === resource && auth.authorityAction === authorityAction
    );

    if (existingIndex !== -1) {
      // If the authority already exists, remove it
      const updatedPermissions = [...currentPermissions];
      updatedPermissions.splice(existingIndex, 1);
      setValue("authorities", updatedPermissions);
    } else {
      // If the authority doesn't exist, add it with the id from the overall authorities
      const updatedPermissions: any = [
        ...currentPermissions,
        {
          ...authorities.find(
            (auth) =>
              auth.resource === resource &&
              auth.authorityAction === authorityAction
          ),
        },
      ];

      // Check if the action is "EDIT," "WRITE," or "DELETE" and "READ" is not already included
      const readAction =
        authorityAction === "EDIT" ||
        authorityAction === "WRITE" ||
        authorityAction === "DELETE"
          ? "READ"
          : null;

      if (
        readAction &&
        !currentPermissions.some(
          (auth) =>
            auth.resource === resource && auth.authorityAction === readAction
        )
      ) {
        const readPermission = authorities.find(
          (auth) =>
            auth.resource === resource && auth.authorityAction === readAction
        );

        if (readPermission) {
          updatedPermissions.push(readPermission);
        }
      }

      setValue("authorities", updatedPermissions);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      setLoading(true);
      invoice.id
        ? await editRole(values.authorities, invoice.id)
        : await createRole({
            roleName: values.roleName,
            authorities: values.authorities,
          });
      roleModal.onClose();
      setUpdated(!updated);
      toast.success(invoice.id ? "Updated" : "Role Created");
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    let isMounted = true;

    const groupAuthorities = async () => {
      setLoading(true);
      try {
        const groupedData: Record<string, PermissionTemplate[]> = {};
        for (const authority of authorities) {
          const { resource } = authority;
          if (!groupedData[resource]) {
            groupedData[resource] = [];
          }
          groupedData[resource].push(authority);
        }

        if (isMounted) {
          setGroupedAuthorities(groupedData);
        }
      } catch (error) {
        console.error("Error grouping authorities", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    const groupAuthoritiesFromUser = async () => {
      setLoading(true);
      try {
        const groupedData: Record<string, PermissionTemplate[]> = {};
        for (const authority of form.control._formValues.authorities) {
          const { resource } = authority;
          if (!groupedData[resource]) {
            groupedData[resource] = [];
          }
          groupedData[resource].push(authority);
        }

        if (isMounted) {
          setGroupedAuthoritiesUser(groupedData);
        }
      } catch (error) {
        console.error("Error grouping authorities", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    groupAuthorities();
    groupAuthoritiesFromUser();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [form.control._formValues.authorities, roleModal.isOpen, invoice]);

  return (
    <Modal
      title="Role"
      description="Manage roles"
      isOpen={roleModal.isOpen}
      onClose={roleModal.onClose}
    >
      <div className="space-y-4 py-2 pb-4 max-w-full w-72 md:w-[550px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="roleName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role Name:</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="my-4">
              <Separator />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Role Permissions</h2>
              {Object.entries(groupedAuthorities).map(
                ([resource, authorities], index) => (
                  <div
                    key={index}
                    className="border-t border-b md:flex md:justify-between py-2"
                  >
                    <div>{resource}</div>
                    <div className="grid grid-cols-2 md:grid-cols-4">
                      {["READ", "WRITE", "EDIT", "DELETE"].map(
                        (authorityAction) => (
                          <div
                            key={authorityAction}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              disabled={
                                invoice.roleName === "SUPER-ADMIN"
                                  ? true
                                  : false
                              }
                              id={`${resource.toLowerCase()}-${authorityAction}`}
                              value={authorityAction.toLowerCase()}
                              checked={groupedAuthoritiesUser[resource]?.some(
                                (auth) =>
                                  auth.authorityAction === authorityAction
                              )}
                              onClick={(e) => {
                                handleCheckboxSelect(resource, authorityAction);
                                roleModal.onClose();
                                roleModal.onOpen();
                              }}
                            />
                            <label
                              htmlFor={`${resource.toLowerCase()}-${authorityAction}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {authorityAction.charAt(0).toUpperCase() +
                                authorityAction.slice(1)}
                            </label>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
            <DialogFooter>
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  variant="outline"
                  type="button"
                  onClick={roleModal.onClose}
                  className="md:w-auto"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={loading || invoice.roleName === "SUPER-ADMIN"}
                  className="md:w-auto bg-cyan-500"
                >
                  {invoice.id !== 0 ? "Update" : "Add"}
                </Button>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </div>
    </Modal>
  );
};
