"use client";
import type { NextPage } from "next";

export type LogoType = {
  className?: string;
  logo?: string;
};

const Logo: NextPage<LogoType> = ({ className = "", logo }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-[18px] px-4 ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-[19px]">
        <img
          className="h-6 w-6 relative"
          loading="lazy"
          alt=""
          src="/alignjustified.svg"
        />
        <img
          className="h-[33px] w-[180px] relative object-cover hidden"
          alt=""
          src={logo}
        />
      </div>
    </div>
  );
};

export default Logo;
