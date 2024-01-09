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
import { useState } from "react";
import { toast } from "react-hot-toast";

import { resetPassword } from "@/actions/user-action";
import { useChangePasswordModal } from "@/hooks/use-change-password-modal";
import { useAuth } from "@/app/api/auth/contexts/AuthContext";

// const formSchema = z.object({
//   password: z.string().min(6),
//   confirmPassword: z.string().min(6),
// });

const formSchema = z
  .object({
    password: z
      .string()
      .min(6)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
        message:
          "Password must contain at least one uppercase, one lowercase, and one numerical character",
      }),
    confirmPassword: z
      .string()
      .min(6)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
        message:
          "Password must contain at least one uppercase, one lowercase, and one numerical character",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const ChangePasswordModal = () => {
  const useChangePassword = useChangePasswordModal();
  const [loading, setLoading] = useState(false);
  const { logout } = useAuth();

  const { accessToken } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const response = await resetPassword(values.password, accessToken);
      if (response) {
        toast.success("Password reset successfully");
        logout();
        window.location.reload();
      }
      useChangePassword.onClose();
    } catch (error) {
      toast.error("Failed to reset password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Change Password"
      description="You should change your password"
      isOpen={useChangePassword.isOpen}
      onClose={useChangePassword.onClose}
    >
      <div className="spaye-y-4 py-2 pb-4 w-72 md:w-96">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password:</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password:</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="re-type password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
              <Button
                variant="outline"
                type="button"
                onClick={useChangePassword.onClose}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading} className="bg-cyan-500">
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};
