"use client";
import type { NextPage } from "next";

export type BodyAutoLayoutHorizontalType = {
  className?: string;
  themeLightDivider?: string;
  themeLightDivider1?: string;
};

const BodyAutoLayoutHorizontal: NextPage<BodyAutoLayoutHorizontalType> = ({
  className = "",
  themeLightDivider,
  themeLightDivider1,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-center flex-wrap content-center p-2.5 box-border gap-[15.5px] max-w-full text-center text-lg text-black font-light-basic-typography-paragraph ${className}`}
    >
      <img
        className="flex-1 relative max-w-full overflow-hidden max-h-full min-w-[261px]"
        loading="lazy"
        alt=""
        src={themeLightDivider}
      />
      <div className="relative tracking-[0.2px] leading-[140%]">
        or continue with
      </div>
      <img
        className="flex-1 relative max-w-full overflow-hidden max-h-full min-w-[261px]"
        loading="lazy"
        alt=""
        src={themeLightDivider1}
      />
    </div>
  );
};

export default BodyAutoLayoutHorizontal;
