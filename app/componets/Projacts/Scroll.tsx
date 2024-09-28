"use client";
import React from "react";
import { ContainerScroll } from "../../../components/ui/container-scroll-animation";
import { HeroVideoDialogDemo } from "./Video"

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden px-5 py-5">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Project Selected In Google Gemini Hackthoon By Google officials <br />
              <div className="max-w-5xl px-2 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
                  <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                    Jarvis
                    <span className="relative inline-block">
                      <span className="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5" />
                      <span className="relative text-purple-700"> AI </span>
                    </span>
                  </h2>
                </div>
              </div>
            </h1>
          </>
        }
      >
        <HeroVideoDialogDemo />
      </ContainerScroll>
    </div>
  );
}
