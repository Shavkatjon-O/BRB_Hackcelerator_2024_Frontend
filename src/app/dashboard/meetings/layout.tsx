import StreamVideoProvider from "@/providers/StreamVideoClient";

const MeetingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StreamVideoProvider>{children}</StreamVideoProvider>
  );
}

export default MeetingsLayout;