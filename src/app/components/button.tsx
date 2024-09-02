"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ButtonType = {
  className?: string;
  text?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propOpacity?: CSSProperties["opacity"];
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];

  /** Action props */
  onButtonClick?: () => void;
  onButtonContainerClick?: () => void;
};

const Button: NextPage<ButtonType> = ({
  className = "",
  text = "Discover more",
  propBorder,
  propBackgroundColor,
  propOpacity,
  onButtonClick,
  onButtonContainerClick,
  propColor,
  propMinWidth,
}) => {
  const button1Style: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
      opacity: propOpacity,
    };
  }, [propBorder, propBackgroundColor, propOpacity]);

  const text3Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  return (
    <button
      className={`cursor-pointer [border:none] py-[2.5px] px-0 bg-button-color rounded-md flex flex-row items-center justify-center ${className}`}
      style={button1Style}
      onClick={onButtonClick}
    >
      <div
        className="flex flex-row items-center justify-center py-[6.5px] px-[33px]"
        onClick={onButtonContainerClick}
      >
        <b
          className="relative text-smi tracking-[0.43px] leading-[22px] inline-block font-light-basic-typography-paragraph text-white text-left min-w-[94px]"
          style={text3Style}
        >
          {text}
        </b>
      </div>
    </button>
  );
};

export default Button;
