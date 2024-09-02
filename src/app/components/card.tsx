"use client";
import type { NextPage } from "next";
import List from "./list";

export type CardType = {
  className?: string;
};

const Card: NextPage<CardType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[354px] rounded-md bg-white border-light-solid-color-extra-divider border-[1px] border-solid box-border flex flex-col items-start justify-start min-w-[354px] max-w-full text-left text-lg font-light-basic-typography-paragraph mq450:min-w-full mq925:flex-1 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-6 px-6 pb-0">
        <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-px mq450:gap-[29px]">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Overview `}</div>
            <div className="rounded-md flex flex-row items-start justify-start ml-[-122px] text-mini">
              <div className="rounded-md bg-white border-light-solid-color-extra-divider border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start">
                <div className="rounded-sm overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 gap-3">
                  <div className="relative leading-[24px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap inline-block min-w-[83px]">
                    Last 7 days
                  </div>
                  <img
                    className="h-5 w-5 relative"
                    alt=""
                    src="/chevrondown-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-[37px] pb-6 pl-6 pr-1.5 box-border gap-6 max-w-full text-mini mq450:pt-6 mq450:pb-5 mq450:box-border">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-3.5 pb-4 box-border gap-2.5 max-w-full">
            <div className="self-stretch flex flex-row items-end justify-between pt-[0.5px] px-0 pb-0 gap-5 mq450:flex-wrap">
              <div className="h-[68.5px] w-2 relative rounded-xl bg-blue mq450:w-full mq450:h-2" />
              <div className="h-[51.3px] w-2 relative rounded-xl bg-blue" />
              <div className="h-[100.1px] w-2 relative rounded-xl bg-blue mq450:w-full mq450:h-2" />
              <div className="h-[41px] w-2 relative rounded-xl bg-blue" />
              <div className="h-[62.9px] w-2 relative rounded-xl bg-blue mq450:w-full mq450:h-2" />
              <div className="h-[86.5px] w-2 relative rounded-xl bg-blue mq450:w-full mq450:h-2" />
              <div className="h-[62.9px] w-2 relative rounded-xl bg-blue mq450:w-full mq450:h-2" />
              <div className="h-[17.7px] w-2 relative rounded-xl bg-blue" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
              <div className="h-[39px] w-[9px] relative rounded-xl bg-orange" />
              <div className="h-[49.9px] w-[9px] relative rounded-xl bg-orange mq450:w-full mq450:h-[9px]" />
              <div className="h-[39px] w-[9px] relative rounded-xl bg-orange" />
              <div className="h-[65.5px] w-[9px] relative rounded-xl bg-orange mq450:w-full mq450:h-[9px]" />
              <div className="h-[23.9px] w-[9px] relative rounded-xl bg-orange" />
              <div className="h-[49.9px] w-[9px] relative rounded-xl bg-orange mq450:w-full mq450:h-[9px]" />
              <div className="h-[23.9px] w-[9px] relative rounded-xl bg-orange" />
              <div className="h-[31.5px] w-[9px] relative rounded-xl bg-orange" />
            </div>
          </div>
        </div>
        <div className="w-[306px] rounded-md border-light-solid-color-extra-divider border-[1px] border-solid box-border flex flex-row items-start justify-start py-3.5 px-[19px] gap-[26px]">
          <List itemTitle="Money-in " itemDescription="$545.69" />
          <List
            itemTitle="Money-out"
            itemDescription="$256.34"
            propBackgroundColor="#ff9f43"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
