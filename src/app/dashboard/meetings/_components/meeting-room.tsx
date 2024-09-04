"use client";
import {
  CallControls,
  CallParticipantsList,
  CallStats,
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
        return <SpeakerLayout participantsBarPosition="left" participantsBarLimit={3} />;
      case "speaker-left":
      default:
        return <SpeakerLayout participantsBarPosition="right" participantsBarLimit={3} />;
    }
  };

  return (
    <section className="size-full flex flex-col p-4">

      <div className="size-full flex items-center justify-center overflow-y-scroll">
        <div className="flex size-full max-w-[1200px] items-center">
          {renderCallLayout()}
          {/* <div
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
          </div> */}
        </div>
      </div>


      <div className="w-full gap-4 flex items-center justify-center">
        <CallControls onLeave={() => window.location.href = "/dashboard/meetings"} />
        
        {/* <CallStatsButton /> */}

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="cursor-pointer rounded-lg bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
              <LayoutList size={20} className="text-white" />
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
        
        <Button 
          onClick={() => setShowParticipants(prev => !prev)}
          className="cursor-pointer rounded-lg bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]"
        >
          <Users size={20} className="text-white" />
        </Button>

        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoom;
