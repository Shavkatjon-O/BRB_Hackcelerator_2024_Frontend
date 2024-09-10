"use client";

import Panel from "../../_components/Panel";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "New feature: Announcements",
    description: "We have added a new feature that allows you to create announcements.",
    date: "2021-09-01",
  },
  {
    id: 2,
    title: "New feature: Announcements",
    description: "We have added a new feature that allows you to create announcements.",
    date: "2021-09-01",
  },
  {
    id: 3,
    title: "New feature: Announcements",
    description: "We have added a new feature that allows you to create announcements.",
    date: "2021-09-01",
  },
  {
    id: 4,
    title: "New feature: Announcements",
    description: "We have added a new feature that allows you to create announcements.",
    date: "2021-09-01",
  },
  {
    id: 5,
    title: "New feature: Announcements",
    description: "We have added a new feature that allows you to create announcements.",
    date: "2021-09-01",
  },
  {
    id: 6,
    title: "New feature: Announcements",
    description: "We have added a new feature that allows you to create announcements.",
    date: "2021-09-01",
  },
];

const Page = () => {
  const { id } = useParams();
  const anons_id = Array.isArray(id) ? id[0] : id;
  const anons = data.find((item) => item.id === Number(anons_id));

  if (!anons) {
    return (
      <Panel title="Announcement Not Found" action={
        <Button variant="outline" asChild>
          <Link href="/dashboard/announcements">Back</Link>
        </Button>
      }>
        <p className="dark:text-slate-100">The announcement you are looking for does not exist.</p>
      </Panel>
    );
  }

  return (
    <Panel title="Announcements" action={
      <Button variant="default" asChild>
        <Link href="/dashboard/announcements">
          Back
        </Link>
      </Button>
    }>
      <div className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-lg p-6 flex flex-col gap-4">
        <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          {anons.title}
        </h1>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {anons.description}
        </p>

        <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
          <p className="text-xs">{anons.date}</p>
        </div>
      </div>
    </Panel>
  );
};

export default Page;
