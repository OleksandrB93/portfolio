"use client";

import AngularIcon from "@/components/icons/Angular";
import EmotionIcon from "@/components/icons/EmotionIcon";
import MongodbIcon from "@/components/icons/MongodbIcon";
import MySqlIcon from "@/components/icons/MySqlIcon";
import NestIcon from "@/components/icons/NestIcon";
import NextIcon from "@/components/icons/NextIcon";
import NodeIcon from "@/components/icons/NodeIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import RedisIcon from "@/components/icons/RedisIcon";
import ReduxIcon from "@/components/icons/ReduxIcon";
import SassIcon from "@/components/icons/SassIcon";
import TypeScriptIcon from "@/components/icons/TypeScriptIcon";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const AboutPage = () => {
  const skills = [
    {
      icon: <ReactIcon />,
      label: "React",
      color: "#0289a1",
    },
    {
      icon: <SassIcon />,
      label: "Sass",
      color: "#cc6699",
    },
    {
      icon: <NextIcon />,
      label: "Next.js",
      color: "#000000",
    },
    {
      icon: <NodeIcon />,
      label: "Node.js",
      color: "#629a1e",
    },
    {
      icon: <MongodbIcon />,
      label: "Mongodb",
      color: "#13aa52",
    },
    {
      icon: <AngularIcon />,
      label: "Angular",
      color: "#c3002f",
    },
    {
      icon: <RedisIcon />,
      label: "Redis",
      color: "#c6302b",
    },
    {
      icon: <EmotionIcon />,
      label: "Emotion",
      color: "#b3209a",
    },
    {
      icon: <NestIcon />,
      label: "NestJS",
      color: "#ff144a",
    },
    {
      icon: <MySqlIcon />,
      label: "MySql",
      color: "#609db6",
    },
    {
      icon: <ReduxIcon />,
      label: "Redux",
      color: "#6943a7",
    },
    {
      icon: <TypeScriptIcon />,
      label: "TypeScript",
      color: "#3178c6",
    },
  ];
  return (
    <div
      style={{ position: "absolute", top: 0, left: 0, zIndex: 30 }}
      className="h-[500px] w-[400px] ml-[430px] rounded-r-md bg-background/70 p-4 pt-6 pl-8"
    >
      <h1 className="text-5xl font-bold font-mono text-[#22bf78] mb-4">
        about me
      </h1>
      <div className="mb-6">
        <div className="flex gap-x-3  italic font-semibold mb-4">
          <p className="text-[#22bf78] underline">30 years</p>
          <span className="text-primary"> / </span>
          <p className="text-[#22bf78] underline">Ukraine</p>
          <span className="text-primary"> / </span>
          <p className="text-[#22bf78] underline">Chornomorsk</p>
        </div>
        <p className="text-[14px] text-primary italic font-mono ">
          I am a developer who has completed education in full-stack development
          and started my career in this field. My primary goal is to
          continuously develop my skills and knowledge to stay up-to-date with
          the latest technological and market trends.
        </p>
      </div>
      <Separator className="bg-[#22bf78]/40" />
      <div className="">
        <h2 className="text-3xl font-bold font-mono mt-6 mb-6 text-[#22bf78]">
          my skills:
        </h2>
        <motion.div className="flex flex-wrap gap-x-4 gap-y-8">
          {skills.map(({ icon, label, color }) => (
            <motion.div
              key={uuidv4()}
              whileHover={{ scale: 1.08 }}
              whileTap={{
                scale: 0.8,
                borderRadius: "100%",
              }}
              className="relative flex flex-col items-center group"
            >
              <div className="w-10 h-10">{icon}</div>
              <p
                style={{ color: `${color}` }}
                className="absolute top-[105%] left-[50%] translate-x-[-50%] bg-primary px-2 rounded-sm opacity-0 group-hover:opacity-100"
              >
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
