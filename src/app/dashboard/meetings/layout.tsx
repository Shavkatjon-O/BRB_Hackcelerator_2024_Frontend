import ClientProvider from "@/providers/ClientProvider";

export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClientProvider>
      {children}
    </ClientProvider>
  );
}
