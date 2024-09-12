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