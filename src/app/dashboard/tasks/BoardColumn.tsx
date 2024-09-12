import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { useDndContext, type UniqueIdentifier } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useMemo } from "react";
import { Task, TaskCard } from "./TaskCard";
import { cva } from "class-variance-authority";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GripVertical } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Column {
  id: UniqueIdentifier;
  title: string;
}

export type ColumnType = "Column";

export interface ColumnDragData {
  type: ColumnType;
  column: Column;
}

interface BoardColumnProps {
  column: Column;
  tasks: Task[];
  isOverlay?: boolean;
}

export function BoardColumn({ column, tasks, isOverlay }: BoardColumnProps) {
  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    } satisfies ColumnDragData,
    attributes: {
      roleDescription: `Column: ${column.title}`,
    },
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  // Full width with flex-grow for better spacing
  const variants = cva(
    "h-[500px] max-h-[500px] flex-1 bg-white shadow-lg border border-gray-300 flex flex-col flex-shrink-0 rounded-md", // Removed fixed width, added flex-grow (flex-1)
    {
      variants: {
        dragging: {
          default: "border-transparent",
          over: "ring-2 ring-gray-400 opacity-50",
          overlay: "ring-2 ring-blue-500",
        },
      },
    }
  );

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={variants({
        dragging: isOverlay ? "overlay" : isDragging ? "over" : undefined,
      })}
    >
      <CardHeader className="p-3 font-medium border-b text-left flex items-center space-between">
        {/* Moved button to the left corner */}
        <Button
          variant="ghost"
          {...attributes}
          {...listeners}
          className="p-0.5 text-gray-500 hover:text-gray-700 cursor-grab mr-auto" // Added mr-auto to align to the left
        >
          <span className="sr-only">{`Move column: ${column.title}`}</span>
          <GripVertical className="w-4 h-4" />
        </Button>
        <span className="text-gray-800 font-semibold">
          {column.title}
        </span>
      </CardHeader>
      <ScrollArea>
        <CardContent className="flex flex-col gap-2 p-3">
          <SortableContext items={tasksIds}>
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </SortableContext>
        </CardContent>
      </ScrollArea>
    </Card>
  );
}

export function BoardContainer({ children }: { children: React.ReactNode }) {
  const dndContext = useDndContext();

  // Adjust to take full width and ensure columns fit the screen
  const variations = cva("px-2 flex flex-wrap gap-4 justify-center w-full", {
    variants: {
      dragging: {
        default: "snap-x snap-mandatory",
        active: "snap-none",
      },
    },
  });

  return (
    <ScrollArea
      className={variations({
        dragging: dndContext.active ? "active" : "default",
      })}
    >
      <div className="flex gap-4 items-start w-full">
        {children}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
