"use client";

import { getAccountById } from "@/actions/account-action";
import { Account } from "@/types/types";
import React, { useEffect, useState } from "react";
import AccountPreview from "../../components/AccountPreview";

const VisitorPage = ({ params }: { params: { visitorId: string } }) => {
  const [accounts, setAccounts] = useState<Account>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAccountById(params.visitorId);
      setAccounts(res);
    };
    fetchData();
  }, [params.visitorId]);
  if (!accounts) {
    return null;
  }

  return (
    <div>
      <AccountPreview accounts={false} data={accounts} />
    </div>
  );
};

export default VisitorPage;
