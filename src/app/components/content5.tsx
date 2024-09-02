"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Navbar from "./navbar";
import { useRouter } from "next/navigation";
import Dropdown from "./dropdown";
import FormCheckbox from "./form-checkbox";
import Button from "./button";
import BodyAutoLayoutHorizontal from "./body-auto-layout-horizontal";

export type Content5Type = {
  className?: string;
};

const Content5: NextPage<Content5Type> = ({ className = "" }) => {
  const router = useRouter();

  const onTextClick = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  return (
    <main
      className={`flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-[calc(100%_-_285px)] mq1025:max-w-full ${className}`}
    >
      <section className="self-stretch flex flex-col items-start justify-start gap-[37px] max-w-full text-left text-base text-black font-light-basic-typography-paragraph mq750:gap-[18px]">
        <Navbar propTop="0" propPosition="sticky" status1="/status1@2x.png" />
        <div className="self-stretch flex flex-col items-start justify-start gap-px max-w-full">
          <div className="w-[263px] flex flex-row items-start justify-start py-0 px-px box-border">
            <div className="flex-1 flex flex-row items-start justify-start">
              <a
                className="[text-decoration:none] h-[39px] flex-1 relative tracking-[0.43px] leading-[22px] text-[inherit] flex items-center shrink-0 cursor-pointer"
                onClick={onTextClick}
              >
                Send Money
              </a>
              <div className="flex flex-col items-start justify-start py-0 px-0">
                <a className="ml-[-0.5px] [text-decoration:none] h-[39px] relative tracking-[0.43px] leading-[22px] font-bold text-[inherit] flex items-center shrink-0">
                  Request Money
                </a>
              </div>
            </div>
          </div>
          <form className="m-0 self-stretch shadow-[0px_5px_20px_rgba(75,_70,_92,_0.4)] rounded-md bg-white flex flex-col items-center justify-center pt-[26px] px-16 pb-6 box-border gap-2 max-w-full mq750:pt-5 mq750:pb-5 mq750:box-border mq1125:pl-8 mq1125:pr-8 mq1125:box-border">
            <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start py-0 px-1 box-border gap-2 max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-2.5 pl-0 pr-5 box-border min-w-[604px] max-w-full mq1025:min-w-full">
                <div className="w-[370px] relative text-xl leading-[36px] font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left flex items-center max-w-full mq450:text-base mq450:leading-[29px]">
                  Payment Request
                </div>
              </div>
              <div className="h-12 w-12 rounded-md" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-px box-border gap-1 max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-2 max-w-full">
                <div className="w-[370px] relative text-base leading-[36px] font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left flex items-center max-w-full">
                  To
                </div>
                <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[26px] max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[314px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-1 max-w-full">
                      <div className="flex-1 relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block max-w-full">
                        Send to
                      </div>
                      <div className="w-[98px] relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right hidden">
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
                    <div className="w-[200px] relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      Message
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[314px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-1 max-w-full">
                      <div className="flex-1 relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block max-w-full">
                        Email
                      </div>
                      <div className="w-[98px] relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right hidden">
                        Label
                      </div>
                    </div>
                    <div className="self-stretch rounded-md bg-white border-light-solid-color-extra-divider border-[1px] border-solid box-border flex flex-row items-center justify-start max-w-full">
                      <input
                        className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph text-mini [-webkit-text-fill-color:transparent] min-w-[250px] max-w-full"
                        placeholder="John.G@gmail.com"
                        type="text"
                      />
                    </div>
                    <div className="w-[200px] relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      Message
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-start flex-wrap content-end gap-[26px] max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[314px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-1 max-w-full">
                      <div className="flex-1 relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block max-w-full">{` Amount `}</div>
                      <div className="w-[98px] relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right hidden">
                        Label
                      </div>
                    </div>
                    <div className="self-stretch rounded-md bg-white border-light-solid-color-extra-divider border-[1px] border-solid box-border flex flex-row items-center justify-start max-w-full">
                      <input
                        className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph text-mini [-webkit-text-fill-color:transparent] min-w-[250px] max-w-full"
                        placeholder="4.500 "
                        type="text"
                      />
                    </div>
                    <div className="w-[200px] relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      Message
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[314px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-4 mq750:flex-wrap">
                      <Dropdown
                        showChevronDown2
                        showChevronDown={false}
                        propFlex="1"
                        propMinWidth="182px"
                        propWidth="unset"
                        propFlex1="1"
                        calendarStats="/chevrondown.svg"
                        text="Due Date"
                        propColor="#b5b5b5"
                        propDisplay="unset"
                        propMinWidth1="unset"
                        propFlex2="1"
                      />
                      <Dropdown
                        showChevronDown2
                        showChevronDown={false}
                        propFlex="unset"
                        propMinWidth="unset"
                        propWidth="187px"
                        propFlex1="1"
                        calendarStats="/chevrondown.svg"
                        text="Selcet Currency "
                        propColor="#b5b5b5"
                        propDisplay="unset"
                        propMinWidth1="unset"
                        propFlex2="1"
                      />
                    </div>
                    <div className="w-[200px] relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      Message
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[200px] relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                Message
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-1 max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[26px] max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[314px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-1 max-w-full">
                      <div className="flex-1 relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block max-w-full">
                        Destination Account
                      </div>
                      <div className="w-[98px] relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right hidden">
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
                    <div className="w-[200px] relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      Message
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[314px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-1 max-w-full">
                      <div className="flex-1 relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block max-w-full">
                        Account Holder
                      </div>
                      <div className="w-[98px] relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right hidden">
                        Label
                      </div>
                    </div>
                    <div className="self-stretch rounded-md bg-white border-light-solid-color-extra-divider border-[1px] border-solid box-border flex flex-row items-center justify-start max-w-full">
                      <input
                        className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph text-mini [-webkit-text-fill-color:transparent] min-w-[250px] max-w-full"
                        placeholder="DB Company"
                        type="text"
                      />
                    </div>
                    <div className="w-[200px] relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      Message
                    </div>
                  </div>
                </div>
                <div className="w-[200px] relative text-smi font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                  Message
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center pt-0 px-1 pb-[30px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-center justify-start py-[3px] px-0 box-border max-w-full">
                <FormCheckbox />
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-4 max-w-full mq450:flex-wrap">
              <Button
                text="Cancel"
                propBorder="1px solid #000"
                propBackgroundColor="transparent"
                propOpacity="0.6"
                propColor="#030827"
                propMinWidth="46px"
              />
              <Button
                text="Send request"
                propBorder="none"
                propBackgroundColor="#4b465c"
                propOpacity="unset"
                propColor="#fff"
                propMinWidth="89px"
              />
            </div>
            <BodyAutoLayoutHorizontal
              themeLightDivider="/themelight-divider.svg"
              themeLightDivider1="/themelight-divider-1.svg"
            />
            <div className="w-[217px] flex flex-row items-start justify-center gap-2">
              <div className="flex-1 flex flex-col items-start justify-end pt-[3px] pb-0 pl-0 pr-5">
                <div className="self-stretch h-[45px] relative text-xl leading-[36px] font-semibold font-light-basic-typography-paragraph text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right flex items-center shrink-0 mq450:text-base mq450:leading-[29px]">
                  Upload a file
                </div>
              </div>
              <div className="rounded-md bg-dimgray-100 flex flex-row items-start justify-start p-2.5">
                <img
                  className="h-7 w-7 relative"
                  loading="lazy"
                  alt=""
                  src="/upload-1.svg"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Content5;
