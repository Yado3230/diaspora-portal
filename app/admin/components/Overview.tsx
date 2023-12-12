"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Barchart } from "./BarChart";
import { Activity, Loader, UserCheck, UserRoundX } from "lucide-react";
import PieCharts from "./PieChart";
import { getDashboardReports } from "@/actions/account-action";
import { ReportType } from "@/types/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Overview = () => {
  const currentDate: Date = new Date();
  const currentYear: number = currentDate.getFullYear();

  const [dashboardData, setDashboardData] = useState<ReportType[]>([]);
  const [dateFilter, setDateFilter] = useState<number>(currentYear);
  const [dashboardDataByYear, setDashboardDataByYear] = useState<ReportType[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDashboardReports("");
      const res2 = await getDashboardReports(currentYear);
      const data = res instanceof Array ? res : [];
      const data2 = res2 instanceof Array ? res2 : [];
      setDashboardData(data);
      setDashboardDataByYear(data2);
    };
    fetchData();
  }, []);

  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const currentYear: number = new Date().getFullYear();
    const yearRange: number = 10; // Adjust the range as needed

    const yearArray: number[] = Array.from(
      { length: yearRange },
      (_, index) => currentYear - index
    );
    setYears(yearArray);
  }, []);

  const handleYearChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const res2 = await getDashboardReports(e.target.value);
    const data2: ReportType[] = res2 instanceof Array ? res2 : [];
    setDashboardDataByYear(data2);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Approved</CardTitle>
            <UserCheck color="#00A9E8" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#00A9E8]">
              {
                dashboardData.find((item) => item.status === "APPROVED")
                  ?.totalData
              }
            </div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Pending</CardTitle>
            <Loader color="#80808B" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#80808B]">
              {
                dashboardData.find((item) => item.status === "PENDING")
                  ?.totalData
              }
            </div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Rejected</CardTitle>
            <UserRoundX color="#DE8224" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-[#DE8224] font-bold">
              {
                dashboardData.find((item) => item.status === "REJECTED")
                  ?.totalData
              }
            </div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Visitors</CardTitle>
            <Activity />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {
                dashboardData.find((item) => item.status === "INITIAL")
                  ?.totalData
              }
            </div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Approved User accounts</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Barchart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>User Activities</CardTitle>
                <CardDescription>12 months data.</CardDescription>
              </div>
              <div>
                <select
                  onChange={(e) => handleYearChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {years.map((year) => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <PieCharts
              approved={
                dashboardDataByYear.find((item) => item.status === "APPROVED")
                  ?.totalData || 0
              }
              rejected={
                dashboardDataByYear.find((item) => item.status === "REJECTED")
                  ?.totalData || 0
              }
              visitors={
                dashboardDataByYear.find((item) => item.status === "INITIAL")
                  ?.totalData || 0
              }
              pending={
                dashboardDataByYear.find((item) => item.status === "PENDING")
                  ?.totalData || 0
              }
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
