"use client";

import Panel from "../../_components/Panel"
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const data = [
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
  const anons: any = data.find((item) => item.id === Number(anons_id));

  return (
    <Panel title="Announcements" action={
      <Button variant="outline" asChild>
        <Link href="/dashboard/announcements">
          Back
        </Link>
      </Button>
    }>
      <div className="dark:bg-slate-800 shadow-md rounded-md p-4 flex flex-col gap-4">
        <h1 className="font-semibold">{anons.title}</h1>

        <p className="">{anons.description}</p>

        <div className="flex items-center justify-between">
          <p className="text-sm">{anons.date}</p>
        </div>
      </div>  
    </Panel>
  );
};

export default Page;  