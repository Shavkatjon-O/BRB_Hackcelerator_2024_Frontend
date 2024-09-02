"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SidebarListActiveType = {
  className?: string;
  sheet?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const SidebarListActive: NextPage<SidebarListActiveType> = ({
  className = "",
  propTop,
  sheet,
}) => {
  const sidebarListActiveStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`w-full h-[53px] absolute !m-[0] top-[160px] right-[0px] left-[0px] ${className}`}
      style={sidebarListActiveStyle}
    >
      <img
        className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src={sheet}
      />
      <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] bg-black w-[3px] z-[1]" />
    </div>
  );
};

export default SidebarListActive;
