"use client";

import { Loader } from "lucide-react";
import MeetingRoom from "../_components/meeting-room";
import MeetingSetup from "../_components/meeting-room-setup";
import { useGetCallById } from "../_hooks/useGetCallById";
import useUser from "@/hooks/useUser";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import { useState } from "react";

const MeetingPage = () => {
   const { id } = useParams();
   const { user, isLoaded, error } = useUser();
   const { call, isCallLoading } = useGetCallById(id);
   const [isSetupComplete, setIsSetupComplete] = useState(false);

   if (!isLoaded || isCallLoading) return (
      <div className="h-full flex items-center justify-center">
         <Loader size={20} className="dark:text-white animate-spin" />
      </div>
   );

   if (!call)
      return (
         <p className="text-center text-3xl font-bold text-white">
            Call Not Found
         </p>
      );

   const notAllowed =
      call.type === "invited" &&
      (!user || !call.state.members.find((m) => m.user.id === String(user.id)));

   if (notAllowed) return console.log("You are not allowed to join this call");

   return (
      <main className="h-full">
         <StreamCall call={call}>
            <StreamTheme className="w-full h-full">
               {!isSetupComplete ? (
                  <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
               ) : (
                  <MeetingRoom />
               )}
            </StreamTheme>
         </StreamCall>
      </main>
   );
};

export default MeetingPage;