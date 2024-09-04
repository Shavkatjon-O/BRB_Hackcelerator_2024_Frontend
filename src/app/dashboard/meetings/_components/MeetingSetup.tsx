"use client";
import {
  DeviceSettings,
  VideoPreview,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Video, VideoOff } from "lucide-react";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();
  const call = useCall();

  if (!call) {
    throw new Error(
      "useStreamCall must be used within a StreamCall component."
    );
  }

  const [isMicEnabled, setIsMicEnabled] = useState(true);
  const [isCameraEnabled, setIsCameraEnabled] = useState(true);

  useEffect(() => {
    if (isMicEnabled) {
      call.microphone.enable();
    } else {
      call.microphone.disable();
    }
  }, [isMicEnabled, call.microphone]);

  useEffect(() => {
    if (isCameraEnabled) {
      call.camera.enable();
    } else {
      call.camera.disable();
    }
  }, [isCameraEnabled, call.camera]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 shadow-md">
      <div className="w-full max-w-md">
        <VideoPreview className="mb-6 max-w-md" />
        <div className="flex items-center justify-between mb-4 gap-2">
          <Button
            variant="outline"
            className="flex items-center gap-2 w-full"
            onClick={() => setIsMicEnabled(!isMicEnabled)}
          >
            {isMicEnabled ? <Mic size={20} /> : <MicOff size={20} />}
            <span>{isMicEnabled ? "Mute Microphone" : "Unmute Microphone"}</span>
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 w-full"
            onClick={() => setIsCameraEnabled(!isCameraEnabled)}
          >
            {isCameraEnabled ? <Video size={20} /> : <VideoOff size={20} />}
            <span>{isCameraEnabled ? "Turn Off Camera" : "Turn On Camera"}</span>
          </Button>
          <div className="text-white"><DeviceSettings /></div>
        </div>
        <Button
          className="w-full"
          onClick={() => {
            call.join();
            setIsSetupComplete(true);
          }}
        >
          Join meeting
        </Button>
      </div>
    </div>
  );
};

export default MeetingSetup;
