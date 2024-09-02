"use client";
import type { NextPage } from "next";

export type Card1Type = {
  className?: string;
};

const Card1: NextPage<Card1Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] rounded-md bg-white border-gray border-[1px] border-solid box-border flex flex-col items-start justify-start pt-0 px-0 pb-0 min-w-[356px] max-w-full text-left text-lg text-green font-light-basic-typography-paragraph mq450:min-w-full ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between pt-6 pb-0 pl-6 pr-[18px] gap-5">
        <div className="w-[288.7px] relative leading-[24px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0">
          Balance
        </div>
        <img
          className="h-[22px] w-[22px] relative"
          loading="lazy"
          alt=""
          src="/dotsvertical.svg"
        />
      </div>
      <div className="self-stretch flex flex-col items-end justify-center py-[26px] px-6 box-border gap-[9px] max-w-full shrink-0 text-mini">
        <div className="self-stretch flex flex-row items-center justify-start gap-3 max-w-full mq700:flex-wrap">
          <div className="rounded-md [background:linear-gradient(180deg,_rgba(255,_159,_67,_0.18),_rgba(255,_159,_67,_0))] flex flex-row items-start justify-start p-1.5">
            <img
              className="h-[22px] w-[22px] relative object-cover"
              loading="lazy"
              alt=""
              src="/currencydollar@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[253px] max-w-full">
            <div className="self-stretch relative leading-[21px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
              $49,3742
            </div>
          </div>
          <div className="relative leading-[22px] font-medium text-right inline-block min-w-[51px]">
            +10.2%
          </div>
        </div>
        <img
          className="self-stretch h-[200px] relative max-w-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/chart.svg"
        />
      </div>
    </div>
  );
};

export default Card1;
