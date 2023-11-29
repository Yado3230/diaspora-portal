import React from "react";
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

const Overview = () => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Approved</CardTitle>
            <UserCheck color="#00A9E8" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#00A9E8]">45,231.89</div>
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
            <div className="text-2xl font-bold text-[#80808B]">2350</div>
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
            <div className="text-2xl text-[#DE8224] font-bold">12,234</div>
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
            <div className="text-2xl font-bold">573</div>
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
            <CardTitle>User Activities</CardTitle>
            <CardDescription>last 12 months data.</CardDescription>
          </CardHeader>
          <CardContent>
            <PieCharts />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
