"use client";
import type { NextPage } from "next";

export type TableType = {
  className?: string;
};

const Table: NextPage<TableType> = ({ className = "" }) => {
  return (
    <form
      className={`m-0 self-stretch flex flex-col items-start justify-start pt-6 px-0 pb-[50px] box-border max-w-full mq450:pt-5 mq450:pb-8 mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start p-6 box-border [row-gap:20px] max-w-full mq700:flex-wrap">
        <div className="h-[38px] w-[480px] relative text-lg leading-[24px] font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left flex items-center shrink-0 max-w-full">
          Latest Transaction
        </div>
        <div className="flex-1 flex flex-row items-center justify-end min-w-[136px]">
          <div className="rounded-md flex flex-row items-start justify-start">
            <div className="rounded-md bg-white border-light-solid-color-extra-divider border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start">
              <div className="rounded-sm overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 gap-3">
                <div className="relative text-mini leading-[24px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap text-left inline-block min-w-[83px]">
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
      <div className="self-stretch h-[38px] z-[1] mt-[-14px]" />
      <div className="self-stretch flex flex-col items-start justify-start z-[2] mt-[-14px]">
        <div className="self-stretch border-light-solid-color-extra-divider border-[1px] border-solid overflow-x-auto flex flex-row items-center justify-start">
          <div className="flex-1 flex flex-row items-center justify-start py-2 pl-5 pr-[9px] gap-1">
            <div className="flex-1 relative text-smi tracking-[1px] uppercase font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              Date
            </div>
            <div className="flex flex-col items-start justify-start">
              <img
                className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/fichevronup.svg"
              />
              <img
                className="w-[18px] h-[18px] relative z-[1] mt-[-4px]"
                alt=""
                src="/chevrondown-3.svg"
              />
            </div>
          </div>
          <div className="flex-[0.9073] flex flex-row items-center justify-start py-[16.5px] px-5">
            <div className="flex-1 relative text-smi tracking-[1px] uppercase font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              From
            </div>
          </div>
          <div className="flex-[0.9073] flex flex-row items-center justify-start py-[16.5px] px-5">
            <div className="flex-1 relative text-smi tracking-[1px] uppercase font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              Ccy
            </div>
          </div>
          <div className="flex-[0.9073] flex flex-row items-center justify-start py-[16.5px] px-5">
            <div className="flex-1 relative text-smi tracking-[1px] uppercase font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              Amount
            </div>
          </div>
          <div className="flex-[0.9073] flex flex-row items-center justify-start py-[16.5px] px-5">
            <div className="flex-1 relative text-smi tracking-[1px] uppercase font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              Status
            </div>
          </div>
        </div>
        <div className="self-stretch border-light-solid-color-extra-divider border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px] border-solid overflow-x-auto flex flex-row items-center justify-start">
          <div className="flex-1 flex flex-row items-center justify-start py-4 pl-5 pr-0">
            <div className="w-[140px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block shrink-0">
              09.11.2022
            </div>
          </div>
          <div className="flex-[0.7022] flex flex-row items-center justify-start py-4 pl-5 pr-[38px]">
            <div className="relative text-mini leading-[22px] font-light-basic-typography-paragraph text-black text-left inline-block min-w-[89px]">
              Quantom Inc
            </div>
          </div>
          <div className="flex-[0.8433] flex flex-row items-center justify-start py-3 px-5">
            <div className="h-[27px] w-[41px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-black1 text-center flex items-center justify-center shrink-0">
              USD
            </div>
          </div>
          <div className="flex-[0.7649] flex flex-row items-center justify-start py-4 pl-5 pr-[30px]">
            <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              +$3077
            </div>
          </div>
          <div className="flex-[0.8433] flex flex-row items-center justify-start py-4 px-5">
            <div className="rounded bg-light-green flex flex-row items-center justify-start py-[5px] px-2.5">
              <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-green text-left inline-block min-w-[49px]">
                Verified
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch border-light-solid-color-extra-divider border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px] border-solid overflow-x-auto flex flex-row items-center justify-start">
          <div className="flex-1 flex flex-row items-center justify-start py-4 pl-5 pr-0">
            <div className="w-[140px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block shrink-0">
              19.11.2022
            </div>
          </div>
          <div className="flex-[0.8433] flex flex-row items-center justify-start py-4 px-5">
            <div className="w-[70px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-black text-left inline-block shrink-0">
              GPT Inc
            </div>
          </div>
          <div className="flex-[0.8433] flex flex-row items-center justify-start py-3 px-5">
            <div className="h-[27px] w-9 relative text-mini leading-[22px] font-light-basic-typography-paragraph text-black1 text-center flex items-center justify-center shrink-0">
              EUR
            </div>
          </div>
          <div className="flex-[0.7649] flex flex-row items-center justify-start py-4 pl-5 pr-[30px]">
            <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              -$2230
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-4 px-5 bg-[transparent] flex-[0.8433] flex flex-row items-center justify-start">
            <div className="rounded bg-light-red flex flex-row items-center justify-start py-[5px] px-2.5">
              <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-red text-left inline-block min-w-[55px]">
                Rejected
              </div>
            </div>
          </button>
        </div>
        <div className="self-stretch border-light-solid-color-extra-divider border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px] border-solid overflow-x-auto flex flex-row items-center justify-start">
          <div className="flex-1 flex flex-row items-center justify-start py-4 pl-5 pr-0">
            <div className="w-[140px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block shrink-0">
              25.11.2022
            </div>
          </div>
          <div className="flex-[0.8433] flex flex-row items-center justify-start py-4 px-5">
            <div className="w-[70px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-black text-left inline-block shrink-0">
              LLC
            </div>
          </div>
          <div className="flex-[0.8433] flex flex-row items-center justify-start py-3 px-5">
            <div className="h-[27px] w-[35px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-black1 text-center flex items-center justify-center shrink-0">
              EUR
            </div>
          </div>
          <div className="flex-[0.7649] flex flex-row items-center justify-start py-4 pl-5 pr-[30px]">
            <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              +$2787
            </div>
          </div>
          <div className="flex-[0.8433] flex flex-row items-center justify-start py-4 px-5">
            <div className="rounded bg-darkgray-200 flex flex-row items-center justify-start py-[5px] px-2.5">
              <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-darkgray-100 text-left inline-block min-w-[51px]">
                Pending
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch border-light-solid-color-extra-divider border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px] border-solid overflow-x-auto hidden flex-row items-center justify-start">
          <div className="h-[54px] flex-[0.9155] flex flex-row items-center justify-start py-4 px-5 box-border">
            <div className="self-stretch w-[140px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block shrink-0">
              09 Jun 2022
            </div>
          </div>
          <div className="h-[54px] flex-[0.7804] flex flex-row items-center justify-start py-4 pl-5 pr-9 box-border">
            <div className="self-stretch flex-1 relative text-mini leading-[22px] font-light-basic-typography-paragraph text-black text-left">
              Health Inc
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-start py-3 pl-5 pr-2.5">
            <div className="h-[27px] w-9 relative text-mini leading-[22px] font-light-basic-typography-paragraph text-black1 text-center flex items-center justify-center shrink-0">
              GPD
            </div>
          </div>
          <div className="h-[54px] flex-[0.9155] flex flex-row items-center justify-start py-4 px-5 box-border">
            <div className="self-stretch w-[97px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block shrink-0">
              -$4836
            </div>
          </div>
          <div className="flex-[0.9155] flex flex-row items-center justify-start py-4 px-5">
            <div className="rounded bg-light-green flex flex-row items-center justify-start py-[5px] px-2.5">
              <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-green text-left">
                Verified
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch border-light-solid-color-extra-divider border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px] border-solid overflow-x-auto hidden flex-row items-center justify-start">
          <div className="h-[54px] flex-[0.9155] flex flex-row items-center justify-start py-4 px-5 box-border">
            <div className="self-stretch w-[140px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block shrink-0">
              22 Oct 2022
            </div>
          </div>
          <div className="h-[54px] flex-1 flex flex-row items-center justify-start py-4 pl-5 pr-2.5 box-border">
            <div className="self-stretch w-[70px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-black text-left inline-block shrink-0">
              Quick Inc
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-start py-3 pl-5 pr-2.5">
            <div className="h-[27px] w-[35px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-black1 text-center flex items-center justify-center shrink-0">
              USD
            </div>
          </div>
          <div className="h-[54px] flex-[0.9155] flex flex-row items-center justify-start py-4 px-5 box-border">
            <div className="self-stretch w-[97px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block shrink-0">
              +$3789
            </div>
          </div>
          <div className="flex-[0.9155] flex flex-row items-center justify-start py-4 px-5">
            <div className="rounded bg-light-red flex flex-row items-center justify-start py-[5px] px-2.5">
              <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-red text-left">
                Rejected
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch border-light-solid-color-extra-divider border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px] border-solid overflow-x-auto flex flex-row items-center justify-start">
          <div className="flex-1 flex flex-row items-center justify-start py-4 pl-5 pr-0">
            <div className="w-[140px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block shrink-0">
              01.12.2022
            </div>
          </div>
          <div className="flex-[0.8433] flex flex-row items-center justify-start py-4 px-5">
            <div className="relative text-mini leading-[22px] font-light-basic-typography-paragraph text-black text-left inline-block min-w-[70px]">
              Bosch Inc
            </div>
          </div>
          <div className="flex-[0.8433] flex flex-row items-center justify-start py-3 px-5">
            <div className="h-[27px] w-[35px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-black1 text-center flex items-center justify-center shrink-0 min-w-[35px]">
              GPD
            </div>
          </div>
          <div className="flex-[0.7649] flex flex-row items-center justify-start py-4 pl-5 pr-[30px]">
            <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              +$5219
            </div>
          </div>
          <div className="flex-[0.8433] flex flex-row items-center justify-start py-4 px-5">
            <div className="rounded bg-darkgray-200 flex flex-row items-center justify-start py-[5px] px-2.5">
              <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-darkgray-100 text-left inline-block min-w-[51px]">
                Pending
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Table;
