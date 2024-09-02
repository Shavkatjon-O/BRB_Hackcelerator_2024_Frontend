"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/navigation";

export type ReviewType = {
  className?: string;
  pictureInPictureOff?: string;
  text?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];

  /** Action props */
  onListContainerClick1?: () => void;
};

const Review: NextPage<ReviewType> = ({
  className = "",
  onListContainerClick1,
  pictureInPictureOff,
  text,
  propDisplay,
  propMinWidth,
}) => {
  const text2Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const router = useRouter();

  const onReviewContainerClick = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  return (
    <div
      className={`flex-1 shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] rounded-md bg-white flex flex-col items-start justify-start min-w-[121px] cursor-pointer text-center text-lg font-light-basic-typography-paragraph ${className}`}
      onClick={onListContainerClick1}
    >
      <div className="self-stretch flex flex-col items-center justify-start p-6 gap-2">
        <div className="w-[42px] h-[42px] rounded-11xl bg-mediumseagreen flex flex-row items-start justify-start p-[9px] box-border">
          <img
            className="h-6 w-6 relative"
            loading="lazy"
            alt=""
            src={pictureInPictureOff}
          />
        </div>
        <div
          className="self-stretch relative leading-[24px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[114px]"
          style={text2Style}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default Review;
