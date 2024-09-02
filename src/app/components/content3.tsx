"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Navbar from "./navbar";
import { useRouter } from "next/navigation";
import FileUpload from "./file-upload";

export type Content3Type = {
  className?: string;
};

const Content3: NextPage<Content3Type> = ({ className = "" }) => {
  const router = useRouter();

  const onTextClick = useCallback(() => {
    router.push("/desktop4");
  }, [router]);

  return (
    <section
      className={`flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-[calc(100%_-_285px)] text-left text-base text-black font-light-basic-typography-paragraph mq850:max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[38px] max-w-full mq675:gap-[19px]">
        <Navbar propTop="0" propPosition="sticky" status1="/status@2x.png" />
        <div className="w-[908.2px] flex flex-row items-start justify-center flex-wrap content-start max-w-full [row-gap:20px]">
          <a className="[text-decoration:none] h-[39px] w-[129.5px] relative tracking-[0.43px] leading-[22px] font-bold text-[inherit] flex items-center shrink-0">
            Bulk Upload
          </a>
          <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[506px] max-w-full ml-[-0.5px] mq675:min-w-full mq675:ml-0">
            <a
              className="[text-decoration:none] w-[132px] h-[39px] relative tracking-[0.43px] leading-[22px] text-[inherit] flex items-center shrink-0 cursor-pointer"
              onClick={onTextClick}
            >{`Upload history `}</a>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full text-4xl-5 text-black1">
              <FileUpload />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content3;
