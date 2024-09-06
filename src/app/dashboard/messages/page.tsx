// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { getUsers, getDirectChatList } from "./_services/messagesServices";
// import { UserType, DirectChatType } from "./_types/messagesTypes";
// import useUser from "@/hooks/useUser";
// import Link from "next/link";

// const Page = () => {
//   const { user, error: userError, isLoaded } = useUser(); // Destructure user, error, and isLoaded from useUser
//   const [users, setUsers] = useState<UserType[]>([]);
//   const [directChats, setDirectChats] = useState<DirectChatType[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!isLoaded || !user) return; // Wait until user and isLoaded are available

//     // Fetch users and direct chats concurrently
//     Promise.all([
//       getUsers(),
//       getDirectChatList()
//     ]).then(([usersResponse, directChatsResponse]) => {
//       setUsers(usersResponse.data);
//       setDirectChats(directChatsResponse.data);
//     }).catch((error) => {
//       setError(error.message);
//     }).finally(() => {
//       setLoading(false);
//     });
//   }, [user, isLoaded]);

//   if (!isLoaded) return <div>Loading user data...</div>;
//   if (userError) return <div>User Error: {userError}</div>;
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="p-4 space-y-4 flex flex-col">
//       <h2 className="text-xl font-bold">Users</h2>
//       {users.map((user) => (
//         <Button key={user.id} asChild>
//           <Link href={`/dashboard/messages/${user.id}`}>
//             <span>{user.email}</span>
//           </Link>
//         </Button>
//       ))}

//       <h2 className="text-xl font-bold">Direct Chats</h2>
//       {directChats.map((chat) => {
//         const otherUser = chat.user1.id !== Number(user?.id) ? chat.user1 : chat.user2;
//         return (
//           <Button key={chat.id} asChild>
//             <Link href={`/dashboard/messages/directs/${chat.id}`}>
//               <span>Chat with {otherUser.email}</span>
//             </Link>
//           </Button>
//         );
//       })}
//     </div>
//   );
// }

// export default Page;

import { cookies } from "next/headers";
import { ChatLayout } from "./_components/chat/chat-layout";

export default function Home() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <div className="w-full h-full">
      <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
    </div>
  );
}
