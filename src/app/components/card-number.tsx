"use client";
import type { NextPage } from "next";
import Dropdown from "./dropdown";

export type CardNumberType = {
  className?: string;
  calendarStats?: string;
  text?: string;
  showChevronDown2?: boolean;
  showChevronDown?: boolean;
  propFlex?: string;
  propMinWidth?: string;
  propWidth?: string;
  propFlex1?: string;
  propColor?: string;
  propDisplay?: string;
  propMinWidth1?: string;
  propFlex2?: string;
};

const CardNumber: NextPage<CardNumberType> = ({
  className = "",
  calendarStats,
  text,
  showChevronDown2,
  showChevronDown,
  propFlex,
  propMinWidth,
  propWidth,
  propFlex1,
  propColor,
  propDisplay,
  propMinWidth1,
  propFlex2,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-1 max-w-full text-left text-smi font-light-basic-typography-paragraph ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-2 max-w-full">
        <div className="w-[370px] relative text-base leading-[36px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center max-w-full">
          To
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[26px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[314px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-1 max-w-full">
              <div className="flex-1 relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full">
                Payee Name
              </div>
              <div className="w-[98px] relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right hidden">
                Label
              </div>
            </div>
            <div className="self-stretch rounded-md bg-white border-light-solid-color-extra-divider border-[1px] border-solid box-border flex flex-row items-center justify-start max-w-full">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph text-mini [-webkit-text-fill-color:transparent] min-w-[250px] max-w-full"
                placeholder="John.G"
                type="text"
              />
            </div>
            <div className="w-[200px] relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
              Message
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[314px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-1 max-w-full">
              <div className="flex-1 relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full">
                Account NO
              </div>
              <div className="w-[98px] relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right hidden">
                Label
              </div>
            </div>
            <div className="self-stretch rounded-md bg-white border-light-solid-color-extra-divider border-[1px] border-solid box-border flex flex-row items-center justify-start max-w-full">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph text-mini [-webkit-text-fill-color:transparent] min-w-[250px] max-w-full"
                placeholder="457-456-6794"
                type="text"
              />
            </div>
            <div className="w-[200px] relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
              Message
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-1 max-w-full">
            <div className="self-stretch flex flex-row items-end justify-start flex-wrap content-end gap-[29px] max-w-full">
              <div className="w-[269px] flex flex-col items-start justify-start gap-1">
                <div className="self-stretch flex flex-row items-start justify-start gap-1">
                  <div className="flex-1 relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Paying Amount `}</div>
                  <div className="self-stretch w-[98px] relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right hidden items-center">
                    Label
                  </div>
                </div>
                <div className="self-stretch rounded-md bg-white border-light-solid-color-extra-divider border-[1px] border-solid flex flex-row items-center justify-start">
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph text-mini [-webkit-text-fill-color:transparent] min-w-[161px]"
                    placeholder="4.500 "
                    type="text"
                  />
                </div>
                <div className="w-[200px] relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                  Message
                </div>
              </div>
              <div className="w-[187px] flex flex-row items-start justify-start">
                <Dropdown
                  showChevronDown2={showChevronDown2}
                  showChevronDown={showChevronDown}
                  propFlex={propFlex}
                  propMinWidth={propMinWidth}
                  propWidth={propWidth}
                  propFlex1={propFlex1}
                  calendarStats={calendarStats}
                  text={text}
                  propColor={propColor}
                  propDisplay={propDisplay}
                  propMinWidth1={propMinWidth1}
                  propFlex2={propFlex2}
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[311px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-1 max-w-full">
                  <div className="flex-1 relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full">
                    Billing Email
                  </div>
                  <div className="w-[98px] relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right hidden">
                    Label
                  </div>
                </div>
                <div className="self-stretch rounded-md bg-white border-light-solid-color-extra-divider border-[1px] border-solid box-border flex flex-row items-center justify-start max-w-full">
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph text-mini [-webkit-text-fill-color:transparent] min-w-[250px] max-w-full"
                    placeholder="john.G@gmail.com"
                    type="text"
                  />
                </div>
                <div className="w-[200px] relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                  Message
                </div>
              </div>
            </div>
            <div className="w-[200px] relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
              Message
            </div>
          </div>
        </div>
      </div>
      <div className="w-[200px] relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
        Message
      </div>
    </div>
  );
};

export default CardNumber;
