import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="absolute top-0 left-0  z-50 flex h-[500px] justify-center items-center  rounded-md bg-background/70">
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
      <div className="m-4 w-[368px]">
        <div className="my-7">
          <Skeleton className="h-[85px] mb-1" />
          <Skeleton className="h-5 w-[150px] mb-6" />
          <Skeleton className="h-[200px]" />
        </div>
        <div className="flex justify-center items-center gap-x-14">
          <Skeleton className="h-10 w-14 mb-10" />
          <Skeleton className="h-24 w-24 mb-10 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
