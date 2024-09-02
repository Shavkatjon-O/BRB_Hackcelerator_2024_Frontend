"use client";

import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ListType = {
  className?: string;
  itemTitle?: string;
  itemDescription?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const List: NextPage<ListType> = ({
  className = "",
  itemTitle,
  itemDescription,
  propBackgroundColor,
}) => {
  const progressStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-2.5 text-left text-mini font-light-basic-typography-paragraph ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="flex-1 relative leading-[21px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          {itemTitle}
        </div>
      </div>
      <div className="self-stretch relative text-3xl leading-[30px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap mq450:text-lg mq450:leading-[24px]">
        {itemDescription}
      </div>
      <div className="self-stretch rounded-11xl bg-dimgray-100 flex flex-row items-start justify-start py-0 pl-0 pr-8">
        <div
          className="h-1 flex-1 relative shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] rounded-11xl bg-blue"
          style={progressStyle}
        />
      </div>
    </div>
  );
};

export default List;
