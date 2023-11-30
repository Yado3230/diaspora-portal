"use client";

import { UserResponse } from "@/types/types";
import UserClient from "./components/client";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { getAllUsers } from "@/actions/user-action";

const Page = () => {
  const [accounts, setAccounts] = useState<UserResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllUsers();
      setAccounts(res);
    };
    fetchData();
  }, []);

  const formattedclients: UserResponse[] = accounts.map((item) => ({
    userId: item.userId,
    fullName: item.fullName,
    role: item.role,
    email: item.email,
    status: item.status,
    registeredBy: item.registeredBy,
    lastLoggedIn: item.registeredBy,
    registeredAt: format(new Date(item.registeredAt), "MMMM do, yyyy"),
    updatedAt: format(new Date(item.updatedAt), "MMMM do, yyyy"),
  }));
  return (
    <div>
      <UserClient data={formattedclients} />
    </div>
  );
};

export default Page;
