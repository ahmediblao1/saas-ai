// // "use client";
// // import React from "react";
// // import {
// //   TextRevealCard,
// //   TextRevealCardDescription,
// //   TextRevealCardTitle,
// // } from "@/components/ui/text-reveal-card";

// // const TextRevealCardPreview =() => {
// //   return (
// //     <div className="flex items-center justify-center bg-[#000000] h-[40rem] rounded-2xl w-full">
// //       <TextRevealCard
// //         text="You know the business"
// //         revealText="I know the chemistry "
// //       >
// //         <TextRevealCardTitle>
// //           Sometimes, you just need to see it.
// //         </TextRevealCardTitle>
// //         <TextRevealCardDescription>
// //           You know the business. I know the chemistry.Let&apos;s make some magic
// //           together.
// //         </TextRevealCardDescription>
// //       </TextRevealCard>
// //     </div>
// //   );
// // }

// // export default TextRevealCardPreview;

// "use client";
// import React from "react";
// import { PinContainer } from "@/components/ui/3d-pin";
// import Link from "next/link";

// const AnimatedPinDemo = () => {
//   return (
//     <div className="h-[40rem] w-full flex items-center justify-center ">
//       <PinContainer
//         title="/ahmediblao.com"
//         href="https://ahmed-iblao.com"
//       >
//         <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
//           <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
//             Aceternity UI
//           </h3>
//           <div className="text-base !m-0 !p-0 font-normal">
//             <span className="text-slate-500 ">
//               Customizable Tailwind CSS and Framer Motion Components.
//             </span>
//           </div>
//           <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
//         </div>
//       </PinContainer>
//     </div>
//   );
// }


// export default AnimatedPinDemo;

"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

const HeroParallaxDemo = () => {

  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export default HeroParallaxDemo;