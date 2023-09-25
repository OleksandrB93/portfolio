"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("Initializing");

  return (
    <div
      style={{ position: "absolute", top: 0, left: 0, zIndex: 30 }}
      className="h-[500px] w-[400px] ml-[430px] rounded-r-md bg-background/70 p-4 pt-6 glass-effect "
    >
      <div className="flex flex-col justify-center font-serif text-primary">
        <TypeAnimation
          sequence={[
            1500,
            () => {
              setTypingStatus("Typing...");
            },
            `My Personal Portfolio\nWeb Developer`,
            () => {
              setTypingStatus("Done Typing");
            },
            1000,
            () => {
              setTypingStatus("Deleting...");
            },
            "",
            () => {
              setTypingStatus("Done Deleting");
            },
          ]}
          style={{
            color: "#ff5900",
            fontSize: "30px",
            height: "72px",
            fontWeight: "bold",
            whiteSpace: "pre-line",
          }}
          repeat={Infinity}
          deletionSpeed={55}
        />
        <p className="mt-2 mb-4 text-[#be805f]">{typingStatus}</p>
        <TypeAnimation
          sequence={[
            1500,
            () => {
              setTypingStatus("Typing...");
            },
            `"Hello! I'm a web developer with a passion for crafting functional and
            visually appealing websites and applications. With experience in both
            client-side and server-side development, I utilize modern technologies
            to create seamless web solutions..."`,
          ]}
          style={{
            fontSize: "20px",
            height: "225px",
            fontWeight: "400px",
            fontStyle:'italic',
            marginBottom: '16px'
          }}
          repeat={0}
          speed={70}
        />
        {/* <p className="text-xl italic mb-4 font-semibold">
          "Hello! I'm a web developer with a passion for crafting functional and
          visually appealing websites and applications. With experience in both
          client-side and server-side development, I utilize modern technologies
          to create seamless web solutions.
          My goal is to deliver web projects
          that meet your needs and leave you impressed. Explore my work in this
          portfolio, and feel free to get in touch for your next web project
          collaboration!
          "
        </p> */}

        <div className="flex justify-center items-center gap-x-12">
          <a
            href="/work"
            className="animate-bounceX bg-orange-500 text-background px-4 py-2 rounded-md"
          >
            <ArrowRight />
          </a>
          <a href="/work">
            <div
              className="scale-130 rounded-xl bg-orange-500
          relative flex justify-center items-center bg-[#000000cc] overflow-hidden
          before:content[''] before:absolute before:bottom-[-55px] before:w-[50px] before:h-[250%] before:bg-gradient before:z-70 before:animate-spinner 
          after:content[''] after:absolute after:bg-background after:inset-[2px] after:rounded-xl
          w-[80px] h-[80px]"
            >
              <svg
                className="relative z-10"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="-2 0 130 130"
                fill="#ff5900"
              >
                <path d="M104 31H24c-7.2 0-13 5.8-13 13v32 5 23c0 7.2 5.8 13 13 13h80c7.2 0 13-5.8 13-13V81v-5V44C117 36.8 111.2 31 104 31zM109.4 67C95.1 74.2 79.6 77.9 64 77.9S32.9 74.2 18.6 67c-1-.5-1.6-1.5-1.6-2.7 0-2.2 2.4-3.7 4.4-2.6 26.8 13.6 58.4 13.6 85.2 0 2-1 4.4.4 4.4 2.6C111 65.4 110.4 66.5 109.4 67zM82 27c-1.7 0-3-1.3-3-3 0-3.9-3.1-7-7-7H56c-3.9 0-7 3.1-7 7 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-7.2 5.8-13 13-13h16c7.2 0 13 5.8 13 13C85 25.7 83.7 27 82 27z"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
