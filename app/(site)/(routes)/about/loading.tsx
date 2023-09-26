import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="absolute z-50 flex justify-center items-center h-[500px] rounded-md bg-background/90">
      <div className="w-[80px]  flex flex-col justify-center items-center gap-y-10 bg-background rounded-md ">
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
        <div className="mb-4">
          <Skeleton className="h-[50px] w-[250px] mb-3" />
          <div className="flex gap-x-4 ">
            <Skeleton className="h-5 w-[100px] " />
            <Skeleton className="h-5 w-[70px] " />
            <Skeleton className="h-5 w-[100px] " />
          </div>
        </div>
        <div className="mt-4 mb-8">
          <Skeleton className="h-[100px] mb-10" />
          <Skeleton className="h-[50px] w-[150px]" />
        </div>
        <div className="flex flex-wrap gap-y-4">
          <Skeleton className="h-[50px] w-[50px] ml-1.5" />
          <Skeleton className="h-[50px] w-[50px] ml-1.5" />
          <Skeleton className="h-[50px] w-[50px] ml-1.5" />
          <Skeleton className="h-[50px] w-[50px] ml-1.5" />
          <Skeleton className="h-[50px] w-[50px] ml-1.5" />
          <Skeleton className="h-[50px] w-[50px] ml-1.5" />

          <Skeleton className="h-[50px] w-[50px] ml-1.5" />
          <Skeleton className="h-[50px] w-[50px] ml-1.5" />
          <Skeleton className="h-[50px] w-[50px] ml-1.5" />
          <Skeleton className="h-[50px] w-[50px] ml-1.5" />
          <Skeleton className="h-[50px] w-[50px] ml-1.5" />
          <Skeleton className="h-[50px] w-[50px] ml-1.5" />
        </div>
      </div>
    </div>
  );
}
