"use client";
import type { NextPage } from "next";
import SideMenu from "../components/side-menu";
import Navbar from "../components/navbar";
import Overview from "../components/overview";
import FrameComponent from "../components/frame-component";

const Desktop: NextPage = () => {
  return (
    <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-gray overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-[31px] box-border gap-[30px] leading-[normal] tracking-[normal] mq925:gap-[15px] mq925:pl-5 mq925:box-border">
      <SideMenu logo="/logo@2x.png" sheet="/sheet.svg" />
      <main className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-[calc(100%_-_285px)] mq925:max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full text-left text-xl text-black1 font-light-basic-typography-paragraph">
          <Navbar status1="/status@2x.png" />
          <div className="w-[450px] relative leading-[24px] font-semibold flex items-center max-w-full mq450:text-base mq450:leading-[19px]">{`Account Overview `}</div>
          <Overview />
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default Desktop;
