"use client";

import { useState, useEffect } from "react";
import Panel from "../_components/Panel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { format, isAfter, subDays } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getAnonsList } from "./_services/anonsServices";
import { AnonsListType } from "./_types/anonsTypes";

const TabsComponent = ({ onFilterChange }: { onFilterChange: (filter: string) => void }) => {
  const handleTabChange = (value: string) => {
    onFilterChange(value);
  };

  return (
    <Tabs defaultValue="all" onValueChange={handleTabChange}>
      <TabsList className="flex gap-2 bg-slate-200 dark:bg-slate-700">
        <TabsTrigger value="all">All Time</TabsTrigger>
        <TabsTrigger value="last7days">Last 7 Days</TabsTrigger>
        <TabsTrigger value="last30days">Last 30 Days</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

const Page = () => {
  const [filter, setFilter] = useState("all");
  const [anonsData, setAnonsData] = useState<AnonsListType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getAnonsList();
        setAnonsData(response);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getFilteredData = (filter: string) => {
    const now = new Date();
    return anonsData.filter((item) => {
      const itemDate = new Date(item.created_at);

      if (filter === "last7days") {
        return isAfter(itemDate, subDays(now, 7));
      } else if (filter === "last30days") {
        return isAfter(itemDate, subDays(now, 30));
      }
      return true;
    });
  };

  const renderAnnouncements = (filteredData: any) => {
    return (
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item: any, index: number) => (
          <div
            key={index}
            className="w-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-lg p-6 flex flex-col gap-4"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">{item.title}</h2>
              {
                item.status === "Unread" ? (
                  <Badge className="bg-blue-500 text-white hover:bg-blue-600 text-xs">
                    {item.status}
                  </Badge>
                ) : null
              }
            </div>  
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{item.description}</p>

            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
              <p className="text-xs">{format(new Date(item.date), "yyyy-MM-dd")}</p>
              <Button variant="link" asChild>
                <Link href={`/dashboard/announcements/${item.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                  Read more
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Panel title="Announcements" action={<TabsComponent onFilterChange={setFilter} />}>
      {renderAnnouncements(getFilteredData(filter))}
    </Panel>
  );
};

export default Page;
