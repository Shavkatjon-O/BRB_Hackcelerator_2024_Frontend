"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DropdownType = {
  className?: string;
  showChevronDown2?: boolean;
  showChevronDown?: boolean;
  calendarStats?: string;
  text?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propFlex1?: CSSProperties["flex"];
  propColor?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propFlex2?: CSSProperties["flex"];
};

const Dropdown: NextPage<DropdownType> = ({
  className = "",
  showChevronDown2 = true,
  showChevronDown = true,
  propFlex,
  propMinWidth,
  propWidth,
  propFlex1,
  calendarStats,
  text,
  propColor,
  propDisplay,
  propMinWidth1,
  propFlex2,
}) => {
  const dropdownStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      display: propDisplay,
      minWidth: propMinWidth1,
      flex: propFlex2,
    };
  }, [propColor, propDisplay, propMinWidth1, propFlex2]);

  return (
    <div
      className={`rounded border-light-solid-color-extra-divider border-[1px] border-solid flex flex-row items-center justify-center py-1 px-0 text-left text-smi text-black font-light-basic-typography-paragraph ${className}`}
      style={dropdownStyle}
    >
      <div
        className="flex flex-row items-center justify-center py-1.5 px-3.5 gap-[5.5px]"
        style={buttonStyle}
      >
        {showChevronDown && (
          <img
            className="h-4 w-4 relative min-h-[16px]"
            alt=""
            src={calendarStats}
          />
        )}
        <div
          className="relative tracking-[0.43px] leading-[16px] font-medium inline-block min-w-[73px]"
          style={textStyle}
        >
          {text}
        </div>
        {showChevronDown2 && (
          <img
            className="h-4 w-4 relative min-h-[16px]"
            alt=""
            src="/chevrondown.svg"
          />
        )}
      </div>
    </div>
  );
};

export default Dropdown;
