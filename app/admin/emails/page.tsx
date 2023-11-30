"use client";

import { AlertModal } from "@/components/modals/alert-modal";
import { EmailModal } from "@/components/modals/email-modal";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEmailModal } from "@/hooks/use-email-modal";
import { Edit, Plus, Trash } from "lucide-react";
import { useState } from "react";

const emails = [
  {
    emailName: "Email 001",
    subject: "Subject 001",
    body: "hdsahfdsfjd fdsfadkfdsa fsdkjfasdfhsdf fahds fsdfhsd fsdfhsa fdsfdsf dsfkds fdhfds",
  },
  {
    emailName: "Email 002",
    subject: "Subject 001",
    body: "hdsahfdsfjd fdsfadkfdsa fsdkjfasdfhsdf fahds fsdfhsd fsdfhsa fdsfdsf dsfkds fdhfds",
  },
  {
    emailName: "Email 003",
    subject: "Subject 001",
    body: "hdsahfdsfjd fdsfadkfdsa fsdkjfasdfhsdf fahds fsdfhsd fsdfhsa fdsfdsf dsfkds fdhfds",
  },
  {
    emailName: "Email 004",
    subject: "Subject 001",
    body: "hdsahfdsfjd fdsfadkfdsa fsdkjfasdfhsdf fahds fsdfhsd fsdfhsa fdsfdsf dsfkds fdhfds",
  },
  {
    emailName: "Email 005",
    subject: "Subject 001",
    body: "Hello, I was looking at your site and wanted to ask if you  would be interested in getting two-hundred and fifty thousand (250,000) emails sent",
  },
  {
    emailName: "Email 006",
    subject: "Subject 001",
    body: "hdsahfdsfjd fdsfadkfdsa fsdkjfasdfhsdf fahds fsdfhsd fsdfhsa fdsfdsf dsfkds fdhfds",
  },
  {
    emailName: "Email 007",
    subject: "Subject 001",
    body: "hdsahfdsfjd fdsfadkfdsa fsdkjfasdfhsdf fahds fsdfhsd fsdfhsa fdsfdsf dsfkds fdhfds",
  },
];

const EmailPage = () => {
  const emailModal = useEmailModal();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onDelete = async () => {
    console.log("deleted");
    // try {
    //   setLoading(true);
    //   await deleteAccount(data.id.toString());
    //   router.refresh();
    //   toast.success("Account deleted.");
    // } catch (error) {
    //   toast.error("Something went wrong!");
    // } finally {
    //   setLoading(false);
    //   setOpen(false);
    // }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <EmailModal />
      <div className="flex border-b pb-2 mb-5 items-center justify-between">
        <Heading
          title={`Emails (${emails.length})`}
          description="Manage email formats from here and use it anywhere"
        />
        <div></div>
        <div>
          <Button
            size="sm"
            className="bg-cyan-500"
            onClick={() => emailModal.onOpen()}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>
      <Table>
        <TableCaption>A list of your email formats.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Email Name</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Email Body</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {emails.map((invoice) => (
            <TableRow key={invoice.emailName}>
              <TableCell className="font-medium opacity-75">
                {invoice.emailName}
              </TableCell>
              <TableCell className="opacity-75">{invoice.subject}</TableCell>
              <TableCell className="opacity-75">{invoice.body}</TableCell>
              <TableCell>
                <div className="flex whitespace-nowrap space-x-2 opacity-75">
                  <Edit
                    color="#06B6D4"
                    onClick={() => emailModal.onOpen()}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <Trash
                    color="#DE8224"
                    onClick={() => setOpen(true)}
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
export default EmailPage;
