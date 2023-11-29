"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    total: 2010,
  },
  {
    name: "Feb",
    total: 6500,
  },
  {
    name: "Mar",
    total: 4300,
  },
  {
    name: "Apr",
    total: 4750,
  },
  {
    name: "May",
    total: 5230,
  },
  {
    name: "Jun",
    total: 3600,
  },
  {
    name: "Jul",
    total: 5420,
  },
  {
    name: "Aug",
    total: 5500,
  },
  {
    name: "Sep",
    total: 6300,
  },
  {
    name: "Oct",
    total: 3510,
  },
  {
    name: "Nov",
    total: 5700,
  },
  {
    name: "Dec",
    total: 2900,
  },
];

export function Barchart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
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
      </BarChart>
    </ResponsiveContainer>
  );
}
