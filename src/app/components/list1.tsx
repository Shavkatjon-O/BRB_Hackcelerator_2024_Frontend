"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type List1Type = {
  className?: string;
  showText?: boolean;
  showChevronRight?: boolean;
  text?: string;
  showGripHorizontal?: boolean;
  headphones?: string;

  /** Style props */
  propTextDecoration?: CSSProperties["textDecoration"];

  /** Action props */
  onListContainerClick?: () => void;
};

const List1: NextPage<List1Type> = ({
  className = "",
  showText = true,
  showChevronRight = true,
  text = "Support",
  showGripHorizontal = true,
  onListContainerClick,
  headphones,
  propTextDecoration,
}) => {
  const productsStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-[15.5px] px-4 gap-2 text-left text-mini text-black font-light-basic-typography-paragraph ${className}`}
      onClick={onListContainerClick}
    >
      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
        {showGripHorizontal && (
          <img
            className="w-5 h-5 relative"
            loading="lazy"
            alt=""
            src={headphones}
          />
        )}
      </div>
      {showText && (
        <div className="flex-1 relative leading-[22px]" style={productsStyle}>
          {text}
        </div>
      )}
      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
        {showChevronRight && (
          <img className="w-5 h-5 relative" alt="" src="/chevronright.svg" />
        )}
      </div>
    </div>
  );
};

export default List1;
