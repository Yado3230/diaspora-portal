"use client";

import { Account, OfflineAccount } from "@/types/types";
import ClientAccount from "./components/client";
import { useEffect, useState } from "react";
import { getAllAccounts } from "@/actions/account-action";
import { format } from "date-fns";
import { getAllOfflineAccounts } from "@/actions/offline-account-action";

const Page = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllAccounts("exclude");
      const data = res instanceof Array ? res : [];
      setAccounts(data);
    };
    fetchData();
  }, []);

  const onlineformattedclients: Account[] = accounts.map((item) => ({
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
    createdAt: new Date(item.createdAt).toISOString().split("T")[0],
    updatedAt: new Date(item.updatedAt).toISOString().split("T")[0],
  }));

  return (
    <div>
      <ClientAccount onlineData={onlineformattedclients} />
    </div>
  );
};

export default Page;
