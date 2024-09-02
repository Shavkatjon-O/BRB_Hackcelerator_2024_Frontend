"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import SidebarListActive from "../components/sidebar-list-active";
import { useRouter } from "next/navigation";
import List1 from "../components/list1";
import Content4 from "../components/content4";

const Desktop6: NextPage = () => {
  const router = useRouter();

  const onListContainerClick = useCallback(() => {
    router.push("/desktop");
  }, [router]);

  const onListContainerClick1 = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-[33px] box-border gap-[30px] leading-[normal] tracking-[normal] text-left text-mini text-black font-light-basic-typography-paragraph mq1025:pl-5 mq1025:box-border mq750:gap-[15px]">
      <div className="w-[255px] bg-white flex flex-col items-start justify-start pt-3 px-0 pb-[469px] box-border relative gap-[88px] mq1025:hidden mq1025:pt-5 mq1025:pb-[305px] mq1025:box-border mq450:gap-11 mq450:pb-[198px] mq450:box-border">
        <div className="flex flex-row items-start justify-start py-[13.5px] px-4">
          <div className="flex flex-row items-start justify-start gap-[19px]">
            <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
              <img
                className="w-6 h-6 relative"
                loading="lazy"
                alt=""
                src="/alignjustified1.svg"
              />
            </div>
            <img
              className="h-[33px] w-[180px] relative object-cover"
              loading="lazy"
              alt=""
              src="/logo@2x.png"
            />
          </div>
        </div>
        <SidebarListActive propTop="274px" sheet="/sheet.svg" />
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-3.5 gap-1 z-[2]">
          <div
            className="self-stretch flex flex-row items-start justify-start py-[15.5px] px-4 gap-2 cursor-pointer"
            onClick={onListContainerClick}
          >
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-5 h-5 relative"
                loading="lazy"
                alt=""
                src="/apps.svg"
              />
            </div>
            <div className="flex-1 relative leading-[22px]">Overview</div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-5 h-5 relative"
                loading="lazy"
                alt=""
                src="/chevronright.svg"
              />
            </div>
          </div>
          <div
            className="self-stretch flex flex-row items-start justify-start py-[15.5px] px-4 gap-2 cursor-pointer"
            onClick={onListContainerClick1}
          >
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-5 h-5 relative"
                loading="lazy"
                alt=""
                src="/stack2.svg"
              />
            </div>
            <div className="flex-1 relative leading-[22px]">Transactions</div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-5 h-5 relative"
                alt=""
                src="/chevronright.svg"
              />
            </div>
          </div>
          <List1
            showText
            showChevronRight
            text="Payments"
            showGripHorizontal
            headphones="/coin@2x.png"
            propTextDecoration="unset"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-[15.5px] px-4 gap-2">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-5 h-5 relative"
                loading="lazy"
                alt=""
                src="/brandgoogleanalytics.svg"
              />
            </div>
            <div className="flex-1 relative leading-[22px]">Cards</div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-5 h-5 relative"
                alt=""
                src="/chevronright.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[14.5px] px-4 gap-2">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/upload.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="self-stretch relative leading-[22px]">Upload</div>
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-5 h-5 relative"
                alt=""
                src="/chevronright.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[15.5px] px-4 gap-2">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-5 h-5 relative"
                loading="lazy"
                alt=""
                src="/settings.svg"
              />
            </div>
            <div className="flex-1 relative leading-[22px]">Setting</div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-5 h-5 relative"
                alt=""
                src="/chevronright.svg"
              />
            </div>
          </div>
          <List1
            showText
            showChevronRight
            text="Support"
            showGripHorizontal
            headphones="/headphones.svg"
            propTextDecoration="unset"
          />
        </div>
      </div>
      <Content4 />
    </div>
  );
};

export default Desktop6;
