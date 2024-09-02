"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Card1 from "./card1";
import Review from "./review";
import Discover from "./discover";

export type OverviewType = {
  className?: string;
};

const Overview: NextPage<OverviewType> = ({ className = "" }) => {
  const router = useRouter();

  const onReviewContainerClick = useCallback(() => {
    router.push("/desktop5");
  }, [router]);

  const onReviewContainerClick1 = useCallback(() => {
    router.push("/desktop7");
  }, [router]);

  const onReviewContainerClick2 = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[30px] max-w-full text-left text-lg text-green font-light-basic-typography-paragraph ${className}`}
    >
      <Card1 />
      <div className="flex-1 flex flex-col items-end justify-start gap-[27px] min-w-[356px] max-w-full text-center mq450:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[31px] mq700:gap-[15px] mq700:flex-wrap">
          <Review
            onListContainerClick1={onReviewContainerClick}
            pictureInPictureOff="/upload-11.svg"
            text="Bulk Upload"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <Review
            onListContainerClick1={onReviewContainerClick1}
            pictureInPictureOff="/pictureinpictureon.svg"
            text="Request Money"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <Review
            onListContainerClick1={onReviewContainerClick2}
            pictureInPictureOff="/pictureinpictureoff.svg"
            text="Send Money"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full text-left">
          <Discover />
        </div>
      </div>
    </div>
  );
};

export default Overview;
