"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Navbar from "./navbar";
import { useRouter } from "next/navigation";
import TableDefault from "./table-default";

export type Content2Type = {
  className?: string;
};

const Content2: NextPage<Content2Type> = ({ className = "" }) => {
  const router = useRouter();

  const onTextClick = useCallback(() => {
    router.push("/desktop5");
  }, [router]);

  return (
    <section
      className={`flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-[calc(100%_-_285px)] mq975:max-w-full ${className}`}
    >
      <header className="self-stretch flex flex-col items-start justify-start gap-[38px] max-w-full text-left text-base text-black font-light-basic-typography-paragraph mq725:gap-[19px]">
        <Navbar
          propTop="unset"
          propPosition="unset"
          status1="/status1@2x.png"
        />
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="w-[261px] flex flex-row items-start justify-start">
            <a
              className="[text-decoration:none] h-[39px] flex-1 relative tracking-[0.43px] leading-[22px] text-[inherit] flex items-center shrink-0 cursor-pointer"
              onClick={onTextClick}
            >
              Bulk Upload
            </a>
            <div className="flex-1 flex flex-col items-start justify-start py-0 px-0">
              <a className="ml-[-0.5px] [text-decoration:none] self-stretch h-[39px] relative tracking-[0.43px] leading-[22px] font-bold text-[inherit] flex items-center shrink-0">{`Upload history `}</a>
            </div>
          </div>
          <TableDefault />
        </div>
      </header>
    </section>
  );
};

export default Content2;
