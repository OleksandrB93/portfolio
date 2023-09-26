"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute z-50 flex justify-center items-center h-[500px] rounded-md bg-background/90"
    >
      <div className="w-[80px]  flex flex-col justify-center items-center gap-y-10 rounded-md ">
        <Skeleton className="h-11 w-11 rounded-md" />
        <Skeleton className="h-11 w-11 rounded-md" />
        <Skeleton className="h-11 w-11 rounded-md" />
        <Skeleton className="h-11 w-11 rounded-md" />
        <Skeleton className="h-11 w-11 rounded-full" />
      </div>
      <div>
        <Skeleton className="h-[550px] w-[350px]" />
      </div>
      <div className="m-8  w-[335px] ">
        <div className="flex gap-x-4 mb-[75px]">
          <Skeleton className="h-[50px] w-[160px]" />
          <Skeleton className="h-[50px] w-[160px]" />
        </div>
        <div className="flex flex-col gap-y-12">
          <Skeleton className="h-[50px] w-[335px] " />
          <Skeleton className="h-[120px] w-[335px]  " />
          <Skeleton className="h-[40px] w-[80px] " />
        </div>
      </div>
    </motion.div>
  );
}
