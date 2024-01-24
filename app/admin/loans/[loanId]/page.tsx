"use client";

import { LoanById } from "@/types/types";
import React, { useEffect, useState } from "react";
import { getLoanById } from "@/actions/loan-action";
import LoanPreview from "../../components/LoanPreview";

const VisitorPage = ({ params }: { params: { loanId: string } }) => {
  const [loan, setLoan] = useState<LoanById>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLoanById(params.loanId);
      setLoan(res);
    };
    fetchData();
  }, [params.loanId]);
  if (!loan) {
    return null;
  }

  return (
    <div>
      <LoanPreview data={loan} />
    </div>
  );
};

export default VisitorPage;
