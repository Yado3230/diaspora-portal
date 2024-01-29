import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "./components/Overview";
import { Book, DollarSign, Globe2 } from "lucide-react";
import LoanOverview from "./components/LoanOverview";
import OfflineOverview from "./components/OfflineOverview";

export default function Admin() {
  return (
    <main className="">
      <Tabs
        defaultValue="account"
        className="flex flex-col items-start w-full justify-start"
      >
        <TabsList className="flex items-start mb-4">
          <TabsTrigger value="account" className="">
            <Book className="w-5 h-5 mr-2" />
            Account
          </TabsTrigger>
          <TabsTrigger value="offline" className="">
            <Globe2 className="w-5 h-5 mr-2" /> Offline Account
          </TabsTrigger>
          <TabsTrigger value="loan" className="">
            <DollarSign className="w-5 h-5 mr-2" /> Loan
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="w-full">
          <Overview />
        </TabsContent>
        <TabsContent value="loan" className="w-full">
          <LoanOverview />
        </TabsContent>
        <TabsContent value="offline" className="w-full">
          <OfflineOverview />
        </TabsContent>
      </Tabs>
    </main>
  );
}
