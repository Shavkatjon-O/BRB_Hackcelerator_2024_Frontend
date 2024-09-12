"use client";

import '@stream-io/video-react-sdk/dist/css/styles.css';

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  CallControls,
  CallParticipantsList,
  CallStats,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Popover, 
  PopoverTrigger, 
  PopoverContent 
} from "@/components/ui/popover";
import { 
  LayoutList, 
  Users, 
  ChartNoAxesCombined,
  Loader,
} from "lucide-react";
import EndCallButton from "./end-call-button";
import { Button } from "@/components/ui/button";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  const { useCallCallingState } = useCallStateHooks();
  const [layout, setLayout] = useState<CallLayoutType>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return (
    <div className="h-full flex items-center justify-center">
      <Loader size={20} className="dark:text-white animate-spin" />
    </div>
  );

  const renderCallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" participantsBarLimit={3} />;
      case "speaker-left":
      default:
        return <SpeakerLayout participantsBarPosition="right" participantsBarLimit={3} />;
    }
  };

  return (
    <section className="size-full flex flex-col p-4 text-white">
      <div className="size-full flex items-center justify-center overflow-y-scroll">
        <div className="flex size-full max-w-[900px] items-center">
          {renderCallLayout()}
        </div>
      </div>

      <div className="w-full gap-4 flex flex-wrap items-center justify-center">
        <CallControls onLeave={() => window.location.href = "/dashboard/meetings"} />

        <Popover>
          <PopoverTrigger>
            <Button className="cursor-pointer rounded-full bg-[#19232d] hover:bg-[#4c535b]" size="icon">
              <ChartNoAxesCombined size={18} className="text-white" fill="currentColor" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="bg-[#19232d] text-white border-none w-[500px] h-[500px] mb-4 overflow-scroll rounded-lg shadow-lg">
            <CallStats />
          </PopoverContent>
        </Popover>

        <Popover open={showParticipants} onOpenChange={setShowParticipants}>
          <PopoverTrigger>
            <Button 
              onClick={() => setShowParticipants(prev => !prev)}
              className="cursor-pointer rounded-full bg-[#19232d] hover:bg-[#4c535b]"
              size="icon"
            >
              <Users size={18} className="text-white" fill="currentColor" />
            </Button>
          </PopoverTrigger>
          {showParticipants && (
            <PopoverContent className="bg-[#19232d] text-white border-none w-[500px] h-[500px] mb-4 overflow-scroll rounded-lg shadow-lg">
              <CallParticipantsList onClose={() => setShowParticipants(false)} />
            </PopoverContent>
          )}
        </Popover>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="cursor-pointer rounded-full bg-[#19232d] hover:bg-[#4c535b]" size="icon">
              <LayoutList size={18} className="text-white" fill="currentColor" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {["Grid", "Speaker-Left", "Speaker-Right"].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem onClick={() => setLayout(item.toLowerCase() as CallLayoutType)}>
                  {item}
                </DropdownMenuItem>
                {index < 2 && <DropdownMenuSeparator />}
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoom;
