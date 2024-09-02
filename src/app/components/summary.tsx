"use client";
import type { NextPage } from "next";

export type SummaryType = {
  className?: string;
};

const Summary: NextPage<SummaryType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_5px_20px_rgba(75,_70,_92,_0.4)] rounded-md bg-white flex flex-row items-start justify-start flex-wrap content-start p-10 box-border gap-6 max-w-full text-left text-mini font-light-basic-typography-paragraph ${className}`}
    >
      <div className="h-[42px] w-[42px] rounded-11xl bg-mediumseagreen flex flex-row items-start justify-start p-[9px] box-border">
        <img
          className="h-6 w-6 relative"
          loading="lazy"
          alt=""
          src="/pictureinpictureon.svg"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-[223px] box-border gap-6 min-w-[385px] max-w-full mq450:pr-5 mq450:box-border mq750:pr-[111px] mq750:box-border mq750:min-w-full">
        <div className="relative leading-[21px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[112px]">
          Send Money To:
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
          <div className="self-stretch flex flex-row items-start justify-start gap-6 mq750:flex-wrap">
            <div className="w-[100px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0">
              Total Due:
            </div>
            <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[41px] whitespace-nowrap">
              $4.500
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-6 mq750:flex-wrap">
            <div className="w-[100px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0">
              Bank name:
            </div>
            <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[83px]">
              Deutsche Bank
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-6 mq750:flex-wrap">
            <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[100px]">
              Transfer date:
            </div>
            <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[63px]">
              05.02.2023
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-6 mq750:flex-wrap">
            <div className="w-[100px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0">
              IBAN:
            </div>
            <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[116px]">
              DE95476213874685
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
