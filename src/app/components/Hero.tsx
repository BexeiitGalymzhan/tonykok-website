"use client";

import { motion } from "framer-motion";

import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";

function Hero() {
  return (
    <div className="pb-25 pt-45">
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-68 -right-0 rotate-110 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div>
        <div className=" flex h-screen w-full items-center justify-center bg-white dark:bg-black absolute top-0 left-0">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:50px_50px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,rgba(0,191,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,191,255,0.15)_1px,transparent_1px)] dark:[background-color:#0A1A2F] [background-size:40px_40px] text-white p-10 text-center"
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        </div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="relative max-w-[89vw] -top-10 md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-md text-center text-blue-100 max-w-80"
          >
            LLP &ldquo;Tonykok&ldquo;
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[40px] text-center font-bold md:text-5xl lg:text-6xl my-4"
          >
            Concrete Solutions for Modern Construction
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl mb-4"
          >
            We provide reliable building construction, facade solutions, and
            paving stone works with quality that endures.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
