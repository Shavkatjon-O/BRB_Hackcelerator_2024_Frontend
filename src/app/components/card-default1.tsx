"use client";
import type { NextPage } from "next";
import Dropdown from "./dropdown";
import DataTableRow from "./data-table-row";

export type CardDefault1Type = {
  className?: string;
};

const CardDefault1: NextPage<CardDefault1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] rounded-md bg-white flex flex-col items-start justify-start max-w-full text-left text-smi text-black font-light-basic-typography-paragraph ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start py-6 px-0 box-border gap-4 max-w-full mq700:pt-5 mq700:pb-5 mq700:box-border">
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 px-6 box-border [row-gap:20px] max-w-full">
          <div className="flex-1 flex flex-row items-center justify-start py-0 pl-0 pr-[216px] box-border gap-3.5 min-w-[286px] max-w-full mq700:flex-wrap mq700:pr-[108px] mq700:box-border mq450:pr-5 mq450:box-border">
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
              calendarStats="/calendarstats.svg"
              text="01.02.2023"
            />
          </div>
          <div className="w-[461px] flex flex-row items-center justify-end py-0 pl-0 pr-2 box-border max-w-full">
            <div className="flex-1 rounded-md bg-white border-light-solid-color-extra-divider border-[1px] border-solid box-border flex flex-row items-center justify-start max-w-full">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph text-mini [-webkit-text-fill-color:transparent] min-w-[250px] max-w-full"
                placeholder="Search transactions"
                type="text"
              />
            </div>
          </div>
          <div className="rounded-md flex flex-row items-start justify-start text-mini">
            <div className="rounded-md bg-white border-light-solid-color-extra-divider border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start">
              <div className="rounded-sm overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 gap-3">
                <div className="relative leading-[24px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[37px]">{`Filter `}</div>
                <img
                  className="h-5 w-5 relative"
                  alt=""
                  src="/chevrondown-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full text-mini text-blue">
          <div className="self-stretch border-light-solid-color-extra-divider border-[1px] border-solid overflow-x-auto flex flex-row items-center justify-start text-smi">
            <div className="w-40 shrink-0 flex flex-row items-center justify-start py-2 pl-5 pr-[9px] box-border gap-1">
              <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Date
              </div>
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/fichevronup.svg"
                />
                <img
                  className="w-[18px] h-[18px] relative z-[1] mt-[-4px]"
                  alt=""
                  src="/chevrondown-3.svg"
                />
              </div>
            </div>
            <div className="w-[98px] shrink-0 flex flex-row items-center justify-start py-[16.5px] px-5 box-border">
              <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                ID
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-start flex-wrap content-center py-2 px-5 gap-1">
              <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[52px]">
                To/From
              </div>
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/fichevronup.svg"
                />
                <img
                  className="w-[18px] h-[18px] relative z-[1] mt-[-4px]"
                  alt=""
                  src="/chevrondown-3.svg"
                />
              </div>
            </div>
            <div className="w-[140px] shrink-0 flex flex-row items-center justify-start py-2 pl-5 pr-[23px] box-border gap-1">
              <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Amount
              </div>
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/fichevronup.svg"
                />
                <img
                  className="w-[18px] h-[18px] relative z-[1] mt-[-4px]"
                  alt=""
                  src="/chevrondown-3.svg"
                />
              </div>
            </div>
            <div className="w-[140px] shrink-0 flex flex-row items-center justify-start py-[16.5px] pl-5 pr-[23px] box-border">
              <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Status
              </div>
            </div>
            <div className="w-[100px] shrink-0 flex flex-row items-center justify-start py-[16.5px] px-[19px] box-border">
              <div className="relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[30px]">
                CCY
              </div>
            </div>
            <div className="w-[140px] shrink-0 flex flex-row items-center justify-start py-[16.5px] px-[19px] box-border">
              <div className="relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[66px]">
                ACTIONS
              </div>
            </div>
          </div>
          <DataTableRow
            placeholder="29.01.2023"
            placeholder1="#5089"
            textPlaceholder="Martha Kerrod"
            placeholder2="+$3077"
            verified="Verified"
            uSD="USD"
          />
          <DataTableRow
            placeholder="26.01.2023"
            placeholder1="#5041"
            propMinWidth="86px"
            textPlaceholder="Philip Tuttle"
            propWidth="86px"
            placeholder2="-$2230"
            propBackgroundColor="rgba(168, 170, 174, 0.16)"
            verified="Pending"
            propColor="#a8aaae"
            propMinWidth1="51px"
            uSD="EUR"
          />
          <DataTableRow
            placeholder="25.01.2023"
            placeholder1="#5027"
            propMinWidth="119px"
            textPlaceholder="Kevin Wallbridge"
            propWidth="119px"
            placeholder2="-$2787"
            propBackgroundColor="rgba(234, 84, 85, 0.16)"
            verified="Rejected"
            propColor="#c81818"
            propMinWidth1="55px"
            uSD="EUR"
          />
          <DataTableRow
            placeholder="15.01.20223"
            placeholder1="#5024"
            propMinWidth="114px"
            textPlaceholder="Ariella Filippyev"
            propWidth="114px"
            placeholder2="-$5285"
            propBackgroundColor="rgba(168, 170, 174, 0.16)"
            verified="Pending"
            propColor="#a8aaae"
            propMinWidth1="51px"
            uSD="GPD"
          />
          <DataTableRow
            placeholder="28.12.2022"
            placeholder1="#5020	"
            propMinWidth="84px"
            textPlaceholder="Jack O'Hear"
            propWidth="84px"
            placeholder2="+$4836"
            propBackgroundColor="rgba(168, 170, 174, 0.16)"
            verified="Pending"
            propColor="#a8aaae"
            propMinWidth1="51px"
            uSD="GPD"
          />
          <DataTableRow
            placeholder="21.12.2022"
            placeholder1="#5024"
            propMinWidth="164px"
            textPlaceholder="Alexander Aloshechkin"
            propWidth="164px"
            placeholder2="+$4567"
            propBackgroundColor="rgba(40, 199, 111, 0.16)"
            verified="Verified"
            propColor="#28c76f"
            propMinWidth1="49px"
            uSD="USD"
          />
          <div className="self-stretch border-light-solid-color-extra-divider border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px] border-solid overflow-x-auto flex flex-row items-center justify-start">
            <div className="w-40 shrink-0 flex flex-row items-center justify-start py-5 pl-5 pr-0 box-border">
              <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                17.12.2022
              </div>
            </div>
            <div className="w-[100px] shrink-0 flex flex-row items-center justify-start py-5 pl-5 pr-2.5 box-border">
              <div className="flex-1 relative leading-[22px]">#5027</div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-start py-[11px] px-5">
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Raynell Clendennen
                </div>
              </div>
            </div>
            <div className="w-[140px] shrink-0 flex flex-row items-center justify-start py-5 pl-5 pr-[23px] box-border">
              <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                -$3789
              </div>
            </div>
            <div className="w-[140px] shrink-0 flex flex-row items-center justify-start py-[19px] px-5 box-border text-smi text-green">
              <div className="rounded bg-light-green flex flex-row items-center justify-start py-[5px] px-2.5">
                <div className="relative leading-[14px] font-semibold inline-block min-w-[49px]">
                  Verified
                </div>
              </div>
            </div>
            <div className="w-[100px] shrink-0 flex flex-row items-center justify-start py-4 pl-5 pr-[39px] box-border text-center text-black1">
              <div className="h-[27px] flex-1 relative leading-[22px] flex items-center justify-center">
                EUR
              </div>
            </div>
            <div className="flex flex-row items-center justify-center py-5 px-[59px]">
              <img
                className="h-[22px] w-[22px] relative object-contain"
                alt=""
                src="/dotsvertical.svg"
              />
            </div>
          </div>
          <DataTableRow
            placeholder="14.12.2022"
            placeholder1="#5041"
            propMinWidth="105px"
            textPlaceholder="Lorine Hischke"
            propWidth="105px"
            placeholder2="-$5219"
            propBackgroundColor="rgba(40, 199, 111, 0.16)"
            verified="Verified"
            propColor="#28c76f"
            propMinWidth1="49px"
            uSD="EUR"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0 px-6 box-border max-w-full [row-gap:20px] text-white mq925:flex-wrap">
          <div className="flex-1 relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[349px] max-w-full mq700:min-w-full mq925:flex-1">
            Showing 1 to 7 of 100 entries
          </div>
          <div className="flex-[0.6034] flex flex-row items-start justify-end py-0 pl-[213px] pr-0 box-border gap-1 min-w-[349px] max-w-full text-mini mq700:flex-wrap mq700:pl-[106px] mq700:box-border mq700:min-w-full mq925:flex-1 mq450:pl-5 mq450:box-border">
            <button className="cursor-pointer [border:none] py-1.5 px-2.5 bg-dimgray-200 rounded-md flex flex-row items-center justify-center hover:bg-slategray">
              <div className="relative text-mini leading-[22px] font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[60px]">
                Previous
              </div>
            </button>
            <div className="w-[34px] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] rounded-md bg-button-color flex flex-row items-center justify-center py-1.5 px-[13px] box-border">
              <div className="relative leading-[22px] inline-block min-w-[7px]">
                1
              </div>
            </div>
            <div className="w-[34px] rounded-md bg-dimgray-200 flex flex-row items-center justify-center py-1.5 px-3 box-border">
              <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[9px]">
                2
              </div>
            </div>
            <div className="rounded-md bg-dimgray-200 flex flex-row items-center justify-center py-1.5 px-3">
              <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[10px]">
                3
              </div>
            </div>
            <div className="rounded-md bg-dimgray-200 flex flex-row items-center justify-center py-1.5 px-3">
              <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[10px]">
                4
              </div>
            </div>
            <div className="rounded-md bg-dimgray-200 flex flex-row items-center justify-center py-1.5 px-3">
              <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[10px]">
                5
              </div>
            </div>
            <div className="rounded-md bg-dimgray-200 flex flex-row items-center justify-center py-1.5 px-2">
              <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[34px]">
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDefault1;
