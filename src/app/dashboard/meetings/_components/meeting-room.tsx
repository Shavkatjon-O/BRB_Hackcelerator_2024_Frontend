"use client";
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { LayoutList, Users } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import '@stream-io/video-react-sdk/dist/css/styles.css';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import EndCallButton from "./end-call-button";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  const router = useRouter();
  const [layout, setLayout] = useState<CallLayoutType>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();

  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

  const renderCallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      case "speaker-left":
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="w-full h-full p-4">
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative flex size-full max-w-[1000px] items-center">
          {renderCallLayout()}
          <div
            className={cn(
              "absolute top-0 right-0 h-full w-full p-4 rounded-lg bg-gray-800 transition-transform",
              {
                "translate-x-0": showParticipants,
                "translate-x-full": !showParticipants,
              }
            )}
          >
            <CallParticipantsList
              onClose={() => setShowParticipants(false)}
            />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full z-50 flex items-center justify-center gap-4 py-4">
        <CallControls onLeave={() => router.push("/dashboard/meetings")} />
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer rounded-lg bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
            <LayoutList size={20} className="text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
            {["Grid", "Speaker-Left", "Speaker-Right"].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  onClick={() => setLayout(item.toLowerCase() as CallLayoutType)}
                >
                  {item}
                </DropdownMenuItem>
                {index < 2 && <DropdownMenuSeparator className="border-dark-1" />}
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <CallStatsButton />
        <Button onClick={() => setShowParticipants(prev => !prev)}>
          <Users size={20} />
        </Button>
        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoom;
