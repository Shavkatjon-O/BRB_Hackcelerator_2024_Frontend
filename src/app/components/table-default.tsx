"use client";
import type { NextPage } from "next";
import Dropdown from "./dropdown";
import TableRow from "./table-row";

export type TableDefaultType = {
  className?: string;
};

const TableDefault: NextPage<TableDefaultType> = ({ className = "" }) => {
  return (
    <form
      className={`m-0 self-stretch rounded-md bg-white flex flex-col items-start justify-start max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start pt-3 px-6 pb-[26px] box-border max-w-full [row-gap:20px]">
        <div className="flex-1 flex flex-row items-center justify-start py-0 pl-0 pr-[677px] box-border gap-3.5 max-w-full mq1050:flex-wrap mq725:pr-[169px] mq725:box-border mq975:pr-[338px] mq975:box-border">
          <Dropdown
            showChevronDown2
            showChevronDown
            propFlex="unset"
            propMinWidth="unset"
            propWidth="unset"
            propFlex1="unset"
            calendarStats="/calendarstats.svg"
            text="01.01.2023"
            propColor="#030827"
            propDisplay="inline-block"
            propMinWidth1="70px"
            propFlex2="unset"
          />
          <Dropdown
            showChevronDown2
            showChevronDown
            propFlex="unset"
            propMinWidth="unset"
            propWidth="unset"
            propFlex1="unset"
            calendarStats="/calendarstats.svg"
            text="01.02.2023"
            propColor="#030827"
            propDisplay="inline-block"
            propMinWidth1="73px"
            propFlex2="unset"
          />
        </div>
        <div className="rounded-md flex flex-row items-start justify-start">
          <div className="rounded-md bg-white border-light-solid-color-extra-divider border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start">
            <div className="rounded-sm overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 gap-3">
              <div className="relative text-mini leading-[24px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[37px]">{`Filter `}</div>
              <img
                className="h-5 w-5 relative"
                alt=""
                src="/chevrondown-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch border-light-solid-color-extra-divider border-b-[1px] border-solid overflow-x-auto flex flex-row items-start justify-start">
        <div className="self-stretch w-[189.7px] hidden flex-row items-center justify-start py-4 px-[19px] box-border">
          <div className="self-stretch relative text-smi tracking-[1px] uppercase font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
            Product
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-4 px-[19px]">
          <div className="relative text-smi tracking-[1px] uppercase font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[16px]">
            ID
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-4 px-[19px]">
          <div className="relative text-smi tracking-[1px] leading-[15.2px] uppercase font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[79px]">
            File Name
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-4 px-[19px]">
          <div className="relative text-smi tracking-[1px] leading-[15.2px] uppercase font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[99px]">
            Upload Time
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-4 px-5 z-[1]">
          <div className="relative text-smi tracking-[1px] uppercase font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[56px]">
            status
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-4 px-[19px]">
          <div className="relative text-smi tracking-[1px] uppercase font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[56px]">
            Action
          </div>
        </div>
        <div className="hidden flex-row items-center justify-start py-[13px] px-5">
          <img className="h-[22px] w-[22px] relative" alt="" src="/trash.svg" />
        </div>
      </div>
      <TableRow
        rectangle1="/rectangle-1@2x.png"
        onePlus7Pro="OnePlus 7Pro"
        onePlus="OnePlus"
        deviceMobile="/devicemobile.svg"
        avatar="/avatar@2x.png"
        containsErrors="Contains Errors!"
        partiallyPaid="Partially Paid"
        text="View errors"
        propBorder="1px solid #000"
        propBackgroundColor1="transparent"
        propOpacity="0.6"
        propColor1="#030827"
        propMinWidth1="76px"
      />
      <TableRow
        rectangle1="/rectangle-1-1@2x.png"
        onePlus7Pro="Magic Mouse"
        onePlus="Apple"
        propBackgroundColor="rgba(255, 159, 67, 0.16)"
        deviceMobile="/mouse.svg"
        avatar="/avatar-1@2x.png"
        containsErrors="Successful"
        propColor="#28c76f"
        propMinWidth="78px"
        propWidth="0px"
        text="Process File"
        propBorder="1px solid #000"
        propBackgroundColor1="transparent"
        propOpacity="0.6"
        propColor1="#030827"
        propMinWidth1="81px"
      />
      <div className="self-stretch border-light-solid-color-extra-divider border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px] border-solid hidden flex-row items-center justify-start flex-wrap content-center [row-gap:20px]">
        <div className="h-[58px] w-[141.9px] hidden flex-row items-center justify-start py-[7px] px-5 box-border gap-2.5">
          <img
            className="h-[38px] w-[38px] relative rounded-md object-cover shrink-0"
            alt=""
            src="/rectangle-1-2@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
            <div className="w-24 flex-1 relative text-mini leading-[22px] font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block">
              iMac Pro
            </div>
            <div className="relative text-smi leading-[20px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              Apple
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[18px] px-5 box-border min-w-[148px]">
          <div className="h-[22px] w-[101.9px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block shrink-0">
            2 Apr 2022
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-3.5 px-5 box-border gap-2.5 min-w-[148px]">
          <input
            className="m-0 h-[30px] w-[30px] rounded-11xl"
            type="checkbox"
          />
          <div className="relative text-mini leading-[22px] font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
            Computer
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[13px] px-5 box-border gap-2.5 min-w-[148px]">
          <div className="h-8 w-8 relative rounded-81xl overflow-hidden shrink-0">
            <div className="absolute h-full w-full top-[0%] right-[0.63%] bottom-[0%] left-[-0.62%] bg-light-opacity-color-info-info-16" />
            <div className="absolute top-[16.88%] left-[24.38%] text-mini leading-[21px] font-semibold font-light-basic-typography-paragraph text-light-solid-color-info-info-500-base text-center">
              JS
            </div>
          </div>
          <div className="relative text-mini leading-[22px] font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
            Julia Schuster
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-center py-[7px] px-5 box-border min-w-[148px]">
          <div className="relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left whitespace-nowrap">
            $899
          </div>
          <div className="relative text-smi leading-[20px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
            Unpaid
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[17px] px-5 box-border min-w-[148px]">
          <div className="rounded bg-light-red flex flex-row items-center justify-start py-[5px] px-2.5">
            <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-light-solid-color-danger-danger-500-base text-left">
              Cancelled
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start py-[18px] px-5">
          <input className="m-0 h-[22px] w-[22px] relative" type="checkbox" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center pt-[26px] px-6 pb-4 box-border max-w-full [row-gap:20px]">
        <div className="flex-1 relative text-smi leading-[20px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[349px] max-w-full mq725:min-w-full">
          Showing 1 to 2 of 2 entries
        </div>
        <div className="flex-1 flex flex-row items-start justify-end min-w-[349px] max-w-full mq725:min-w-full">
          <div className="w-[34px] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] rounded-md bg-button-color flex flex-row items-center justify-center py-1.5 px-[13px] box-border">
            <div className="relative text-mini leading-[22px] font-light-basic-typography-paragraph text-white text-left inline-block min-w-[7px]">
              1
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch border-light-solid-color-extra-divider border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px] border-solid overflow-x-auto hidden flex-row items-center justify-start">
        <div className="h-[58px] flex-[0.9258] flex flex-row items-center justify-start py-[7px] px-5 box-border gap-2.5">
          <img
            className="h-[38px] w-[38px] relative rounded-md object-cover"
            alt=""
            src="/rectangle-1-3@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
            <div className="w-24 flex-1 relative text-mini leading-[22px] font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block">
              Note 10
            </div>
            <div className="relative text-smi leading-[20px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              Samsung
            </div>
          </div>
        </div>
        <div className="h-[58px] flex-[0.9258] flex flex-row items-center justify-start py-[18px] px-5 box-border">
          <div className="self-stretch w-[101.9px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block shrink-0">
            25 Apr 2022
          </div>
        </div>
        <div className="flex-[0.9258] flex flex-row items-center justify-start py-3.5 px-5 gap-2.5">
          <div className="h-[30px] w-[30px] rounded-11xl bg-light-opacity-color-primary-primary-16 flex flex-row items-center justify-center p-1 box-border">
            <img
              className="h-[22px] w-[22px] relative"
              alt=""
              src="/devicemobile.svg"
            />
          </div>
          <div className="relative text-mini leading-[22px] font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
            Smart Phone
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[13px] pl-5 pr-2 gap-2.5">
          <div className="h-8 w-8 relative rounded-81xl overflow-hidden shrink-0">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-light-solid-color-primary-primary-500-base" />
              <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-200" />
            </div>
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/avatar-2@2x.png"
            />
          </div>
          <div className="flex-1 relative text-mini leading-[22px] font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
            Elizabeth Snyder
          </div>
        </div>
        <div className="flex-[0.932] flex flex-col items-start justify-center py-[7px] pl-5 pr-[19px]">
          <div className="relative text-mini leading-[22px] font-semibold font-light-basic-typography-paragraph text-light-solid-color-primary-primary-500-base text-left whitespace-nowrap">
            $149
          </div>
          <div className="h-5 relative text-smi leading-[20px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block">
            Fully Paid
          </div>
        </div>
        <div className="flex-[0.9258] flex flex-row items-center justify-start py-[17px] px-5">
          <div className="rounded bg-light-green flex flex-row items-center justify-start py-[5px] px-2.5">
            <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-green text-left">
              Completed
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start py-[18px] px-5">
          <img className="h-[22px] w-[22px] relative" alt="" src="/trash.svg" />
        </div>
      </div>
      <div className="self-stretch border-light-solid-color-extra-divider border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px] border-solid overflow-x-auto hidden flex-row items-center justify-start">
        <div className="flex-1 flex flex-row items-center justify-start py-[7px] px-5 gap-2.5">
          <img
            className="h-[38px] w-[38px] relative rounded-md object-cover"
            alt=""
            src="/rectangle-1-4@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-0.5">
            <div className="relative text-mini leading-[22px] font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              Mi LED TV 4X
            </div>
            <div className="relative text-smi leading-[20px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              Xiaomi
            </div>
          </div>
        </div>
        <div className="h-[58px] flex-1 flex flex-row items-center justify-start py-[18px] px-5 box-border">
          <div className="self-stretch w-[101.9px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block shrink-0">
            8 Jun 2022
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-3.5 px-5 gap-2.5">
          <div className="h-[30px] w-[30px] rounded-11xl bg-light-red flex flex-row items-center justify-center p-1 box-border">
            <img
              className="h-[22px] w-[22px] relative"
              alt=""
              src="/devicetv.svg"
            />
          </div>
          <div className="relative text-mini leading-[22px] font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
            Smart TV
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[13px] px-5 gap-2.5">
          <div className="h-8 w-8 relative rounded-81xl overflow-hidden shrink-0">
            <div className="absolute h-full w-full top-[0%] right-[0.63%] bottom-[0%] left-[-0.62%] bg-light-red" />
            <div className="absolute top-[16.88%] left-[11.88%] text-mini leading-[21px] font-semibold font-light-basic-typography-paragraph text-light-solid-color-danger-danger-500-base text-center">
              MR
            </div>
          </div>
          <div className="relative text-mini leading-[22px] font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
            Marvin Ramos
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-center py-[7px] pl-5 pr-[19px]">
          <div className="relative text-mini leading-[22px] font-semibold font-light-basic-typography-paragraph text-light-solid-color-primary-primary-500-base text-left whitespace-nowrap">
            $399
          </div>
          <div className="h-5 relative text-smi leading-[20px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block">
            Fully Paid
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[17px] px-5">
          <div className="rounded bg-light-opacity-color-primary-primary-16 flex flex-row items-center justify-start py-[5px] px-2.5">
            <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-light-solid-color-primary-primary-500-base text-left">
              Confirmed
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start py-[18px] px-5">
          <img className="h-[22px] w-[22px] relative" alt="" src="/trash.svg" />
        </div>
      </div>
    </form>
  );
};

export default TableDefault;
