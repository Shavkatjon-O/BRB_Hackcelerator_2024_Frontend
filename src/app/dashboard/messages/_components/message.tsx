import { Avatar } from "@/components/ui/avatar";

const Message = () => {
  return (
    <div className="flex space-x-4">
      <Avatar className="w-8 h-8" />
      <div className="bg-gray-100 p-3 rounded-lg">
        <p className="text-sm">Hello! How are you?</p>
      </div>
    </div>
  );
}