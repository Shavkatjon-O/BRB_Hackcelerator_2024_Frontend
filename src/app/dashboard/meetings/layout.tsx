import StreamClientProvider from "./_providers/stream-client-provider";

export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <StreamClientProvider>
      {children}
    </StreamClientProvider>
  );
}
