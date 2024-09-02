"use client";
import type { NextPage } from "next";
import Navbar from "./navbar";
import Summary from "./summary";
import IdentitiyCheck from "./identitiy-check";

export type Content6Type = {
  className?: string;
};

const Content6: NextPage<Content6Type> = ({ className = "" }) => {
  return (
    <main
      className={`flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-[calc(100%_-_285px)] mq1025:max-w-full ${className}`}
    >
      <section className="self-stretch flex flex-col items-start justify-start gap-[77px] max-w-full text-left text-mini font-light-basic-typography-paragraph mq750:gap-[19px] mq1125:gap-[38px]">
        <Navbar propTop="0" propPosition="sticky" status1="/status@2x.png" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[738px] flex flex-col items-start justify-start gap-[24.5px] max-w-full">
            <Summary />
            <IdentitiyCheck />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Content6;
