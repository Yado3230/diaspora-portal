"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { Account, Loan, LoanById } from "@/types/types";
import { CheckCheck, X } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import toast from "react-hot-toast";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface PreviewProps {
  data: LoanById;
}

const PreviewPage: FC<PreviewProps> = ({ data }) => {
  const {
    fullName,
    email,
    phone,
    accountType,
    accountNumber,
    sourcesOfIncome,
    loanAmount,
    loanDocuments,
    status,
    createdAt: addedAt,
  } = data;

  const getStatusColor = (status: any) => {
    switch (status) {
      case "INITIAL":
        return "text-blue-500";
      // Add more cases for other statuses if needed
      default:
        return "text-gray-600";
    }
  };

  const formatDate = (dateString: any) => {
    const options: any = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">{fullName}</h1>
        <p className="text-gray-600 mb-4">
          <strong>Email: </strong>
          {email}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Phone Number: </strong>
          {phone}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Account Type: </strong> {accountType}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Account Number: </strong> {accountNumber}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Sources of Income: </strong>
          {sourcesOfIncome}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Loan Amount: </strong>${loanAmount?.toFixed(2) || 0}
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Loan Documents</h2>
          <ul>
            {loanDocuments.map((document) => (
              <li key={document.id} className="text-blue-500 underline">
                <a
                  href={document.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {document.documentName}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className={`text-lg font-bold ${getStatusColor(status)}`}>
            <strong>Status:</strong> {status}
          </p>
          <p className="text-gray-600">
            <strong>Added At:</strong> {formatDate(addedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
