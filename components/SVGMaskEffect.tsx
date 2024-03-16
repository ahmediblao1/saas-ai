"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center overflow-hidden">
      <MaskContainer
       revealText={
        <p className="max-w-4xl mx-auto text-slate-800 text-center text-4xl font-bold">
          Discover the art of possibility with Glint AI: where every query opens a door to innovation. Lets build, create, and explore a world powered by intelligence beyond imagination.
        </p>
      }
      className="h-[40rem] border rounded-md"
      >
        <span className="text-red-500">Glint AI</span> invites you on an odyssey of discovery. Here, <span className="text-red-500">creativity meets technology</span>, transforming the way we think, work, and create. Welcome to the future of artificial intelligence.
      
      
      </MaskContainer>
    </div>
  );
}
