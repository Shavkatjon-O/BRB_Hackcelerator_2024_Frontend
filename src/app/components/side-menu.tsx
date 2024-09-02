"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Logo from "./logo";
import SidebarListActive from "./sidebar-list-active";
import Menu from "./menu";

export type SideMenuType = {
  className?: string;
  logo?: string;
  sheet?: string;
  propTop?: string;
  listTextDecoration?: string;
};

const SideMenu: NextPage<SideMenuType> = ({
  className = "",
  logo,
  sheet,
  propTop,
  listTextDecoration,
}) => {
  const router = useRouter();

  const onListContainerClick = useCallback(() => {
    router.push("/desktop5");
  }, [router]);

  return (
    <div
      className={`w-[255px] bg-white flex flex-col items-start justify-start pt-3 px-0 pb-[469px] box-border relative gap-[88px] text-left text-mini text-black font-light-basic-typography-paragraph mq450:gap-11 mq450:pb-[198px] mq450:box-border mq925:hidden mq925:pt-5 mq925:pb-[305px] mq925:box-border ${className}`}
    >
      <Logo logo={logo} />
      <SidebarListActive propTop={propTop} sheet={sheet} />
      <Menu
        listTextDecoration={listTextDecoration}
        onListContainerClick2={onListContainerClick}
        headphones="/stack2.svg"
        headphones1="/coin@2x.png"
        headphones2="/headphones.svg"
        text="Transactions"
        text1="Payments"
        text2="Support"
        showText
        showText1
        showText2
        showChevronRight
        showChevronRight1
        showChevronRight2
        showGripHorizontal
        showGripHorizontal1
        showGripHorizontal2
        propTextDecoration="unset"
        propTextDecoration1="unset"
      />
    </div>
  );
};

export default SideMenu;
