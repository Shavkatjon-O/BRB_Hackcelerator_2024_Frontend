"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/navigation";
import List1 from "./list1";

export type MenuType = {
  className?: string;
  headphones?: string;
  headphones1?: string;
  headphones2?: string;
  text?: string;
  text1?: string;
  text2?: string;
  showText?: boolean;
  showText1?: boolean;
  showText2?: boolean;
  showChevronRight?: boolean;
  showChevronRight1?: boolean;
  showChevronRight2?: boolean;
  showGripHorizontal?: boolean;
  showGripHorizontal1?: boolean;
  showGripHorizontal2?: boolean;
  propTextDecoration?: string;
  propTextDecoration1?: string;
  propTextDecoration2?: string;

  /** Style props */
  listTextDecoration?: CSSProperties["textDecoration"];

  /** Action props */
  onListContainerClick?: () => void;
  onListContainerClick2?: () => void;
};

const Menu: NextPage<MenuType> = ({
  className = "",
  onListContainerClick,
  listTextDecoration,
  onListContainerClick2,
  headphones,
  headphones1,
  headphones2,
  text,
  text1,
  text2,
  showText,
  showText1,
  showText2,
  showChevronRight,
  showChevronRight1,
  showChevronRight2,
  showGripHorizontal,
  showGripHorizontal1,
  showGripHorizontal2,
  propTextDecoration,
  propTextDecoration1,
  propTextDecoration2,
}) => {
  const products1Style: CSSProperties = useMemo(() => {
    return {
      textDecoration: listTextDecoration,
    };
  }, [listTextDecoration]);

  const router = useRouter();

  const onListContainerClick1 = useCallback(() => {
    router.push("/");
  }, [router]);

  const onListContainerClick3 = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  const onListContainerClick4 = useCallback(() => {
    router.push("/desktop5");
  }, [router]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-0 px-3.5 gap-1 z-[2] text-left text-mini text-black font-light-basic-typography-paragraph ${className}`}
    >
      <div
        className="self-stretch flex flex-row items-start justify-start py-[15.5px] px-4 gap-2"
        onClick={onListContainerClick}
      >
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <img className="w-5 h-5 relative" alt="" src="/apps.svg" />
        </div>
        <div className="flex-1 relative leading-[22px]" style={products1Style}>
          Overview
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <img className="w-5 h-5 relative" alt="" src="/chevronright.svg" />
        </div>
      </div>
      <List1
        showText={showText}
        showChevronRight={showChevronRight}
        text={text}
        showGripHorizontal={showGripHorizontal}
        onListContainerClick={onListContainerClick1}
        headphones={headphones}
        propTextDecoration={propTextDecoration}
      />
      <List1
        showText={showText1}
        showChevronRight={showChevronRight1}
        text={text1}
        showGripHorizontal={showGripHorizontal1}
        onListContainerClick={onListContainerClick3}
        headphones={headphones1}
        propTextDecoration={propTextDecoration1}
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
          <img className="w-5 h-5 relative" alt="" src="/chevronright.svg" />
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-start justify-start py-[14.5px] px-4 gap-2 cursor-pointer"
        onClick={onListContainerClick2}
      >
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
          <img className="w-5 h-5 relative" alt="" src="/chevronright.svg" />
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
          <img className="w-5 h-5 relative" alt="" src="/chevronright.svg" />
        </div>
      </div>
      <List1
        showText={showText2}
        showChevronRight={showChevronRight2}
        text={text2}
        showGripHorizontal={showGripHorizontal2}
        headphones={headphones2}
        propTextDecoration={propTextDecoration2}
      />
    </div>
  );
};

export default Menu;
