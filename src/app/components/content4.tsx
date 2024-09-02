"use client";

import type { NextPage } from "next";
import Navbar from "./navbar";
import PayMethod from "./pay-method";

export type Content4Type = {
  className?: string;
};

const Content4: NextPage<Content4Type> = ({ className = "" }) => {
  return (
    <section
      className={`flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-[calc(100%_-_285px)] text-center text-7xl font-light-basic-typography-paragraph mq1025:max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[87.3px] max-w-full mq750:gap-[22px] mq1125:gap-11">
        <Navbar propTop="0" propPosition="sticky" status1="/status@2x.png" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full">
          <PayMethod showPaymentIcons />
        </div>
      </div>
    </section>
  );
};

export default Content4;
