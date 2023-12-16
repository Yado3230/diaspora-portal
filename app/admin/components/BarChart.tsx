"use client";

import { ReportTypeByMonth } from "@/types/types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    approved: 2010,
    rejected: 1010,
  },
  {
    name: "Feb",
    approved: 6500,
    rejected: 7500,
  },
  {
    name: "Mar",
    approved: 4300,
    rejected: 3300,
  },
  {
    name: "Apr",
    approved: 4750,
    rejected: 2750,
  },
  {
    name: "May",
    approved: 5230,
    rejected: 2230,
  },
  {
    name: "Jun",
    approved: 3600,
    rejected: 1600,
  },
  {
    name: "Jul",
    approved: 5420,
    rejected: 6420,
  },
  {
    name: "Aug",
    approved: 5500,
    rejected: 3500,
  },
  {
    name: "Sep",
    approved: 6300,
    rejected: 4300,
  },
  {
    name: "Oct",
    approved: 3510,
    rejected: 4510,
  },
  {
    name: "Nov",
    approved: 5700,
    rejected: 3700,
  },
  {
    name: "Dec",
    approved: 2900,
    rejected: 900,
  },
];

interface BarChartProps {
  dateFilterByMonth: ReportTypeByMonth[] | undefined;
}

export const Barchart: React.FC<BarChartProps> = ({ dateFilterByMonth }) => {
  const approvedObject = dateFilterByMonth?.find(
    (item) => item.status === "APPROVED"
  );
  const rejectedObject = dateFilterByMonth?.find(
    (item) => item.status === "REJECTED"
  );
  const pendingObject = dateFilterByMonth?.find(
    (item) => item.status === "PENDING"
  );
  const visitorsObject = dateFilterByMonth?.find(
    (item) => item.status === "INITIAL"
  );

  const data = [
    {
      name: "Jan",
      approved: approvedObject?.data.JANUARY,
      rejected: rejectedObject?.data.JANUARY,
      pending: pendingObject?.data.JANUARY,
      visitors: visitorsObject?.data.JANUARY,
    },
    {
      name: "Feb",
      approved: approvedObject?.data.FEBRUARY,
      rejected: rejectedObject?.data.FEBRUARY,
      pending: pendingObject?.data.FEBRUARY,
      visitors: visitorsObject?.data.FEBRUARY,
    },
    {
      name: "Mar",
      approved: approvedObject?.data.MARCH,
      rejected: rejectedObject?.data.MARCH,
      pending: pendingObject?.data.MARCH,
      visitors: visitorsObject?.data.MARCH,
    },
    {
      name: "Apr",
      approved: approvedObject?.data.APRIL,
      rejected: rejectedObject?.data.APRIL,
      pending: pendingObject?.data.APRIL,
      visitors: visitorsObject?.data.APRIL,
    },
    {
      name: "May",
      approved: approvedObject?.data.MAY,
      rejected: rejectedObject?.data.MAY,
      pending: pendingObject?.data.MAY,
      visitors: visitorsObject?.data.MAY,
    },
    {
      name: "Jun",
      approved: approvedObject?.data.JUNE,
      rejected: rejectedObject?.data.JUNE,
      pending: pendingObject?.data.JUNE,
      visitors: visitorsObject?.data.JUNE,
    },
    {
      name: "Jul",
      approved: approvedObject?.data.JULY,
      rejected: rejectedObject?.data.JULY,
      pending: pendingObject?.data.JULY,
      visitors: visitorsObject?.data.JULY,
    },
    {
      name: "Aug",
      approved: approvedObject?.data.AUGUST,
      rejected: rejectedObject?.data.AUGUST,
      pending: pendingObject?.data.AUGUST,
      visitors: visitorsObject?.data.AUGUST,
    },
    {
      name: "Sep",
      approved: approvedObject?.data.SEPTEMBER,
      rejected: rejectedObject?.data.SEPTEMBER,
      pending: pendingObject?.data.SEPTEMBER,
      visitors: visitorsObject?.data.SEPTEMBER,
    },
    {
      name: "Oct",
      approved: approvedObject?.data.OCTOBER,
      rejected: rejectedObject?.data.OCTOBER,
      pending: pendingObject?.data.OCTOBER,
      visitors: visitorsObject?.data.OCTOBER,
    },
    {
      name: "Nov",
      approved: approvedObject?.data.NOVEMBER,
      rejected: rejectedObject?.data.NOVEMBER,
      pending: pendingObject?.data.NOVEMBER,
      visitors: visitorsObject?.data.NOVEMBER,
    },
    {
      name: "Dec",
      approved: approvedObject?.data.DECEMBER,
      rejected: rejectedObject?.data.DECEMBER,
      pending: pendingObject?.data.DECEMBER,
      visitors: visitorsObject?.data.DECEMBER,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="approved"
          stroke="#06B6D4"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="pending" stroke="#8080A9" />
        <Line type="monotone" dataKey="rejected" stroke="#DE8224" />
        <Line type="monotone" dataKey="visitors" stroke="#505050" />
      </LineChart>
    </ResponsiveContainer>
  );
};
