"use client";
import type { NextPage } from "next";
import SideMenu from "../components/side-menu";
import Content6 from "../components/content6";

const Desktop8: NextPage = () => {
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-[33px] box-border gap-[30px] leading-[normal] tracking-[normal] mq750:gap-[15px] mq1025:pl-5 mq1025:box-border">
      <SideMenu logo="/logo@2x.png" sheet="/sheet.svg" propTop="274px" />
      <Content6 />
    </div>
  );
};

export default Desktop8;
