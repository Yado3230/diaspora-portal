"use client";

import { Loan } from "@/types/types";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { getAllLoans } from "@/actions/loan-action";
import LoanClient from "./components/client";

const Page = () => {
  const [loans, setLoans] = useState<Loan[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllLoans();
      const data = res instanceof Array ? res : [];
      setLoans(data);
    };
    fetchData();
  }, []);

  const formattedclients: Loan[] = loans.map((item) => ({
    id: item.id,
    fullName: item.fullName,
    country: item.country,
    loanAmount: item.loanAmount,
    loanType: item.loanType,
    loanSchedule: item.loanSchedule,
    branch: item.branch,
    status: item.status,
    addedAt: item.addedAt,
    updatedAt: item.updatedAt,
  }));
  return (
    <div>
      <LoanClient data={formattedclients} />
    </div>
  );
};

export default Page;
