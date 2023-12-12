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

import { useEmailModal } from "@/hooks/use-email-modal";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  emailName: z.string().default(""),
  subject: z.string().default(""),
  body: z.string().default(""),
});

export const EmailModal = () => {
  const emailModal = useEmailModal();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailName: "",
      subject: "",
      body: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // try {
    //   setLoading(true);
    //   const response = await createUser(values);
    //   if (response) {
    //     toast.success("User Created");
    //     window.location.reload();
    //   }
    //   emailModal.onClose();
    // } catch (error) {
    //   toast.error("Something went wrong!");
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <Modal
      title="Add Email Format"
      description="Add a new email format"
      isOpen={emailModal.isOpen}
      onClose={emailModal.onClose}
    >
      <div className="spaye-y-4 py-2 pb-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="emailName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Name:</FormLabel>
                  <FormControl>
                    <Input placeholder="email name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="subject"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject:</FormLabel>
                  <FormControl>
                    <Input placeholder="subject" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="body"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Body:</FormLabel>
                  <FormControl>
                    <Textarea placeholder="email body" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
              <Button
                variant="outline"
                type="button"
                onClick={emailModal.onClose}
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
