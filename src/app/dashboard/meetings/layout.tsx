import StreamClientProvider from "@/providers/StreamClientProvider";

export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <StreamClientProvider>
      {children}
    </StreamClientProvider>
  );
}
