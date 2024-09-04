"use client";
import {
  DeviceSettings,
  VideoPreview,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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

  const [isMicCamToggled, setIsMicCamToggled] = useState(false);

  useEffect(() => {
    if (isMicCamToggled) {
      call.camera.disable();
      call.microphone.disable();
    } else {
      call.camera.enable();
      call.microphone.enable();
    }
  }, [isMicCamToggled, call.camera, call.microphone]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 shadow-md">
      <div className="w-full max-w-md">
        <VideoPreview className="mb-6 max-w-md" />
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center gap-2 font-medium">
            <input
              type="checkbox"
              checked={isMicCamToggled}
              onChange={(e) => setIsMicCamToggled(e.target.checked)}
              className="form-checkbox"
            />
            <span>Join with mic and camera off</span>
          </label>
          <DeviceSettings />
        </div>
        <Button
          className="w-full rounded-md px-4 py-2.5 focus:outline-none focus:ring-2"
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
