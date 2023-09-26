import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
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
      <div className="mx-12 rounded-md w-[304px]">
        <Skeleton className="h-[390px] mb-12 rounded-md" />
      </div>
    </div>
  );
};

export default Loading;
