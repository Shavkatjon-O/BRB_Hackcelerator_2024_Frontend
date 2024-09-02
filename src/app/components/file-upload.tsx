"use client";
import type { NextPage } from "next";

export type FileUploadType = {
  className?: string;
};

const FileUpload: NextPage<FileUploadType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[700.2px] rounded-[11.77px] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-[31.4px] px-[31px] box-border max-w-full text-left text-4xl-5 text-black1 font-light-basic-typography-paragraph mq450:pt-[20.5px] mq450:pb-5 mq450:box-border mq850:gap-4 ${className}`}
    >
      <div className="flex-1 rounded-[11.77px] border-cornflowerblue border-[2.5px] border-dashed box-border flex flex-col items-center justify-start py-[132px] px-5 gap-[4.9px] max-w-full">
        <div className="w-[247.4px] flex flex-row items-start justify-center">
          <div className="w-[40.7px] rounded-[5.09px] bg-dimgray-100 flex flex-row items-start justify-start py-[8.5px] px-2 box-border">
            <img
              className="h-[23.7px] w-[23.7px] relative"
              alt=""
              src="/upload-12.svg"
            />
          </div>
        </div>
        <div className="relative mq450:text-lgi">Browse Files to upload</div>
      </div>
    </div>
  );
};

export default FileUpload;
