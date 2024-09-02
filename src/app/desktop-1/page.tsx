"use client";
import type { NextPage } from "next";
import SideMenu from "../components/side-menu";
import Navbar from "../components/navbar";
import CardDefault1 from "../components/card-default1";

const Desktop1: NextPage = () => {
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-[33px] box-border gap-[30px] leading-[normal] tracking-[normal] mq925:gap-[15px] mq925:pl-5 mq925:box-border">
      <SideMenu
        logo="/logo@2x.png"
        sheet="/sheet.svg"
        propTop="219px"
        listTextDecoration="none"
      />
      <main className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-[calc(100%_-_285px)] mq925:max-w-full">
        <form className="m-0 self-stretch flex flex-col items-end justify-start gap-[42px] max-w-full mq700:gap-[21px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full">
            <Navbar
              propTop="0"
              propPosition="sticky"
              status1="/status@2x.png"
            />
            <div className="w-[210px] flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border">
              <div className="flex-1 relative text-xl leading-[24px] font-semibold font-light-basic-typography-paragraph text-black1 text-left mq450:text-base mq450:leading-[19px]">{`Transactions history `}</div>
            </div>
            <CardDefault1 />
          </div>
          <button className="cursor-pointer [border:none] py-0 pl-5 pr-0 bg-[transparent] flex flex-row items-start justify-start">
            <div className="rounded-md bg-button-color flex flex-row items-center justify-center py-[2.5px] px-0">
              <div className="flex flex-row items-center justify-center py-[6.5px] px-[58px]">
                <b className="relative text-smi tracking-[0.43px] leading-[22px] inline-block font-light-basic-typography-paragraph text-white text-left min-w-[45px]">
                  Export
                </b>
              </div>
            </div>
          </button>
        </form>
      </main>
    </div>
  );
};

export default Desktop1;
