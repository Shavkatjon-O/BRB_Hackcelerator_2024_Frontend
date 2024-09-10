"use client";

import { useState } from "react";
import Panel from "../_components/Panel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { format, isAfter, subDays } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const data = [
  {
    id: 1,
    title: "New feature: Announcements",
    description: "We have added a new feature that allows you to create announcements.",
    date: "2024-09-11",
    status: "Unread",
  },
  {
    id: 2,
    title: "New feature: Announcements",
    description: "We have added a new feature that allows you to create announcements.",
    date: "2023-08-28",
    status: "Read",
  },
  {
    id: 3,
    title: "New feature: Announcements",
    description: "We have added a new feature that allows you to create announcements.",
    date: "2023-08-12",
    status: "Read",
  },
  {
    id: 4,
    title: "New feature: Announcements",
    description: "We have added a new feature that allows you to create announcements.",
    date: "2023-07-20",
    status: "Unread",
  },
  {
    id: 5,
    title: "New feature: Announcements",
    description: "We have added a new feature that allows you to create announcements.",
    date: "2023-06-10",
    status: "Unread",
  },
  {
    id: 6,
    title: "New feature: Announcements",
    description: "We have added a new feature that allows you to create announcements.",
    date: "2023-05-25",
    status: "Read",
  },
];

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

  const getFilteredData = (filter: string) => {
    const now = new Date();
    return data.filter((item) => {
      const itemDate = new Date(item.date);

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

  return (
    <Panel title="Announcements" action={<TabsComponent onFilterChange={setFilter} />}>
      {renderAnnouncements(getFilteredData(filter))}
    </Panel>
  );
};

export default Page;
