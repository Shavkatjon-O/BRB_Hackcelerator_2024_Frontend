"use client";

import Panel from "../_components/Panel";
import { useEffect, useState } from "react";
import { getTasks } from "./_services/tasksServices";
import { TaskListType } from "./_types/tasksTypes";

const Page = () => {
  const [tasks, setTasks] = useState<TaskListType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTasks().then((data) => {
      setTasks(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Panel title="Tasks">Loading...</Panel>;
  }

  return (
    <Panel title="Tasks">
      {
        tasks.map((task) => (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
        ))
      }
    </Panel>
  );
};

export default Page;