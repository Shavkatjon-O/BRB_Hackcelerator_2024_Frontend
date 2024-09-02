"use client";

import type { NextPage } from "next";
import SideMenu from "../components/side-menu";
import Content2 from "../components/content2";

const Desktop4: NextPage = () => {
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-[33px] box-border gap-[30px] leading-[normal] tracking-[normal] mq725:gap-[15px] mq975:pl-5 mq975:box-border">
      <SideMenu
        logo="/logo@2x.png"
        sheet="/sheet.svg"
        propTop="388px"
        listTextDecoration="unset"
      />
      <Content2 />
    </div>
  );
};

export default Desktop4;
