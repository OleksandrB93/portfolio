import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info, Link } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import Image from "next/image";
import SwiperSlider from "./SwiperSlider";
import { Textarea } from "./ui/textarea";

interface ProjectModalProps {
  description: string;
  img: string;
  title: string;
  link: string;
  github: string;
  techs?: any;
}

export function ProjectModal({
  description,
  title,
  img,
  link,
  github,
  techs,
}: ProjectModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-[#bc0e68] hover:bg-[#bc0e68] hover:text-primary transition-all duration-300"
        >
          <Info />
        </Button>
      </DialogTrigger>
      <DialogContent className=" sm:max-w-[325px] p-[10px]">
        <DialogHeader>
          <a
            href={link}
            className=" text-primary hover:underline hover:text-[#bc0e68] font-bold font-mono transition-text duration-300"
          >
            <DialogTitle className="flex justify-center items-center">
              {title} <Link className="ml-2" />
            </DialogTitle>
          </a>
        </DialogHeader>
        <div>
          <div>
            <div className="">
              <Image
                className="rounded-md mx-auto border border-[#bc0e68]"
                src={img}
                alt="poster"
                width={400}
                height={400}
              />
              <SwiperSlider techs={techs} />
            </div>
            {/* <ScrollArea className=" h-[100px] p-2 rounded-md border border-[#bc0e68]">
              <DialogDescription className="">{description}</DialogDescription>
            </ScrollArea> */}
            <Textarea
              className=" h-[100px] p-2 rounded-md border border-[#bc0e68]"
              value={description}
              readOnly
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
