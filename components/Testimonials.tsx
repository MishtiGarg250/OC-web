"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-black dark:bg-grid-white/[0.05]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            What People Say
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            Hear from the community of developers who have been part of our journey
          </p>
        </motion.div>
        
        <div className="h-[40rem] rounded-md flex flex-col items-center justify-center relative">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "The event is great for beginners and experienced students who want to get started with open source development or looking for a challenging contest in the same field.",
    name: "Vamsi Sangam",
    title: " Software Engineer at Microsoft, India",
  },
  {
    quote:
      "The sheer variety of tasks that this event provides is reason enough for any person to try it out. From competitive coders to budding data scientists, everyone can find something to their liking",
    name: " Vishal Pani",
    title: "Research Intern at INRIA",
  },
  {
    quote: " It was an amazing experience. Learning and discussing with all might. A journey beyond the ocean world of open source, where we like a small drop was ready to submerge in those thousands of lines of code yet gin our new ride all along with other drops.",
    name: " Lekhika Dugtal",
    title: " Software Developer at ABB",
  },
  {
    quote:
      " The beauty of OpenCode is that it’s equally challenging for both new developers and seasoned developers. Through OpenCode I got to work outside of my comfort zone and learn technologies I perhaps would never have touched. It was a crazy learning experience and a very good starting point for anyone trying to get into development or open source.",
    name: " Shreyas Gupta",
    title: "Upcoming Product Engineering Intern at Sprinklr",
  },
  {
    quote:
      " Opencode played a very important role in my college life, it helped me connect with my seniors, and for the first time I got my code reviewed by people better than me. It taught me concepts that I still use after 2 years! The best part of opencode: It is for everyone, no matter what you like",
    name: " Manthan Surkar",
    title: " Software Engineer Intern Razorpay ",
  },
];
