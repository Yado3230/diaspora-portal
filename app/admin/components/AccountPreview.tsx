"use client";

import { changeAccountStatus } from "@/actions/account-action";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Account } from "@/types/types";
import { CheckCheck, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

interface PreviewProps {
  data: Account;
}
const AccountPreview: React.FC<PreviewProps> = ({ data }) => {
  const router = useRouter();
  const ImageCard: React.FC<{ src: string; label: string }> = ({
    src,
    label,
  }) => (
    <div className="bg-white p-4 border rounded">
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
    try {
      await changeAccountStatus(data.id.toString(), "APPROVED");
      router.refresh();
      toast.success("Account Approved.");
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      // setLoading(false);
    }
  };

  const handleRejectClick = async () => {
    try {
      await changeAccountStatus(data.id.toString(), "REJECTED");
      router.refresh();
      toast.success("Account rejected.");
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-full mx-auto bg-white p-8 border rounded shadow-lg">
        <div className="flex flex-col items-center mb-6">
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
                    {data?.initialDeposit || (
                      <span className="text-red-400">Not Filled</span>
                    )}
                  </span>
                </p>
                <p className="text-gray-600 grid grid-cols-2 gap-4">
                  <span className="font-bold">Monthly Income</span>
                  <span>
                    : $
                    {data?.monthlyIncome || (
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
            label={`${data?.passport ? "Signature" : "Not Uploaded"}`}
          />
          <ImageCard
            src={data?.confirmationForm || ""}
            label={`${data?.passport ? "Confirmation Form" : "Not Uploaded"}`}
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
          <Button
            className="ml-2 border"
            size="sm"
            variant="destructive"
            onClick={handleRejectClick}
          >
            <X className="mr-2 h-4 w-4" />
            Reject
          </Button>
          <Button
            className="ml-2 border bg-cyan-500"
            size="sm"
            onClick={handleApproveClick}
          >
            <CheckCheck className="mr-2 h-4 w-4" />
            Approve
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountPreview;
