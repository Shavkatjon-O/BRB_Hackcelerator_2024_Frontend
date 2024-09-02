"use client";
import type { NextPage } from "next";


export type CardNumber1Type = {
  className?: string;
};

const CardNumber1: NextPage<CardNumber1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-1 max-w-full text-left text-smi font-light-basic-typography-paragraph ${className}`}
    >
      <div className="w-[200px] relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
        Username
      </div>
      <div className="self-stretch rounded-lg bg-white border-light-solid-color-extra-divider border-[1px] border-solid box-border flex flex-row items-center justify-start max-w-full">
        <input
          className="w-full [border:none] [outline:none] bg-[transparent] h-12 flex-1 rounded-lg overflow-hidden flex flex-row items-center justify-start py-[13px] px-4 box-border font-light-basic-typography-paragraph text-lg [-webkit-text-fill-color:transparent] min-w-[250px] max-w-full"
          placeholder="Enter confirmation code"
          type="text"
        />
      </div>
      <div className="w-[200px] relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
        Message
      </div>
    </div>
  );
};

export default CardNumber1;
