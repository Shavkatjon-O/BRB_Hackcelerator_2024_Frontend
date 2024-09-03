"use client";

import { Loader } from "lucide-react";
import MeetingRoom from "../_components/MeetingRoom";
import MeetingSetup from "../_components/MeetingSetup";
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

   if (!isLoaded || isCallLoading) return <Loader className="animage-spin" />;

   if (!call)
      return (
         <p className="text-center text-3xl font-bold text-white">
            Call Not Found
         </p>
      );

   const notAllowed =
      call.type === "invited" &&
      (!user || !call.state.members.find((m) => m.user.id === user.id));

   if (notAllowed) return console.log("You are not allowed to join this call");

   return (
      <main className="h-screen w-full">
         <StreamCall call={call}>
            <StreamTheme>
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