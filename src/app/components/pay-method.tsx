"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Button from "./button";

export type PayMethodType = {
  className?: string;
  showPaymentIcons?: boolean;
};

const PayMethod: NextPage<PayMethodType> = ({
  className = "",
  showPaymentIcons = true,
}) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/desktop3");
  }, [router]);

  const onButtonClick1 = useCallback(() => {
    router.push("/desktop8");
  }, [router]);

  return (
    <div
      className={`w-[738px] shadow-[0px_5px_20px_rgba(75,_70,_92,_0.4)] rounded-md bg-white flex flex-col items-center justify-center p-[65px] box-border gap-4 max-w-full text-center text-7xl font-light-basic-typography-paragraph mq450:pt-[42px] mq450:pb-[42px] mq450:box-border mq750:pl-8 mq750:pr-8 mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-2.5">
        <h2 className="m-0 self-stretch relative text-inherit leading-[36px] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-2xl mq450:leading-[29px]">
          How do you want to pay?
        </h2>
      </div>
      <div className="self-stretch rounded-md border-light-solid-color-extra-divider border-[1px] border-solid box-border flex flex-row items-center justify-center flex-wrap content-center py-[18px] px-[19px] gap-4 max-w-full text-left text-3xl">
        {showPaymentIcons && (
          <img
            className="h-[50.7px] w-[73.5px] relative rounded-5xs-6 object-cover"
            loading="lazy"
            alt=""
            src="/payment-icons@2x.png"
          />
        )}
        <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[311px] max-w-full">
          <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-lg mq450:leading-[24px]">{`Visa `}</h3>
          <div className="self-stretch relative text-mini leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            3 Business days- Free
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-md border-light-solid-color-extra-divider border-[1px] border-solid box-border flex flex-row items-center justify-start py-[18px] px-[19px] max-w-full">
        <input
          className="w-full [border:none] [outline:none] bg-[transparent] h-[30px] flex-1 flex flex-col items-start justify-end font-light-basic-typography-paragraph font-semibold text-3xl [-webkit-text-fill-color:transparent] min-w-[250px] max-w-full"
          placeholder="Add New Card"
          type="text"
        />
      </div>
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
          text="Continue"
          propBorder="none"
          propBackgroundColor="#4b465c"
          propOpacity="unset"
          onButtonClick={onButtonClick1}
          propColor="#fff"
          propMinWidth="60px"
        />
      </div>
    </div>
  );
};

export default PayMethod;
