"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

export type TestimonialItem = {
  text: string;
  image?: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
  reverse?: boolean;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={props.className}>
      <motion.div
        animate={shouldReduceMotion ? undefined : { x: props.reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: props.duration || 24,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }
        }
        className="flex w-max gap-6 pr-6 will-change-transform"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }) => (
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                transition={{ duration: 0.5 }}
                className="group w-[320px] shrink-0 rounded-3xl border border-gray-100 bg-white/90 p-7 shadow-lg shadow-[#3730A3]/10 backdrop-blur-xl transition-all duration-500 hover:border-indigo-200 hover:shadow-2xl hover:shadow-[#3730A3]/14"
                key={`${index}-${name}`}
              >
                <div className="text-sm leading-6 text-gray-600">{text}</div>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E0E7FF] text-[#3730A3]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-heading font-bold leading-5 tracking-normal text-gray-900">{name}</div>
                    <div className="text-sm font-medium leading-5 tracking-normal text-[#3730A3]">{role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
