// import { Avatar, Button, Input, ScrollArea } from "@shadcn/ui";

"use client";

import { Send, MoreVertical } from "lucide-react";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const MessengerPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 border-r">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Chats</h2>
        </div>
        <ScrollArea className="p-4">
          {/* Chat list items */}
          <div className="space-y-4">
            <div className="flex items-center p-2 hover:bg-gray-200 cursor-pointer rounded">
              <Avatar 
              className="w-10 h-10 mr-4" />
              <div className="flex-1">
                <h3 className="font-semibold">User 1</h3>
                <p className="text-sm text-gray-600">Last message...</p>
              </div>
              <span className="text-xs text-gray-500">2m ago</span>
            </div>
            {/* Repeat for more chat list items */}
          </div>
        </ScrollArea>
      </aside>

      {/* Main Chat Section */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <header className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center">
            <Avatar className="w-10 h-10 mr-4" />
            <div>
              <h3 className="font-semibold">User 1</h3>
              <p className="text-sm text-gray-600">Online</p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <MoreVertical className="w-5 h-5" />
          </Button>
        </header>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-4 space-y-4">
          <div className="flex space-x-4">
            <Avatar className="w-8 h-8" />
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm">Hello! How are you?</p>
            </div>
          </div>
          <div className="flex space-x-4 justify-end">
            <div className="bg-blue-500 text-white p-3 rounded-lg">
              <p className="text-sm">I'm good, thanks! How about you?</p>
            </div>
            <Avatar className="w-8 h-8" />
          </div>
          {/* Repeat for more messages */}
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t flex items-center">
          <Input className="flex-1 mr-4" placeholder="Type a message..." />
          <Button variant="default">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessengerPage;
