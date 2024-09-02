"use client";
import type { NextPage } from "next";
import SideMenu from "../components/side-menu";
import Content3 from "../components/content3";

const Desktop5: NextPage = () => {
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-[33px] box-border gap-[30px] leading-[normal] tracking-[normal] mq850:gap-[15px] mq850:pl-5 mq850:box-border">
      <SideMenu
        logo="/logo@2x.png"
        sheet="/sheet.svg"
        propTop="388px"
        listTextDecoration="unset"
      />
      <Content3 />
    </div>
  );
};

export default Desktop5;
