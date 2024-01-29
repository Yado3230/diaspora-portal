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
import { useEffect, useState } from "react";
import { EmailTemplate } from "@/types/types";

const EmailPage = () => {
  const emailModal = useEmailModal();

  const [emails, setEmails] = useState<EmailTemplate[]>([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/emails");
      if (!res.ok) {
        throw new Error(`Request failed with status: ${res.status}`);
      }
      const responseData = await res.json();
      const data = responseData instanceof Array ? responseData : [];
      setEmails(data);
    };
    fetchData();
  }, [updated]);

  const [loading, setLoading] = useState(false);
  const [invoice, setInvoice] = useState<{
    id: string;
    title: string;
    body: string;
    subject: string;
  }>({
    id: "",
    title: "",
    body: "",
    subject: "",
  });
  const [open, setOpen] = useState(false);

  const onDelete = async () => {
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
  const keys = [
    "name",
    "account-id",
    "phone-number",
    "mother-name",
    "gender",
    "initial-deposit",
    "monthly-income",
    "occupation",
    "branch",
    "state",
    "city",
    "account-type",
  ];
  const userAuthorities = localStorage.getItem("authorities");

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <EmailModal invoice={invoice} updated={updated} setUpdated={setUpdated} />

      <div className="flex border-b pb-2 mb-5 items-center justify-between">
        <Heading
          title={`Emails (${emails.length})`}
          description="Manage email formats from here and use it anywhere"
        />
        <div></div>
        <div
          className={`${
            !userAuthorities?.includes("WRITE_EMAIL") && "cursor-not-allowed"
          }`}
          title={`${
            !userAuthorities?.includes("WRITE_EMAIL") && "Not Authorized"
          }`}
        >
          <Button
            disabled={!userAuthorities?.includes("WRITE_EMAIL")}
            size="sm"
            className="bg-cyan-500"
            onClick={() => {
              setInvoice({
                id: "",
                title: "",
                body: "",
                subject: "",
              });
              emailModal.onOpen();
            }}
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
            <TableHead className="">Email Name</TableHead>
            <TableHead>Subject</TableHead>
            {/* <TableHead>Email Body</TableHead> */}
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {emails.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium opacity-75">
                {invoice.title}
              </TableCell>
              <TableCell className="opacity-75">{invoice.subject}</TableCell>
              {/* <TableCell className="opacity-75">{invoice.body}</TableCell> */}
              <TableCell>
                <div className="flex items-center whitespace-nowrap space-x-2 opacity-75">
                  <div
                    className={`${
                      !userAuthorities?.includes("EDIT_EMAIL") &&
                      "cursor-not-allowed"
                    }`}
                    title={`${
                      !userAuthorities?.includes("EDIT_EMAIL") &&
                      "Not Authorized"
                    }`}
                  >
                    <Button
                      disabled={!userAuthorities?.includes("EDIT_EMAIL")}
                      variant="outline"
                      className="border-none"
                      size="icon"
                    >
                      <Edit
                        color="#06B6D4"
                        onClick={() => {
                          setInvoice(invoice);
                          emailModal.onOpen();
                        }}
                        className="w-5 h-5 cursor-pointer"
                      />
                    </Button>
                  </div>
                  <div
                    className={`${
                      !userAuthorities?.includes("DELETE_EMAIL") &&
                      "cursor-not-allowed"
                    }`}
                    title={`${
                      !userAuthorities?.includes("DELETE_EMAIL") &&
                      "Not Authorized"
                    }`}
                  >
                    <Button
                      disabled={!userAuthorities?.includes("DELETE_EMAIL")}
                      variant="outline"
                      className="border-none"
                      size="icon"
                    >
                      <Trash
                        color="#DE8224"
                        onClick={() => setOpen(true)}
                        className="w-5 h-5 cursor-pointer"
                      />
                    </Button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="bg-gray-100 p-4">
        <h1 className="text-xl font-semibold mb-4">Replacement Keys</h1>
        <ul className="grid md:grid-cols-3 gap-x-4">
          {keys.map((key) => (
            <li key={key} className="mb-2 flex items-center justify-between border p-1 rounded-md">
              <span>for {key}</span>:
              <span>
                <strong>{`{{${key}}}`}</strong>
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* <MyQuillEditor /> */}
    </>
  );
};
export default EmailPage;
