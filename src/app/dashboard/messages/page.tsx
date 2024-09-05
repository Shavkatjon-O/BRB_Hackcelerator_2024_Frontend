// import { cookies } from "next/headers";
// import { ChatLayout } from "./_components/chat/chat-layout";

// export default function Home() {
//   const layout = cookies().get("react-resizable-panels:layout");
//   const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

//   return (
//     <div className="h-full">
//       <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
//     </div>
//   );
// }

// "use client";

// import { 
//   getUsers, 
//   getMessages, 
//   UserType 
// } from "./_services/chatServices";
// import { useEffect, useState } from "react";
// import { DefaultUserAvatar } from "./_components/DefaultUserAvatar";


// const Page = () => {
//   const [users, setUsers] = useState<UserType[]>([]);
//   const [messages, setMessages] = useState([]);

//   const handleUserClick = (userId: number) => {
//     getMessages(userId).then((response) => {
//       setMessages(response.data);
//       console.log(response.data);
//     });
//   }

//   useEffect(() => {
//     getUsers().then((response) => {
//       setUsers(response.data);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {/* {users.map((user) => (
//           <li key={user.id}>
//             <DefaultUserAvatar />
//             {user.first_name} {user.last_name}
//           </li>
//         ))} */}

//         {users.map((user) => (
//           <li key={user.id} onClick={() => handleUserClick(user.id)}>
//             <DefaultUserAvatar />
//             {user.first_name} {user.last_name}
//           </li>
//         ))} 

//       </ul>
//     </div>
//   );
// }

// export default Page;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Page = () => {
  return (
    <Tabs defaultValue="account">
      
      <div className="flex-col">

      <TabsList className="mt-10 ml-10">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>

      <div className="w-full bg-red-600">
      <TabsContent value="account">
        <div className="w-full h-full p-4 bg-green-600">
            asdfas
        </div>

      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      </div>
      </div>
      

    </Tabs>

  )
}

export default Page;
