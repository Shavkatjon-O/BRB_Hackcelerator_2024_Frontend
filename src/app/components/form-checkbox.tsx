"use client";
import type { NextPage } from "next";

export type FormCheckboxType = {
  className?: string;
};

const FormCheckbox: NextPage<FormCheckboxType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[55px] flex flex-row items-center justify-start py-0 px-0 box-border gap-1.5 text-left text-mini font-light-basic-typography-paragraph ${className}`}
    >
      <input
        className="m-0 h-[18px] w-[18px] rounded border-gray1-100 border-[1px] border-solid box-border shrink-0"
        type="checkbox"
      />
      <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap shrink-0">
        Send with Company Logo
      </div>
    </div>
  );
};

export default FormCheckbox;
