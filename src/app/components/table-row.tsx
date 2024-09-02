"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Button from "./button";

export type TableRowType = {
  className?: string;
  rectangle1?: string;
  onePlus7Pro?: string;
  onePlus?: string;
  deviceMobile?: string;
  avatar?: string;
  containsErrors?: string;
  partiallyPaid?: string;
  text?: string;
  propBorder?: string;
  propBackgroundColor1?: string;
  propOpacity?: string;
  propColor1?: string;
  propMinWidth1?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const TableRow: NextPage<TableRowType> = ({
  className = "",
  rectangle1,
  onePlus7Pro,
  onePlus,
  propBackgroundColor,
  deviceMobile,
  avatar,
  containsErrors,
  propColor,
  propMinWidth,
  partiallyPaid,
  propWidth,
  text,
  propBorder,
  propBackgroundColor1,
  propOpacity,
  propColor1,
  propMinWidth1,
}) => {
  const badge1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const containsErrorsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  const partiallyPaidStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`self-stretch border-light-solid-color-extra-divider border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px] border-solid flex flex-row items-center justify-start flex-wrap content-center [row-gap:20px] text-left text-mini text-red font-light-basic-typography-paragraph ${className}`}
    >
      <div className="h-[58px] w-[141.9px] hidden flex-row items-center justify-start py-[7px] px-5 box-border gap-2.5">
        <img
          className="h-[38px] w-[38px] relative rounded-md object-cover shrink-0"
          alt=""
          src={rectangle1}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
          <div className="w-24 flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
            {onePlus7Pro}
          </div>
          <div className="relative text-smi leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            {onePlus}
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-start py-3.5 px-5 box-border gap-2.5 min-w-[220px] max-w-[224px]">
        <div
          className="h-[30px] w-[30px] rounded-11xl bg-light-opacity-color-primary-primary-16 hidden flex-row items-center justify-center p-1 box-border"
          style={badge1Style}
        >
          <img
            className="h-[22px] w-[22px] relative"
            alt=""
            src={deviceMobile}
          />
        </div>
        <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[72px]">
          Salary.csv
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-start py-[13px] px-5 box-border gap-2.5 min-w-[220px] max-w-[224px]">
        <div className="h-8 w-8 relative rounded-81xl overflow-hidden shrink-0 hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
            <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-200" />
          </div>
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={avatar}
          />
        </div>
        <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[78px]">
          28.01.2023
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-center py-[7px] px-5 box-border min-w-[220px] max-w-[224px] z-[1]">
        <div
          className="relative leading-[22px] inline-block min-w-[112px]"
          style={containsErrorsStyle}
        >
          {containsErrors}
        </div>
        <div
          className="w-[81px] relative text-smi leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden"
          style={partiallyPaidStyle}
        >
          {partiallyPaid}
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-start py-[17px] px-5 box-border min-w-[220px] max-w-[224px]">
        <Button
          text={text}
          propBorder={propBorder}
          propBackgroundColor={propBackgroundColor1}
          propOpacity={propOpacity}
          propColor={propColor1}
          propMinWidth={propMinWidth1}
        />
      </div>
      <div className="hidden flex-row items-center justify-start py-[18px] px-5 z-[7]">
        <img className="h-[22px] w-[22px] relative" alt="" src="/trash.svg" />
      </div>
      <div className="flex-1 flex flex-row items-center justify-start py-[18px] px-5 box-border min-w-[220px] max-w-[224px]">
        <input
          className="w-[143px] [border:none] [outline:none] font-light-basic-typography-paragraph text-mini bg-[transparent] h-[22px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block p-0"
          placeholder="B-237-753-TZ"
          type="text"
        />
      </div>
    </div>
  );
};

export default TableRow;
