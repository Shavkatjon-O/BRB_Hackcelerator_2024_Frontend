import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  action?: React.ReactNode;
}

const Panel = ({ children, title, className, action, ...props }: Props) => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
        {action}
      </div>
      <div className={cn("", className)} {...props}>
        {children}
      </div>
    </main>
  );
};

export default Panel;