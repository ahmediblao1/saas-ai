"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/google-gemini-effect";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased w-full dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      quote:
        "Using Glint AI has revolutionized the way we approach project development. From automating mundane coding tasks to generating captivating images for our campaigns, Glint AI has not only saved us time but has also sparked a wave of creativity within our team. It's like having an extra member who's an expert in everything.",
      name: "Jordan Rivera",
      title: "CTO, Innovatech Solutions",
    },
    {
      quote:
        "As a content creator, Glint AI has been a game-changer for me. The ability to generate unique music tracks and videos at the click of a button has allowed me to produce content at a pace I never thought possible. Glint AI doesn't just understand my needs—it anticipates them.",
      name: "Alexa Kim",
      title: "Digital Content Creator",
    },
    {
      quote:
        "Glint AI's chatbot development platform has enabled us to deploy customer service solutions that are not only efficient but surprisingly human-like. Our customer satisfaction rates have soared, and the feedback on the responsiveness and helpfulness of our chatbots has been overwhelmingly positive.",
      name: "Samuel D'souza",
      title: "Head of Customer Service, RetailGenius",
    },
    {
      quote:
        "The code generation feature of Glint AI is nothing short of miraculous for a startup like ours. It's like having an on-demand developer who works at the speed of light. This tool has significantly accelerated our development cycle, allowing us to iterate faster and bring our ideas to life with unprecedented efficiency.",
      name: "Lily Zhang",
      title: "Founder, TechStart Innovations",
    },
    {
      quote:
        "Glint AI has transformed the way we approach creative projects. The image and video generation capabilities have opened up new avenues for creativity that we hadn't imagined before. It's an indispensable tool for anyone looking to push the boundaries of what's possible in digital media.",
      name: "Ethan Moore",
      title: "Creative Director, Pixel Dreams",
    },
  ];
  