// "use client";

// import React, { useState, useEffect } from "react";
// import { getTasks } from "./_services/tasksServices";
// import { TaskListType } from "./_types/tasksTypes";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult,
// } from "react-beautiful-dnd";

// // The Kanban board component
// const KanbanBoard = () => {
//   const [tasks, setTasks] = useState<TaskListType[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getTasks().then((data) => {
//       setTasks(data);
//       setLoading(false);
//     });
//   }, []);

//   const taskStatuses = [
//     { key: "to_do", label: "To Do" },
//     { key: "in_progress", label: "In Progress" },
//     { key: "in_review", label: "In Review" },
//     { key: "completed", label: "Completed" },
//   ];

//   // Handle the drag and drop logic
//   const onDragEnd = (result: DropResult) => {
//     const { source, destination } = result;

//     // If dropped outside the list or no destination
//     if (!destination) {
//       return;
//     }

//     const sourceColumnKey = source.droppableId;
//     const destinationColumnKey = destination.droppableId;

//     // If task is dropped in the same column
//     if (sourceColumnKey === destinationColumnKey) {
//       return;
//     }

//     // Move task to a different column
//     const updatedTasks = tasks.map((task) => {
//       if (task.id === result.draggableId) {
//         return { ...task, status: destinationColumnKey };
//       }
//       return task;
//     });

//     setTasks(updatedTasks);
//   };

//   if (loading) {
//     return <div className="text-center">Loading tasks...</div>;
//   }

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <div className="min-h-screen bg-gray-100 p-8">
//         <h1 className="text-2xl font-bold mb-6 text-center">Kanban Board</h1>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {taskStatuses.map((status) => (
//             <Droppable key={status.key} droppableId={status.key}>
//               {(provided) => (
//                 <div
//                   className="bg-white shadow-lg rounded-lg p-4"
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                 >
//                   <h2 className="text-xl font-semibold mb-4 text-gray-800">
//                     {status.label}
//                   </h2>
//                   <div className="space-y-4">
//                     {tasks
//                       .filter((task) => task.status === status.key)
//                       .map((task, index) => (
//                         <Draggable
//                           key={task.id}
//                           draggableId={task.id}
//                           index={index}
//                         >
//                           {(provided) => (
//                             <div
//                               ref={provided.innerRef}
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                               className="bg-gray-100 p-4 rounded-lg shadow-sm"
//                             >
//                               <h3 className="font-bold text-gray-900">
//                                 {task.title}
//                               </h3>
//                               <p className="text-sm text-gray-600">
//                                 {task.description}
//                               </p>
//                               <p className="text-xs text-gray-500 mt-1">
//                                 Due: {task.due_date}
//                               </p>
//                             </div>
//                           )}
//                         </Draggable>
//                       ))}
//                     {provided.placeholder}
//                   </div>
//                 </div>
//               )}
//             </Droppable>
//           ))}
//         </div>
//       </div>
//     </DragDropContext>
//   );
// };

// export default KanbanBoard;

"use client";

import React from "react";
import { KanbanBoard } from "./KanbanBoard";
import Panel from "../_components/Panel";

const Page = () => {
  return (
    <Panel title="Task Management">
      <KanbanBoard />
    </Panel>
  );
};

export default Page;