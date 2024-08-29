import StreamVideoProvider from "@/providers/StreamVideoProvider";

export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <StreamVideoProvider>
      {children}
    </StreamVideoProvider>
  );
}
