"use client";

import { useRouter } from '@/i18n/routing';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useGetCallById } from "./_hooks/useGetCallById";
import { useTranslations } from 'next-intl';
import { Video } from 'lucide-react';
import Panel from '../_components/Panel';
import useUser from "@/hooks/useUser";

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
    <Button onClick={startOrJoinRoom} disabled={disabled}>Create a Meeting</Button>
  );
};

const Page = () => {
  const t = useTranslations("Meetings");

  return (
    <Panel title={t("title")} action={<StartMeetingButton />}>
      {/* Content */}
    </Panel>
  );
};

export default Page;
