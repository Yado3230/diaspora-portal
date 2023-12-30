import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  currentPassword: z.string().default(""),
  newPassword: z.string().default(""),
  confirmPassword: z.string().default(""),
});

const ChangePassword = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  return (
    <div>
      <div>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xl">Change Password</span>
        </div>
        <Separator className="my-4" />
        <div className="spaye-y-4 py-2 pb-4">
          <Form {...form}>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  name="currentPassword"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Password:</FormLabel>
                      <FormControl>
                        <Input
                          type="current password"
                          placeholder="current password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="newPassword"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password:</FormLabel>
                      <FormControl>
                        <Input
                          type="new password"
                          placeholder="new password"
                          {...field}
                        />
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
                          type="confirm password"
                          placeholder="confirm password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button variant="outline" type="button">
                  Cancel
                </Button>
                <Button type="submit" className="bg-cyan-500">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
