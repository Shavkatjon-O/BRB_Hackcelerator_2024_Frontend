"use client";
import type { NextPage } from "next";
import Button from "./button";

export type DiscoverType = {
  className?: string;
};

const Discover: NextPage<DiscoverType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] rounded-md bg-white flex flex-col items-start justify-start max-w-full text-left text-lg font-light-basic-typography-paragraph ${className}`}
    >
      <div className="self-stretch rounded-tl-none rounded-tr-md rounded-b-md overflow-hidden flex flex-row items-start justify-start gap-[18px] max-w-full mq700:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-center pt-[47px] pb-[34px] pl-6 pr-0 box-border gap-[23px] min-w-[224px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
            <div className="relative leading-[24px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              New to internet banking for Business?
            </div>
            <div className="relative text-mini leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Don‘t worry we are excited to help you.
            </div>
          </div>
          <Button text="Discover more" />
        </div>
        <div className="flex flex-col items-start justify-center py-[13px] pl-0 pr-3 box-border gap-4 min-w-[183px] mq700:flex-1 mq700:pr-0 mq700:box-border">
          <img
            className="w-[114.9px] h-[120.7px] relative object-contain hidden"
            alt=""
            src="/3dspacerocketwithsmoke-232148938939-3@2x.png"
          />
          <img
            className="w-[100px] h-[371.4px] relative object-cover hidden"
            alt=""
            src="/verifyyouremailillustration@2x.png"
          />
          <img
            className="w-[171px] h-[166px] relative rounded-md object-cover mq700:self-stretch mq700:w-auto"
            loading="lazy"
            alt=""
            src="/loginillustration2-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
