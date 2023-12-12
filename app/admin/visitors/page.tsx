"use client";

import { Account } from "@/types/types";
import VisitorClient from "./components/client";
import { useEffect, useState } from "react";
import { getAllAccounts } from "@/actions/account-action";
import { format } from "date-fns";

const Page = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllAccounts("include");
      const data = res instanceof Array ? res : [];
      setAccounts(data);
    };
    fetchData();
  }, []);

  const formattedclients: Account[] = accounts.map((item) => ({
    id: item.id,
    fullName: item.fullName,
    surname: item.surname,
    motherName: item.motherName,
    email: item.email,
    emailVerified: item.emailVerified,
    phone: item.phone,
    streetAddress: item.streetAddress,
    city: item.city,
    state: item.state,
    zipCode: item.zipCode,
    country: item.country,
    occupation: item.occupation,
    initialDeposit: item.initialDeposit,
    monthlyIncome: item.monthlyIncome,
    sex: item.sex,
    branch: item.branch,
    currency: item.currency,
    photo: item.photo,
    residenceCard: item.residenceCard,
    passport: item.passport,
    confirmationForm: item.confirmationForm,
    percentageCompleted: item.percentageCompleted,
    signature: item.signature,
    accountType: item.accountType,
    status: item.status,
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
    updatedAt: format(new Date(item.updatedAt), "MMMM do, yyyy"),
  }));
  return (
    <div>
      <VisitorClient data={formattedclients} />
    </div>
  );
};

export default Page;
