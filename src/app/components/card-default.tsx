"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Table from "./table";

export type CardDefaultType = {
  className?: string;
};

const CardDefault: NextPage<CardDefaultType> = ({ className = "" }) => {
  const router = useRouter();

  const onCardDefaultContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div
      className={`flex-1 rounded-md bg-white border-light-solid-color-extra-divider border-[1px] border-solid box-border flex flex-col items-start justify-start max-w-full cursor-pointer mq700:min-w-full ${className}`}
      onClick={onCardDefaultContainerClick}
    >
      <Table />
      <div className="w-[210px] h-1" />
    </div>
  );
};

export default CardDefault;
