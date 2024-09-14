"use client";

import { useEffect, useState } from "react";
import Panel from "../../_components/Panel";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAnonsDetail } from "../_services/anonsServices";
import { AnonsType } from "../_types/anonsTypes";
import { format } from "date-fns";  // Import date formatting utility
import { Skeleton } from "@/components/ui/skeleton";  // Import Skeleton component

const Page = () => {
  const { id } = useParams();
  const anons_id = Array.isArray(id) ? id[0] : id;
  const [anons, setAnons] = useState<AnonsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAnonsDetail = async () => {
      try {
        setLoading(true);
        const response = await getAnonsDetail(Number(anons_id));
        setAnons(response);
      } catch (error) {
        setError(true);
        console.error("Error fetching announcement details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (anons_id) {
      fetchAnonsDetail();
    }
  }, [anons_id]);

  const renderSkeleton = () => (
    <div className="bg-white dark:bg-slate-800 shadow-lg transition-shadow duration-200 rounded-lg p-6 flex flex-col gap-4">
      <Skeleton className="h-8 w-3/4 bg-slate-200 dark:bg-slate-700" />
      <Skeleton className="h-4 w-full bg-slate-200 dark:bg-slate-700" />
      <Skeleton className="h-4 w-full bg-slate-200 dark:bg-slate-700" />
      <Skeleton className="h-4 w-full bg-slate-200 dark:bg-slate-700" />
      <Skeleton className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700" />
    </div>
  );

  if (loading) {
    return (
      <Panel title="Announcements" action={
        <Button variant="default" asChild>
          <Link href="/dashboard/announcements">Back</Link>
        </Button>
      }>
        {renderSkeleton()}
      </Panel>
    );
  }

  if (error || !anons) {
    return (
      <Panel
        title="Announcement Not Found"
        action={
          <Button variant="outline" asChild>
            <Link href="/dashboard/announcements">Back</Link>
          </Button>
        }
      >
        <p className="dark:text-slate-100">
          The announcement you are looking for does not exist.
        </p>
      </Panel>
    );
  }

  return (
    <Panel
      title="Announcements"
      action={
        <Button variant="default" asChild>
          <Link href="/dashboard/announcements">Back</Link>
        </Button>
      }
    >
      <div className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-lg p-6 flex flex-col gap-4">
        <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          {anons.title}
        </h1>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {anons.description}
        </p>

        <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
          <p className="text-xs">
            {format(new Date(anons.created_at), "yyyy-MM-dd")}
          </p>
        </div>
      </div>
    </Panel>
  );
};

export default Page;
