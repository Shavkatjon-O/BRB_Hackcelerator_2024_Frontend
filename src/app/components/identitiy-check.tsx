"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import CardNumber1 from "./card-number1";
import Button from "./button";

export type IdentitiyCheckType = {
  className?: string;
};

const IdentitiyCheck: NextPage<IdentitiyCheckType> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/desktop6");
  }, [router]);

  return (
    <div
      className={`self-stretch shadow-[0px_5px_20px_rgba(75,_70,_92,_0.4)] rounded-md bg-white flex flex-col items-center justify-center pt-[46px] px-[65px] pb-[65px] box-border gap-4 max-w-full text-center text-7xl font-light-basic-typography-paragraph mq750:pl-8 mq750:pr-8 mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-2.5 box-border gap-3 max-w-full">
        <h2 className="m-0 self-stretch relative text-inherit leading-[36px] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-2xl mq450:leading-[29px]">
          Transaction Validation
        </h2>
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border max-w-full text-left text-mini">
          <div className="w-[657.1px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center max-w-[109%] shrink-0">
            Enter the confirmation code
          </div>
        </div>
      </div>
      <CardNumber1 />
      <div className="flex flex-row items-start justify-start pt-[18px] px-0 pb-0 box-border gap-4 max-w-full mq450:flex-wrap">
        <Button
          text="Back"
          propBorder="1px solid #000"
          propBackgroundColor="transparent"
          propOpacity="0.6"
          onButtonClick={onButtonClick}
          propColor="#030827"
          propMinWidth="33px"
        />
        <Button
          text="Pay"
          propBorder="none"
          propBackgroundColor="#4b465c"
          propOpacity="unset"
          propColor="#fff"
          propMinWidth="25px"
        />
      </div>
    </div>
  );
};

export default IdentitiyCheck;
