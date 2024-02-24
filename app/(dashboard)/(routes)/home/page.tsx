"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

const TextRevealCardPreview =() => {
  return (
    <div className="flex items-center justify-center bg-[#000000] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          You know the business. I know the chemistry.Let&apos;s make some magic
          together.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}

export default TextRevealCardPreview;