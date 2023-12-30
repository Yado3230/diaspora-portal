"use client";

import { getAccountById } from "@/actions/account-action";
import { Account } from "@/types/types";
import React, { useEffect, useState } from "react";
import AccountPreview from "../../components/AccountPreview";

const AccountPage = ({ params }: { params: { accountId: string } }) => {
  const [accounts, setAccounts] = useState<Account>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAccountById(params.accountId);
      setAccounts(res);
    };
    fetchData();
  }, []);
  if (!accounts) {
    return null;
  }

  return (
    <div>
      <AccountPreview accounts={true} data={accounts} />
    </div>
  );
};

export default AccountPage;
