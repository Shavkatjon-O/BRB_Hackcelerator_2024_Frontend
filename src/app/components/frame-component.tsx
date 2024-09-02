"use client";
import type { NextPage } from "next";
import CardDefault from "./card-default";
import Card from "./card";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full text-left text-lg font-light-basic-typography-paragraph mq925:flex-wrap ${className}`}
    >
      <CardDefault />
      <Card />
    </div>
  );
};

export default FrameComponent;
