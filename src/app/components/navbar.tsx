"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type NavbarType = {
  className?: string;
  status1?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propPosition?: CSSProperties["position"];
};

const Navbar: NextPage<NavbarType> = ({
  className = "",
  propTop,
  propPosition,
  status1,
}) => {
  const navbarStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      position: propPosition,
    };
  }, [propTop, propPosition]);

  return (
    <header
      className={`self-stretch shadow-[0px_0px_4px_rgba(165,_163,_174,_0.3)] rounded-md bg-white flex flex-row items-start justify-between py-3 px-6 box-border top-[0] z-[99] sticky max-w-full gap-5 text-center text-xs text-button-color font-light-basic-typography-paragraph ${className}`}
      style={navbarStyle}
    >
      <div className="w-[686px] rounded-md border-darkgray-100 border-[1px] border-solid box-border flex flex-row items-center justify-start py-[3px] pl-2.5 pr-0 gap-2.5 max-w-full">
        <img
          className="h-[26px] w-[26px] relative shrink-0"
          alt=""
          src="/search.svg"
        />
        <input
          className="w-[656px] [border:none] [outline:none] font-light-basic-typography-paragraph text-mini bg-[transparent] h-[22px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left flex items-center whitespace-nowrap max-w-full p-0 shrink-0"
          placeholder="Search for transactions, accounts, ...."
          type="text"
        />
      </div>
      <div className="w-[253px] flex flex-row items-center justify-start gap-4">
        <img
          className="h-[26px] w-[26px] relative"
          loading="lazy"
          alt=""
          src="/bell.svg"
        />
        <img
          className="h-6 w-6 relative object-cover"
          alt=""
          src="/coin-1@2x.png"
        />
        <div className="flex-1 flex flex-col items-end justify-center py-[9px] px-0">
          <a className="[text-decoration:none] self-stretch relative leading-[17px] font-semibold text-[inherit] whitespace-nowrap">
            Hello Maria
          </a>
        </div>
        <img
          className="h-9 w-9 relative object-cover min-h-[36px]"
          loading="lazy"
          alt=""
          src={status1}
        />
      </div>
    </header>
  );
};

export default Navbar;
