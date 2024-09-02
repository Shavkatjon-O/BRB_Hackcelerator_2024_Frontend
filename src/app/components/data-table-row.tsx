"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DataTableRowType = {
  className?: string;
  placeholder?: string;
  placeholder1?: string;
  textPlaceholder?: string;
  placeholder2?: string;
  verified?: string;
  uSD?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const DataTableRow: NextPage<DataTableRowType> = ({
  className = "",
  placeholder,
  placeholder1,
  propMinWidth,
  textPlaceholder,
  propWidth,
  placeholder2,
  propBackgroundColor,
  verified,
  propColor,
  propMinWidth1,
  uSD,
}) => {
  const dataTableCellStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const badgeStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const verifiedStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth1,
    };
  }, [propColor, propMinWidth1]);

  return (
    <div
      className={`self-stretch border-light-solid-color-extra-divider border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px] border-solid box-border flex flex-row items-center justify-start flex-wrap content-center max-w-full [row-gap:20px] text-left text-mini text-blue font-light-basic-typography-paragraph ${className}`}
    >
      <div className="w-40 flex flex-row items-center justify-start py-5 pl-5 pr-0 box-border">
        <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          {placeholder}
        </div>
      </div>
      <div className="w-[100px] flex flex-row items-center justify-start py-5 pl-5 pr-2.5 box-border">
        <div className="flex-1 relative leading-[22px]">{placeholder1}</div>
      </div>
      <div
        className="flex-1 flex flex-row items-center justify-start py-[11px] px-5 box-border min-w-[103px] max-w-full"
        style={dataTableCellStyle}
      >
        <input
          className="w-[103px] [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-col items-start justify-start font-light-basic-typography-paragraph font-semibold text-mini [-webkit-text-fill-color:transparent]"
          placeholder={textPlaceholder}
          type="text"
          style={text1Style}
        />
      </div>
      <div className="w-[140px] flex flex-row items-center justify-start py-5 pl-5 pr-[23px] box-border">
        <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          {placeholder2}
        </div>
      </div>
      <div className="w-[140px] flex flex-row items-center justify-start py-[19px] px-5 box-border text-smi text-green">
        <div
          className="rounded bg-light-green flex flex-row items-center justify-start py-[5px] px-2.5"
          style={badgeStyle}
        >
          <div
            className="relative leading-[14px] font-semibold inline-block min-w-[49px]"
            style={verifiedStyle}
          >
            {verified}
          </div>
        </div>
      </div>
      <div className="w-[100px] flex flex-row items-center justify-start py-4 pl-5 pr-[39px] box-border text-center text-black1">
        <div className="h-[27px] flex-1 relative leading-[22px] flex items-center justify-center">
          {uSD}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center py-5 px-[59px]">
        <img
          className="h-[22px] w-[22px] relative object-contain"
          alt=""
          src="/dotsvertical.svg"
        />
      </div>
    </div>
  );
};

export default DataTableRow;
