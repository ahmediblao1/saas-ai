"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfiniteMovingCardsDemo } from "./gaminifont";



export const LandingContent = () => {
  return (
    <div className="px-10">
      <h2 className="text-center text-4xl text-white font-extrabold pb-20">Testimonials</h2>
      <InfiniteMovingCardsDemo />
    </div>
  )
}