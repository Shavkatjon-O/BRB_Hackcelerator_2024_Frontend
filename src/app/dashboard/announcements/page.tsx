import Panel from "../_components/Panel";
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
  return (
    <Panel title="Announcements">
      <div className="gap-4 grid grid-cols-2">
        {data.map((item, index) => (
          <div key={index} className="w-full dark:bg-slate-800 shadow-md rounded-md p-4 flex flex-col gap-4">
            <h1 className="font-semibold">{item.title}</h1>
            
            <p className="">{item.description}</p>

            <div className="flex items-center justify-between">
              <p className="text-sm">{item.date}</p>
              <Button variant="link" asChild>
                <Link href={`/dashboard/announcements/${item.id}`}>
                  Read more
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
};

export default Page;
