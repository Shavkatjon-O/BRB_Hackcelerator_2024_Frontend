"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./navbar";
import CardNumber from "./card-number";
import FormSwitchButton from "./form-switch-button";
import Dropdown from "./dropdown";
import Button from "./button";
import BodyAutoLayoutHorizontal from "./body-auto-layout-horizontal";

export type Content1Type = {
  className?: string;
};

const Content1: NextPage<Content1Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/desktop6");
  }, [router]);

  const onTextClick = useCallback(() => {
    router.push("/desktop7");
  }, [router]);

  return (
    <main
      className={`flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-[calc(100%_-_285px)] mq1025:max-w-full ${className}`}
    >
      <section className="self-stretch flex flex-col items-start justify-start gap-[38px] max-w-full text-left text-base text-black font-light-basic-typography-paragraph mq750:gap-[19px]">
        <Navbar propTop="0" propPosition="sticky" status1="/status@2x.png" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[47px] max-w-full mq750:gap-[23px]">
          <div className="w-[261px] flex flex-row items-start justify-start">
            <a className="[text-decoration:none] h-[39px] flex-1 relative tracking-[0.43px] leading-[22px] font-bold text-[inherit] flex items-center shrink-0">
              Send Money
            </a>
            <div className="flex-1 flex flex-col items-start justify-start py-0 px-0">
              <a
                className="ml-[-0.5px] [text-decoration:none] self-stretch h-[39px] relative tracking-[0.43px] leading-[22px] text-[inherit] flex items-center shrink-0 cursor-pointer"
                onClick={onTextClick}
              >
                Request Money
              </a>
            </div>
          </div>
          <form className="m-0 self-stretch shadow-[0px_5px_20px_rgba(75,_70,_92,_0.4)] rounded-md bg-white flex flex-col items-center justify-center pt-[26px] px-[65px] pb-6 box-border gap-[9px] max-w-full mq750:pt-5 mq750:pb-5 mq750:box-border mq1125:pl-8 mq1125:pr-8 mq1125:box-border">
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
              <FormSwitchButton
                propWidth="unset"
                propBackgroundColor="#030827"
                propBorder="unset"
                propBackgroundColor1="#fff"
              />
              <div className="w-[992px] flex flex-row items-center justify-start gap-2 max-w-full shrink-0">
                <div className="w-[30px] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] rounded-81xl bg-light-solid-color-primary-primary-500-base hidden flex-row items-center justify-end p-[3px] box-border">
                  <div className="h-3 w-3 relative rounded-[50%] bg-white" />
                </div>
                <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block max-w-full">
                  Schedule Transfer
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start pt-5 pb-0 px-0 box-border gap-[27px] max-w-full">
              <div className="w-[281px] flex flex-row items-start justify-start py-0 px-0 box-border">
                <Dropdown
                  showChevronDown2
                  showChevronDown={false}
                  propFlex="1"
                  propMinWidth="unset"
                  propWidth="unset"
                  propFlex1="1"
                  calendarStats="/chevrondown.svg"
                  text="Starting on"
                  propColor="#b5b5b5"
                  propDisplay="unset"
                  propMinWidth1="unset"
                  propFlex2="1"
                />
              </div>
              <div className="flex-1 flex flex-row items-start justify-start min-w-[224px] max-w-full">
                <Dropdown
                  showChevronDown2
                  showChevronDown={false}
                  propFlex="1"
                  propMinWidth="unset"
                  propWidth="unset"
                  propFlex1="1"
                  calendarStats="/chevrondown.svg"
                  text="Ending on "
                  propColor="#b5b5b5"
                  propDisplay="unset"
                  propMinWidth1="unset"
                  propFlex2="1"
                />
              </div>
              <div className="w-[314px] flex flex-row items-start justify-start py-0 pl-0 pr-px box-border">
                <Dropdown
                  showChevronDown2
                  showChevronDown={false}
                  propFlex="1"
                  propMinWidth="unset"
                  propWidth="unset"
                  propFlex1="1"
                  calendarStats="/chevrondown.svg"
                  text="Monthly"
                  propColor="#b5b5b5"
                  propDisplay="unset"
                  propMinWidth1="unset"
                  propFlex2="1"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-[26px] px-0 pb-0 box-border gap-4 max-w-full mq450:flex-wrap">
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
                onButtonContainerClick={onButtonContainerClick}
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
        </div>
      </section>
    </main>
  );
};

export default Content1;
