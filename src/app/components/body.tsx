"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import CardNumber from "./card-number";
import FormSwitchButton from "./form-switch-button";
import Button from "./button";
import BodyAutoLayoutHorizontal from "./body-auto-layout-horizontal";

export type BodyType = {
  className?: string;
};

const Body: NextPage<BodyType> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/desktop6");
  }, [router]);

  return (
    <form
      className={`m-0 self-stretch shadow-[0px_5px_20px_rgba(75,_70,_92,_0.4)] rounded-md bg-white flex flex-col items-center justify-center pt-[78.5px] px-[65px] pb-[76.5px] box-border gap-[13px] max-w-full mq750:pt-[51px] mq750:pb-[50px] mq750:box-border mq1125:pl-8 mq1125:pr-8 mq1125:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start py-0 px-[3px] box-border gap-2 max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-2.5 pl-0 pr-5 box-border min-w-[604px] max-w-full mq1025:min-w-full">
          <div className="w-[370px] relative text-xl leading-[36px] font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left flex items-center max-w-full mq450:text-base mq450:leading-[29px]">
            New Payment
          </div>
        </div>
        <div className="h-12 w-12 rounded-md" />
      </div>
      <CardNumber
        calendarStats="/chevrondown.svg"
        text="Selcet Currency "
        showChevronDown2
        showChevronDown={false}
        propFlex="1"
        propMinWidth="unset"
        propWidth="unset"
        propFlex1="1"
        propColor="#b5b5b5"
        propDisplay="unset"
        propMinWidth1="unset"
        propFlex2="1"
      />
      <div className="self-stretch flex flex-row items-center justify-start py-0 px-[3px] box-border gap-[17px] max-w-full mq1125:flex-wrap">
        <FormSwitchButton />
        <div className="w-[992px] flex flex-row items-center justify-start gap-2 max-w-full shrink-0">
          <div className="w-[30px] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] rounded-81xl bg-light-solid-color-primary-primary-500-base hidden flex-row items-center justify-end p-[3px] box-border">
            <div className="h-3 w-3 relative rounded-[50%] bg-white" />
          </div>
          <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block max-w-full">
            Schedule Transfer
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-4 max-w-full mq450:flex-wrap">
        <Button
          text="Cancel"
          propBorder="1px solid #000"
          propBackgroundColor="transparent"
          propOpacity="0.6"
          propColor="#030827"
          propMinWidth="46px"
        />
        <Button
          text="Continue"
          propBorder="none"
          propBackgroundColor="#4b465c"
          propOpacity="unset"
          onButtonClick={onButtonClick}
          propColor="#fff"
          propMinWidth="60px"
        />
      </div>
      <BodyAutoLayoutHorizontal
        themeLightDivider="/themelight-divider.svg"
        themeLightDivider1="/themelight-divider-1.svg"
      />
      <div className="w-[217px] flex flex-row items-start justify-center gap-2">
        <div className="flex-1 flex flex-col items-start justify-end pt-[3px] pb-0 pl-0 pr-5">
          <div className="self-stretch h-[45px] relative text-xl leading-[36px] font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right flex items-center shrink-0 mq450:text-base mq450:leading-[29px]">
            Upload a file
          </div>
        </div>
        <div className="rounded-md bg-dimgray-100 flex flex-row items-start justify-start p-2.5">
          <img
            className="h-7 w-7 relative"
            loading="lazy"
            alt=""
            src="/upload-1.svg"
          />
        </div>
      </div>
    </form>
  );
};

export default Body;
