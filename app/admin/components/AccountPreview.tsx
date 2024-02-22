"use client";

import { changeAccountStatus } from "@/actions/account-action";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { Account } from "@/types/types";
import { CheckCheck, X } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface PreviewProps {
  data: Account;
  accounts: boolean;
}
const AccountPreview: React.FC<PreviewProps> = ({ data, accounts }) => {
  const router = useRouter();
  const userAuthorities = localStorage.getItem("authorities");
  const [loading, setLoading] = useState(false);
  const [emailBody, setEmailBody] = useState({
    to: data?.email,
    name: data?.fullName,
    title: "Rejection Notification",
    subject: "Rejection of Your Account",
    body: `<p>Dear <strong style="color: rgb(0, 102, 204);">{{name}}</strong>,</p><p><br></p><p><br></p><p><br></p><p><br></p><p>Best regards,</p><p>Diaspora Banking</p><p>Cooperative Bank of Oromia</p>`,
    userId: btoa(data.id.toString()),
    phoneNumber: data?.phone,
    motherName: data?.motherName,
    gender: data?.sex,
    initialDeposit: data?.initialDeposit,
    monthlyIncome: data?.monthlyIncome,
    occupation: data?.occupation,
    branch: data?.branch,
    accountType: data?.accountType,
    city: data?.city,
    state: data?.state,
  });
  const ImageCard: React.FC<{ src: string; label: string }> = ({
    src,
    label,
  }) => (
    <div
      className={`bg-white p-4 border rounded ${
        src.length > 0 ? "cursor-pointer" : ""
      }`}
      onClick={() => {
        src?.length > 0 && window.open(src, "_blank");
      }}
    >
      <Image
        src={src}
        width={200}
        height={40}
        alt={label}
        className="rounded-lg w-full h-auto mb-2"
      />
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );

  const handleApproveClick = async () => {
    setLoading(true);
    try {
      await changeAccountStatus(data.id.toString(), "APPROVED");
      router.refresh();
      toast.success("Account Approved.");
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      router.back();
      setLoading(false);
    }
  };

  const handleRejectClick = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailBody),
      });
      if (response.ok) {
        await changeAccountStatus(data.id.toString(), "REJECTED");
        toast.success("Account rejected.");
      } else {
        console.error("Error sending email:", await response.json());
      }
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      router.back();
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-full mx-auto bg-white p-8 border rounded shadow-lg">
        <div
          className={`flex flex-col items-center mb-6 ${
            data?.photo?.length > 0 ? "cursor-pointer" : ""
          }`}
          onClick={() => {
            data?.photo?.length > 0 && window.open(data?.photo, "_blank");
          }}
        >
          <img
            src={data?.photo}
            alt="Profile Photo"
            className="rounded-full border mb-4"
            style={{ width: "150px", height: "150px" }}
          />
          <h1 className="text-3xl font-bold text-cyan-600">
            {data?.accountType || (
              <span className="text-red-400">Not Filled</span>
            )}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          <div className="flex flex-col items-center mb-6 w-full p-5 border rounded shadow">
            <ImageCard src={data?.residenceCard || ""} label="Residence Card" />
            <h1 className="text-xl font-semibold text-gray-800 mb-2">
              {data?.fullName || (
                <span className="text-red-400">Not Filled</span>
              )}
            </h1>
            <p className="text-gray-600">
              {data?.email || <span className="text-red-400">Not Filled</span>}
            </p>
          </div>

          <div className="col-span-2 flex flex-col gap-8 p-5 border rounded shadow">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b py-2">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Address
                  </h2>
                  <p className="text-gray-600 grid grid-cols-2 gap-4">
                    <span className="font-bold">Street Address </span>
                    <span>
                      :{" "}
                      {data?.streetAddress || (
                        <span className="text-red-400">Not Filled</span>
                      )}
                    </span>
                  </p>
                  <p className="text-gray-600 grid grid-cols-2 gap-4">
                    <span className="font-bold">City </span>
                    <span>
                      :{" "}
                      {data?.city || (
                        <span className="text-red-400">Not Filled</span>
                      )}
                    </span>
                  </p>
                  <p className="text-gray-600 grid grid-cols-2 gap-4">
                    <span className="font-bold">State </span>
                    <span>
                      :{" "}
                      {data?.state || (
                        <span className="text-red-400">Not Filled</span>
                      )}
                    </span>
                  </p>
                  <p className="text-gray-600 grid grid-cols-2 gap-4">
                    <span className="font-bold">ZipCode </span>
                    <span>
                      :{" "}
                      {data?.zipCode || (
                        <span className="text-red-400">Not Filled</span>
                      )}
                    </span>
                  </p>
                  <p className="text-gray-600 grid grid-cols-2 gap-4">
                    <span className="font-bold">Country </span>
                    <span>
                      :{" "}
                      {data?.country || (
                        <span className="text-red-400">Not Filled</span>
                      )}
                    </span>
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Occupation
                  </h2>
                  <p className="text-gray-600 grid grid-cols-2 gap-4 mb-5">
                    <span className="font-bold">Occupation </span>
                    <span>
                      :{" "}
                      {data?.occupation || (
                        <span className="text-red-400">Not Filled</span>
                      )}
                    </span>
                  </p>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Status
                  </h2>
                  <p className="text-gray-600 grid grid-cols-2 gap-4">
                    <span className="font-bold">Status:</span>
                    <span>
                      :{" "}
                      {data?.status || (
                        <span className="text-red-400">Not Filled</span>
                      )}
                    </span>
                  </p>
                  <p className="text-gray-600 items-center justify-center grid grid-cols-2 gap-4">
                    <span className="font-bold">Completed</span>
                    {/* <Badge>
                      {data?.percentageCompleted
                        ? data?.percentageCompleted * 20
                        : 0}
                      %
                    </Badge> */}
                    <span className="flex items-center space-x-1">
                      <Progress
                        value={
                          data?.percentageCompleted
                            ? data?.percentageCompleted * 20
                            : 0
                        }
                      />
                      <span>
                        {data?.percentageCompleted
                          ? data?.percentageCompleted * 20
                          : 0}
                        %
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className=" border-b py-2">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Financial Information
                </h2>
                <p className="text-gray-600 grid grid-cols-2 gap-4">
                  <span className="font-bold">Initial Deposit</span>
                  <span>
                    : $
                    {data?.initialDeposit?.toLocaleString() || (
                      <span className="text-red-400">Not Filled</span>
                    )}
                  </span>
                </p>
                <p className="text-gray-600 grid grid-cols-2 gap-4">
                  <span className="font-bold">Monthly Income</span>
                  <span>
                    : $
                    {data?.monthlyIncome?.toLocaleString() || (
                      <span className="text-red-400">Not Filled</span>
                    )}
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Other Details
                </h2>
                <p className="text-gray-600 grid grid-cols-2 gap-4">
                  <span className="font-bold">Sex</span>
                  <span>
                    :{" "}
                    {data?.sex || (
                      <span className="text-red-400">Not Filled</span>
                    )}
                  </span>
                </p>
                <p className="text-gray-600 grid grid-cols-2 gap-4">
                  <span className="font-bold">Branch</span>
                  <span>
                    :{" "}
                    {data?.branch || (
                      <span className="text-red-400">Not Filled</span>
                    )}
                  </span>
                </p>
                <p className="text-gray-600 grid grid-cols-2 gap-4">
                  <span className="font-bold">Account Type</span>
                  <span>
                    :{" "}
                    {data?.accountType || (
                      <span className="text-red-400">Not Filled</span>
                    )}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          <ImageCard
            src={data?.passport || ""}
            label={`${data?.passport ? "Passport" : "Not Uploaded"}`}
          />
          <ImageCard
            src={data?.signature || ""}
            label={`${data?.signature ? "Signature" : "Not Uploaded"}`}
          />
          <ImageCard
            src={data?.confirmationForm || ""}
            label={`${
              data?.confirmationForm ? "Confirmation Form" : "Not Uploaded"
            }`}
          />
        </div>

        <div className="flex items-center justify-end border-t pt-5">
          <Button
            className="ml-2 border"
            size="sm"
            onClick={() => router.back()}
            variant="secondary"
          >
            Cancel
          </Button>
          {accounts && (
            <div className="flex items-center">
              <div
                className={`${
                  !(
                    userAuthorities?.includes("EDIT_ACCOUNT") ||
                    userAuthorities?.includes("WRITE_ACCOUNT")
                  ) && "cursor-not-allowed"
                }`}
                title={`${
                  !(
                    userAuthorities?.includes("EDIT_ACCOUNT") ||
                    userAuthorities?.includes("WRITE_ACCOUNT")
                  ) && "Not Authorized"
                }`}
              >
                <Popover>
                  <PopoverTrigger asChild>
                    {/* <Button variant="outline">Open popover</Button> */}
                    <Button
                      disabled={
                        !(
                          userAuthorities?.includes("EDIT_ACCOUNT") ||
                          userAuthorities?.includes("WRITE_ACCOUNT")
                        ) ||
                        loading ||
                        data?.status === "REJECTED" ||
                        data?.status === "APPROVED"
                      }
                      className="ml-2 border"
                      size="sm"
                      variant="destructive"
                    >
                      <X className="mr-2 h-4 w-4" />
                      Reject
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[480px] mr-20 h-[420px]">
                    <div className="flex flex-col justify-between h-full">
                      <div className="h-full">
                        <ReactQuill
                          theme="snow"
                          style={{
                            height: "250px",
                            // width: "620px",
                            fontFamily: "Arial, sans-serif",
                          }}
                          modules={{
                            toolbar: [
                              [{ font: [] }],
                              [{ header: [1, 2, 3] }],
                              ["bold", "italic", "underline", "strike"],
                              [{ color: [] }, { background: [] }],
                              [{ script: "sub" }, { script: "super" }],
                              ["blockquote", "code-block"],
                              [{ list: "ordered" }, { list: "bullet" }],
                              [
                                { indent: "-1" },
                                { indent: "+1" },
                                { align: [] },
                              ],
                              ["link", "image", "video"],
                              ["clean"],
                            ],
                          }}
                          value={emailBody.body}
                          onChange={(content) => {
                            setEmailBody({
                              ...emailBody,
                              body: content,
                            });
                          }}
                        />
                      </div>
                      <div className="self-end">
                        <Button
                          disabled={
                            !(
                              userAuthorities?.includes("EDIT_ACCOUNT") ||
                              userAuthorities?.includes("WRITE_ACCOUNT")
                            ) ||
                            loading ||
                            data?.status === "REJECTED" ||
                            data?.status === "APPROVED"
                          }
                          className="ml-2 border"
                          size="sm"
                          variant="destructive"
                          onClick={handleRejectClick}
                        >
                          <X className="mr-2 h-4 w-4" />
                          Confirm Rejection
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <div
                className={`${
                  !(
                    userAuthorities?.includes("EDIT_ACCOUNT") ||
                    userAuthorities?.includes("WRITE_ACCOUNT")
                  ) && "cursor-not-allowed"
                }`}
                title={`${
                  !(
                    userAuthorities?.includes("EDIT_ACCOUNT") ||
                    userAuthorities?.includes("WRITE_ACCOUNT")
                  ) && "Not Authorized"
                }`}
              >
                <Button
                  disabled={
                    !(
                      userAuthorities?.includes("EDIT_ACCOUNT") ||
                      userAuthorities?.includes("WRITE_ACCOUNT")
                    ) ||
                    loading ||
                    data?.status === "REJECTED" ||
                    data?.status === "APPROVED"
                  }
                  className="ml-2 border bg-cyan-500"
                  size="sm"
                  onClick={handleApproveClick}
                >
                  <CheckCheck className="mr-2 h-4 w-4" />
                  Approve
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPreview;
