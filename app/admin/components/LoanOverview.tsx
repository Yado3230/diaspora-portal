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
import {
  Activity,
  ArrowDown,
  ArrowUp,
  Loader,
  UserCheck,
  UserRoundX,
} from "lucide-react";
import PieCharts from "./PieChart";
import { ReportType, ReportTypeByMonth } from "@/types/types";
import {
  getLoanDashboardReports,
  getLoanReportMonthlyByYear,
} from "@/actions/loan-action";

const LoanOverview = () => {
  const currentDate: Date = new Date();
  const currentYear: number = currentDate.getFullYear();

  const [dashboardData, setDashboardData] = useState<ReportType[]>();
  const [dateFilterByMonth, setDateFilterByMonth] =
    useState<ReportTypeByMonth[]>();
  const [dateFilterByMonth2, setDateFilterByMonth2] =
    useState<ReportTypeByMonth[]>();
  const [dashboardDataByYear, setDashboardDataByYear] =
    useState<ReportType[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLoanDashboardReports("");
      const res2 = await getLoanDashboardReports(currentYear);
      const res3 = await getLoanReportMonthlyByYear(currentYear);
      setDashboardData(res);
      setDashboardDataByYear(res2);
      setDateFilterByMonth(res3);
      setDateFilterByMonth2(res3);
    };
    fetchData();
  }, []);

  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const currentYear: number = new Date().getFullYear();
    const yearRange: number = 10;

    const yearArray: number[] = Array.from(
      { length: yearRange },
      (_, index) => currentYear - index
    );
    setYears(yearArray);
  }, []);

  const handleYearChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const res2 = await getLoanDashboardReports(e.target.value);
    setDashboardDataByYear(res2);
  };

  const handleYearChangeLineChart = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const res2 = await getLoanReportMonthlyByYear(e.target.value);
    setDateFilterByMonth(res2);
  };

  //
  // Function to get the name of the month from its index
  const getMonthName = (monthIndex: number): string => {
    const months = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ];

    return months[monthIndex];
  };

  // Get the current date

  // Get the current month (1-indexed, where January is 1 and December is 12)
  const currentMonth: number = currentDate.getMonth() + 1;
  const currentMonthName: string = getMonthName(currentMonth - 1); // Subtract 1 to get the correct index

  // Get the previous month
  let previousMonth: number;

  if (currentMonth === 1) {
    // If the current month is January, set the previous month to December of the previous year
    previousMonth = 12;
  } else {
    // Otherwise, simply subtract 1 from the current month
    previousMonth = currentMonth - 1;
  }

  const previousMonthName: string = getMonthName(previousMonth - 1); // Subtract 1 to get the correct index

  console.log(`Current Month: ${currentMonthName}`);
  console.log(`Previous Month: ${previousMonthName}`);

  const approvedObject = dateFilterByMonth2?.find(
    (item) => item.status === "APPROVED"
  );
  const rejectedObject = dateFilterByMonth2?.find(
    (item) => item.status === "REJECTED"
  );
  const pendingObject = dateFilterByMonth2?.find(
    (item) => item.status === "PENDING"
  );
  const visitorsObject = dateFilterByMonth2?.find(
    (item) => item.status === "INITIAL"
  );

  //
  let approvedpreviousMonthData: number = 0;
  let rejectedpreviousMonthData: number = 0;
  let pendingpreviousMonthData: number = 0;
  let visitorspreviousMonthData: number = 0;
  if (previousMonthName === "JANUARY") {
    approvedpreviousMonthData = approvedObject?.data.JANUARY || 0;
    rejectedpreviousMonthData = rejectedObject?.data.JANUARY || 0;
    pendingpreviousMonthData = pendingObject?.data.JANUARY || 0;
    visitorspreviousMonthData = visitorsObject?.data.JANUARY || 0;
  } else if (previousMonthName === "FEBRUARY") {
    approvedpreviousMonthData = approvedObject?.data.FEBRUARY || 0;
    rejectedpreviousMonthData = rejectedObject?.data.FEBRUARY || 0;
    pendingpreviousMonthData = pendingObject?.data.FEBRUARY || 0;
    visitorspreviousMonthData = visitorsObject?.data.FEBRUARY || 0;
  } else if (previousMonthName === "MARCH") {
    approvedpreviousMonthData = approvedObject?.data.MARCH || 0;
    rejectedpreviousMonthData = rejectedObject?.data.MARCH || 0;
    pendingpreviousMonthData = pendingObject?.data.MARCH || 0;
    visitorspreviousMonthData = visitorsObject?.data.MARCH || 0;
  } else if (previousMonthName === "APRIL") {
    approvedpreviousMonthData = approvedObject?.data.APRIL || 0;
    rejectedpreviousMonthData = rejectedObject?.data.APRIL || 0;
    pendingpreviousMonthData = pendingObject?.data.APRIL || 0;
    visitorspreviousMonthData = visitorsObject?.data.APRIL || 0;
  } else if (previousMonthName === "MAY") {
    approvedpreviousMonthData = approvedObject?.data.MAY || 0;
    rejectedpreviousMonthData = rejectedObject?.data.MAY || 0;
    pendingpreviousMonthData = pendingObject?.data.MAY || 0;
    visitorspreviousMonthData = visitorsObject?.data.MAY || 0;
  } else if (previousMonthName === "JUNE") {
    approvedpreviousMonthData = approvedObject?.data.JUNE || 0;
    rejectedpreviousMonthData = rejectedObject?.data.JUNE || 0;
    pendingpreviousMonthData = pendingObject?.data.JUNE || 0;
    visitorspreviousMonthData = visitorsObject?.data.JUNE || 0;
  } else if (previousMonthName === "JULY") {
    approvedpreviousMonthData = approvedObject?.data.JULY || 0;
    rejectedpreviousMonthData = rejectedObject?.data.JULY || 0;
    pendingpreviousMonthData = pendingObject?.data.JULY || 0;
    visitorspreviousMonthData = visitorsObject?.data.JULY || 0;
  } else if (previousMonthName === "AUGUST") {
    approvedpreviousMonthData = approvedObject?.data.AUGUST || 0;
    rejectedpreviousMonthData = rejectedObject?.data.AUGUST || 0;
    pendingpreviousMonthData = pendingObject?.data.AUGUST || 0;
    visitorspreviousMonthData = visitorsObject?.data.AUGUST || 0;
  } else if (previousMonthName === "SEPTEMBER") {
    approvedpreviousMonthData = approvedObject?.data.SEPTEMBER || 0;
    rejectedpreviousMonthData = rejectedObject?.data.SEPTEMBER || 0;
    pendingpreviousMonthData = pendingObject?.data.SEPTEMBER || 0;
    visitorspreviousMonthData = visitorsObject?.data.SEPTEMBER || 0;
  } else if (previousMonthName === "OCTOBER") {
    approvedpreviousMonthData = approvedObject?.data.OCTOBER || 0;
    rejectedpreviousMonthData = rejectedObject?.data.OCTOBER || 0;
    pendingpreviousMonthData = pendingObject?.data.OCTOBER || 0;
    visitorspreviousMonthData = visitorsObject?.data.OCTOBER || 0;
  } else if (previousMonthName === "NOVEMBER") {
    approvedpreviousMonthData = approvedObject?.data.NOVEMBER || 0;
    rejectedpreviousMonthData = rejectedObject?.data.NOVEMBER || 0;
    pendingpreviousMonthData = pendingObject?.data.NOVEMBER || 0;
    visitorspreviousMonthData = visitorsObject?.data.NOVEMBER || 0;
  } else if (previousMonthName === "DECEMBER") {
    approvedpreviousMonthData = approvedObject?.data.DECEMBER || 0;
    rejectedpreviousMonthData = rejectedObject?.data.DECEMBER || 0;
    pendingpreviousMonthData = pendingObject?.data.DECEMBER || 0;
    visitorspreviousMonthData = visitorsObject?.data.DECEMBER || 0;
  }
  //
  let approvedcurrentMonthData: number = 0;
  let rejectedcurrentMonthData: number = 0;
  let pendingcurrentMonthData: number = 0;
  let visitorscurrentMonthData: number = 0;
  if (currentMonthName === "JANUARY") {
    approvedcurrentMonthData = approvedObject?.data.JANUARY || 0;
    rejectedcurrentMonthData = rejectedObject?.data.JANUARY || 0;
    pendingcurrentMonthData = pendingObject?.data.JANUARY || 0;
    visitorscurrentMonthData = visitorsObject?.data.JANUARY || 0;
  } else if (currentMonthName === "FEBRUARY") {
    approvedcurrentMonthData = approvedObject?.data.FEBRUARY || 0;
    rejectedcurrentMonthData = rejectedObject?.data.FEBRUARY || 0;
    pendingcurrentMonthData = pendingObject?.data.FEBRUARY || 0;
    visitorscurrentMonthData = visitorsObject?.data.FEBRUARY || 0;
  } else if (currentMonthName === "MARCH") {
    approvedcurrentMonthData = approvedObject?.data.MARCH || 0;
    rejectedcurrentMonthData = rejectedObject?.data.MARCH || 0;
    pendingcurrentMonthData = pendingObject?.data.MARCH || 0;
    visitorscurrentMonthData = visitorsObject?.data.MARCH || 0;
  } else if (currentMonthName === "APRIL") {
    approvedcurrentMonthData = approvedObject?.data.APRIL || 0;
    rejectedcurrentMonthData = rejectedObject?.data.APRIL || 0;
    pendingcurrentMonthData = pendingObject?.data.APRIL || 0;
    visitorscurrentMonthData = visitorsObject?.data.APRIL || 0;
  } else if (currentMonthName === "MAY") {
    approvedcurrentMonthData = approvedObject?.data.MAY || 0;
    rejectedcurrentMonthData = rejectedObject?.data.MAY || 0;
    pendingcurrentMonthData = pendingObject?.data.MAY || 0;
    visitorscurrentMonthData = visitorsObject?.data.MAY || 0;
  } else if (currentMonthName === "JUNE") {
    approvedcurrentMonthData = approvedObject?.data.JUNE || 0;
    rejectedcurrentMonthData = rejectedObject?.data.JUNE || 0;
    pendingcurrentMonthData = pendingObject?.data.JUNE || 0;
    visitorscurrentMonthData = visitorsObject?.data.JUNE || 0;
  } else if (currentMonthName === "JULY") {
    approvedcurrentMonthData = approvedObject?.data.JULY || 0;
    rejectedcurrentMonthData = rejectedObject?.data.JULY || 0;
    pendingcurrentMonthData = pendingObject?.data.JULY || 0;
    visitorscurrentMonthData = visitorsObject?.data.JULY || 0;
  } else if (currentMonthName === "AUGUST") {
    approvedcurrentMonthData = approvedObject?.data.AUGUST || 0;
    rejectedcurrentMonthData = rejectedObject?.data.AUGUST || 0;
    pendingcurrentMonthData = pendingObject?.data.AUGUST || 0;
    visitorscurrentMonthData = visitorsObject?.data.AUGUST || 0;
  } else if (currentMonthName === "SEPTEMBER") {
    approvedcurrentMonthData = approvedObject?.data.SEPTEMBER || 0;
    rejectedcurrentMonthData = rejectedObject?.data.SEPTEMBER || 0;
    pendingcurrentMonthData = pendingObject?.data.SEPTEMBER || 0;
    visitorscurrentMonthData = visitorsObject?.data.SEPTEMBER || 0;
  } else if (currentMonthName === "OCTOBER") {
    approvedcurrentMonthData = approvedObject?.data.OCTOBER || 0;
    rejectedcurrentMonthData = rejectedObject?.data.OCTOBER || 0;
    pendingcurrentMonthData = pendingObject?.data.OCTOBER || 0;
    visitorscurrentMonthData = visitorsObject?.data.OCTOBER || 0;
  } else if (currentMonthName === "NOVEMBER") {
    approvedcurrentMonthData = approvedObject?.data.NOVEMBER || 0;
    rejectedcurrentMonthData = rejectedObject?.data.NOVEMBER || 0;
    pendingcurrentMonthData = pendingObject?.data.NOVEMBER || 0;
    visitorscurrentMonthData = visitorsObject?.data.NOVEMBER || 0;
  } else if (currentMonthName === "DECEMBER") {
    approvedcurrentMonthData = approvedObject?.data.DECEMBER || 0;
    rejectedcurrentMonthData = rejectedObject?.data.DECEMBER || 0;
    pendingcurrentMonthData = pendingObject?.data.DECEMBER || 0;
    visitorscurrentMonthData = visitorsObject?.data.DECEMBER || 0;
  }

  // Calculate percentage change
  const approvedpercentageChange: number =
    approvedpreviousMonthData === 0 && approvedcurrentMonthData > 0
      ? 100
      : approvedcurrentMonthData === 0
      ? 0
      : ((approvedcurrentMonthData - approvedpreviousMonthData) /
          (approvedpreviousMonthData !== 0 ? approvedpreviousMonthData : 1)) *
        100;

  const rejectedpercentageChange: number =
    rejectedpreviousMonthData === 0 && rejectedcurrentMonthData > 0
      ? 100
      : rejectedcurrentMonthData === 0
      ? 0
      : ((rejectedcurrentMonthData - rejectedpreviousMonthData) /
          (rejectedpreviousMonthData !== 0 ? rejectedpreviousMonthData : 1)) *
        100;

  const pendingpercentageChange: number =
    pendingpreviousMonthData === 0 && pendingcurrentMonthData > 0
      ? 100
      : pendingcurrentMonthData === 0
      ? 0
      : ((pendingcurrentMonthData - pendingpreviousMonthData) /
          (pendingpreviousMonthData !== 0 ? pendingpreviousMonthData : 1)) *
        100;

  const visitorspercentageChange: number =
    visitorspreviousMonthData === 0 && visitorscurrentMonthData > 0
      ? 100
      : visitorscurrentMonthData === 0
      ? 0
      : ((visitorscurrentMonthData - visitorspreviousMonthData) /
          (visitorspreviousMonthData !== 0 ? visitorspreviousMonthData : 1)) *
        100;

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-[#00A9E8]">
              Approved
            </CardTitle>
            <UserCheck color="#00A9E8" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#00A9E8]">
              {
                dashboardData?.find((item) => item.status === "APPROVED")
                  ?.totalData
              }
            </div>
            <p className="text-xs text-muted-foreground flex items-center space-x-2">
              <span className="text-cyan-500 text-lg flex items-center">
                {approvedpercentageChange > 0 ? (
                  <ArrowUp className="w-5 h-5" />
                ) : (
                  approvedpercentageChange < 0 && (
                    <ArrowDown className="w-5 h-5" />
                  )
                )}
                {approvedpercentageChange.toFixed(2)}%
              </span>
              {"  "}
              <span> from last month</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-[#8080A9]">
              Pending
            </CardTitle>
            <Loader color="#8080A9" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#8080A9]">
              {
                dashboardData?.find((item) => item.status === "PENDING")
                  ?.totalData
              }
            </div>
            <p className="text-xs text-muted-foreground flex items-center space-x-2">
              <span className="text-[#8080A9] text-lg flex items-center">
                {pendingpercentageChange > 0 ? (
                  <ArrowUp className="w-5 h-5" />
                ) : (
                  pendingpercentageChange < 0 && (
                    <ArrowDown className="w-5 h-5" />
                  )
                )}
                {pendingpercentageChange.toFixed(2)}%
              </span>{" "}
              <span>from last month</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-[#DE8224]">
              Rejected
            </CardTitle>
            <UserRoundX color="#DE8224" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-[#DE8224] font-bold">
              {
                dashboardData?.find((item) => item.status === "REJECTED")
                  ?.totalData
              }
            </div>
            <p className="text-xs text-muted-foreground flex items-center space-x-2">
              <span className="text-[#DE8224] text-lg flex items-center">
                {rejectedpercentageChange > 0 ? (
                  <ArrowUp className="w-5 h-5" />
                ) : (
                  rejectedpercentageChange < 0 && (
                    <ArrowDown className="w-5 h-5" />
                  )
                )}
                {rejectedpercentageChange.toFixed(2)}%
              </span>{" "}
              <span>from last month</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-[#505050]">
              Initiated
            </CardTitle>
            <Activity color="#505050" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#505050]">
              {
                dashboardData?.find((item) => item.status === "INITIAL")
                  ?.totalData
              }
            </div>
            <p className="text-xs text-muted-foreground flex items-center space-x-2">
              <span className="text-lg flex items-center text-[#505050]">
                {visitorspercentageChange > 0 ? (
                  <ArrowUp className="w-5 h-5" />
                ) : (
                  visitorspercentageChange < 0 && (
                    <ArrowDown className="w-5 h-5" />
                  )
                )}
                {visitorspercentageChange.toFixed(2)}%
              </span>{" "}
              <span>from last month</span>
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 md:col-span-2 lg:col-span-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Loan Analytics</CardTitle>
                <CardDescription>12 months data.</CardDescription>
              </div>
              <div>
                <select
                  onChange={(e) => handleYearChangeLineChart(e)}
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
          <CardContent className="pl-2">
            <Barchart dateFilterByMonth={dateFilterByMonth} />
          </CardContent>
        </Card>
        <Card className="col-span-3 md:col-span-2 lg:col-span-3">
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
                dashboardDataByYear?.find((item) => item.status === "APPROVED")
                  ?.totalData || 0
              }
              rejected={
                dashboardDataByYear?.find((item) => item.status === "REJECTED")
                  ?.totalData || 0
              }
              visitors={
                dashboardDataByYear?.find((item) => item.status === "INITIAL")
                  ?.totalData || 0
              }
              pending={
                dashboardDataByYear?.find((item) => item.status === "PENDING")
                  ?.totalData || 0
              }
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoanOverview;
