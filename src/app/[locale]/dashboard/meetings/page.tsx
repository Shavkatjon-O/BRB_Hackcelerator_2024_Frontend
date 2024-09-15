"use client";

import { useRouter } from '@/i18n/routing';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useGetCallById } from "./_hooks/useGetCallById";
import { useTranslations } from 'next-intl';
import Panel from '../_components/Panel';
import useUser from "@/hooks/useUser";

// Import Shadcn UI Table components
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/components/ui/table'; // Adjust the import path based on your project structure

const StartMeetingButton = () => {
  const [disabled, setDisabled] = useState(false);
  const { user } = useUser();
  const { call } = useGetCallById(String(user?.id));
  const client = useStreamVideoClient();
  const router = useRouter();

  if (!user?.id) return null;

  const meetingLink = `/dashboard/meetings/${user.id}?personal=true`;

  const startOrJoinRoom = async () => {
    if (!client || !user) return;

    const newCall = client.call("default", String(user.id));

    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }
    setDisabled(true);
    router.push(meetingLink);
  };

  return (
    <Button onClick={startOrJoinRoom} disabled={disabled}>
      Create a Meeting
    </Button>
  );
};

const CallHistory = () => {
  // Static call history data
  const callHistory = [
    {
      id: 1,
      title: 'Project Kickoff',
      date: '2024-04-01',
      duration: '30 mins',
      participants: ['Alice', 'Bob'],
      type: 'Video',
    },
    {
      id: 2,
      title: 'Design Review',
      date: '2024-04-15',
      duration: '45 mins',
      participants: ['Charlie', 'Dave'],
      type: 'Audio',
    },
    {
      id: 3,
      title: 'Sprint Planning',
      date: '2024-05-01',
      duration: '60 mins',
      participants: ['Eve', 'Frank'],
      type: 'Video',
    },
  ];

  return (
    <div className='mt-8'>
      <div className="overflow-x-auto">
        <Table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
          <TableHeader>
            <TableRow className="bg-gray-100 dark:bg-gray-700">
              <TableHead scope="col" className="px-6 py-3 text-left text-gray-700 dark:text-gray-300 font-semibold">
                Title
              </TableHead>
              <TableHead scope="col" className="px-6 py-3 text-left text-gray-700 dark:text-gray-300 font-semibold">
                Date
              </TableHead>
              <TableHead scope="col" className="px-6 py-3 text-left text-gray-700 dark:text-gray-300 font-semibold">
                Duration
              </TableHead>
              <TableHead scope="col" className="px-6 py-3 text-left text-gray-700 dark:text-gray-300 font-semibold">
                Participants
              </TableHead>
              <TableHead scope="col" className="px-6 py-3 text-left text-gray-700 dark:text-gray-300 font-semibold">
                Type
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {callHistory.map((call, index) => (
              <TableRow
                key={call.id}
                className={`border-t border-gray-200 dark:border-gray-700 ${
                  index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-gray-800'
                } hover:bg-gray-100 dark:hover:bg-gray-700`}
              >
                <TableCell className="px-6 py-4 text-gray-800 dark:text-gray-100">{call.title}</TableCell>
                <TableCell className="px-6 py-4 text-gray-800 dark:text-gray-100">{call.date}</TableCell>
                <TableCell className="px-6 py-4 text-gray-800 dark:text-gray-100">{call.duration}</TableCell>
                <TableCell className="px-6 py-4 text-gray-800 dark:text-gray-100">{call.participants.join(', ')}</TableCell>
                <TableCell className="px-6 py-4 text-gray-800 dark:text-gray-100">{call.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const Page = () => {
  const t = useTranslations("Meetings");

  return (
    <Panel title="Meetings" action={<StartMeetingButton />}>
      <CallHistory />
    </Panel>
  );
};

export default Page;
