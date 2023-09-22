import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info, Link } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface ProjectModalProps {
  description: string;
  img: string;
  title: string;
  link: string;
  github: string;
}

export function ProjectModal({
  description,
  title,
  img,
  link,
  github,
}: ProjectModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-[#bc0e68] hover:bg-[#bc0e68] hover:text-primary transition-all duration-300">
          <Info />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[500px] p-[10px]">
        <DialogHeader>
          <a
            href={link}
            className="flex text-primary hover:underline hover:text-[#bc0e68] font-bold font-mono transition-text duration-300"
          >
            <DialogTitle className="flex jc items-center">
              {title} <Link className="ml-2" />
            </DialogTitle>
          </a>
        </DialogHeader>
        <div>
          <div>
            <img
              className="rounded-md border border-[#bc0e68]"
              src={img}
              alt="poster"
            />
            <ScrollArea className=" h-[100px] p-2 mt-2 rounded-md border border-[#bc0e68]">
              <DialogDescription className="">{description}</DialogDescription>
            </ScrollArea>
          </div>
        </div>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
