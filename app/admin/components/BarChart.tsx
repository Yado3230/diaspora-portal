"use client";

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

export function Barchart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      {/* <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#02B3F3" radius={[4, 4, 0, 0]} />
      </BarChart> */}
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
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="rejected" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
