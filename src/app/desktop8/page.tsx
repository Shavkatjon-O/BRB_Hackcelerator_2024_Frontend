"use client";
import type { NextPage } from "next";
import SideMenu from "../components/side-menu";
import Content5 from "../components/content5";

const Desktop7: NextPage = () => {
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-[33px] box-border gap-[30px] leading-[normal] tracking-[normal] mq1025:pl-5 mq1025:box-border mq750:gap-[15px]">
      <SideMenu logo="/logo@2x.png" sheet="/sheet.svg" propTop="274px" />
      <Content5 />
    </div>
  );
};

export default Desktop7;
