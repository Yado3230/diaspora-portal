"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, User } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ChangePassword from "./ChangePassword";

const formSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().default(""),
  password: z.string().default(""),
  roleId: z.string(),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      roleId: "",
    },
  });

  return (
    <div>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid grid-cols-2 h-full w-[400px]">
          <TabsTrigger value="account" className="py-2">
            <User className="w-5 h-5 mr-2" />
            Account
          </TabsTrigger>
          <TabsTrigger value="password" className="py-2">
            <Lock className="w-5 h-5 mr-2" /> Security
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card className="w-full p-5">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xl">Profile Details</span>
                <Avatar>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <Separator className="my-4" />
              <div className="spaye-y-4 py-2 pb-4 w-96">
                <Form {...form}>
                  <form>
                    <FormField
                      name="fullName"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name:</FormLabel>
                          <FormControl>
                            <Input placeholder="fullname" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="email"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email:</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card className="p-5">
            <ChangePassword />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
