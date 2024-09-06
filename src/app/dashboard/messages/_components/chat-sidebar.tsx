import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Users, Search, House } from "lucide-react";

const ChatSidebar = () => {
  return (
    <div className="h-full w-full p-4">
      <Tabs defaultValue="chats-all" className="w-full">
        <TabsList className="w-full min-h-14 h-full flex flex-wrap">
          <TabsTrigger value="chats-all" className="flex-1 min-w-[4rem] gap-1 p-4">
            <House className="w-[1.2rem] h-[1.2rem]" />
          </TabsTrigger>

          <TabsTrigger value="chats-direct" className="flex-1 min-w-[4rem] gap-1 p-4">
            <User className="w-[1.2rem] h-[1.2rem]" />
          </TabsTrigger>

          <TabsTrigger value="chats-group" className="flex-1 min-w-[4rem] gap-1 p-4">
            <Users className="w-[1.2rem] h-[1.2rem]" />
          </TabsTrigger>

          <TabsTrigger value="search-people" className="flex-1 min-w-[4rem] gap-1 p-4">
            <Search className="w-[1.2rem] h-[1.2rem]" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="chats-all"></TabsContent>
        <TabsContent value="chats-direct"></TabsContent>
        <TabsContent value="chats-group"></TabsContent>
        <TabsContent value="search-people"></TabsContent>
      </Tabs>
    </div>
  );
};

export default ChatSidebar;
