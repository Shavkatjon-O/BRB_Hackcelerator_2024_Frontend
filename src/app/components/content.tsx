"use client";

import type { NextPage } from "next";
import { useCallback } from "react";
import Navbar from "./navbar";
import { useRouter } from "next/navigation";
import Body from "./body";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  const router = useRouter();

  const onTextClick = useCallback(() => {
    router.push("/desktop7");
  }, [router]);

  return (
    <main
      className={`flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-[calc(100%_-_285px)] mq1025:max-w-full ${className}`}
    >
      <section className="self-stretch flex flex-col items-start justify-start gap-[38px] max-w-full text-left text-base text-black font-light-basic-typography-paragraph mq750:gap-[19px]">
        <Navbar propTop="0" propPosition="sticky" status1="/status@2x.png" />
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="w-[261px] flex flex-row items-start justify-start">
            <a className="[text-decoration:none] h-[39px] flex-1 relative tracking-[0.43px] leading-[22px] font-bold text-[inherit] flex items-center shrink-0">
              Send Money
            </a>
            <div className="flex-1 flex flex-col items-start justify-start py-0 px-0">
              <a
                className="ml-[-0.5px] [text-decoration:none] self-stretch h-[39px] relative tracking-[0.43px] leading-[22px] text-[inherit] flex items-center shrink-0 cursor-pointer"
                onClick={onTextClick}
              >
                Request Money
              </a>
            </div>
          </div>
          <Body />
        </div>
      </section>
    </main>
  );
};

export default Content;
