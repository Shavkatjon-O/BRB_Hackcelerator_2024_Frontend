"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FormSwitchButtonType = {
  className?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
};

const FormSwitchButton: NextPage<FormSwitchButtonType> = ({
  className = "",
  propWidth,
  propBackgroundColor,
  propBorder,
  propBackgroundColor1,
}) => {
  const formSwitchButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propWidth, propBackgroundColor, propBorder]);

  const vectorStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div
      className={`w-[30px] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] rounded-81xl bg-white border-black border-[1px] border-solid box-border flex flex-row items-center justify-start py-px pl-0.5 pr-3.5 shrink-0 ${className}`}
      style={formSwitchButtonStyle}
    >
      <div
        className="h-3 w-3 relative rounded-[50%] bg-black"
        style={vectorStyle}
      />
    </div>
  );
};

export default FormSwitchButton;
