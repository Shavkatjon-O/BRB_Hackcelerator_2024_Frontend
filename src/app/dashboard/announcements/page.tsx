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
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-lg p-6 flex flex-col gap-4"
          >
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">{item.title}</h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{item.description}</p>

            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
              <p className="text-xs">{item.date}</p>
              <Button variant="link" asChild>
                <Link href={`/dashboard/announcements/${item.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
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
