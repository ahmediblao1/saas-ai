"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowBigRight, Code, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, VideoIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"

const tools = [
  {
    label: "Conversation",
    description: "Generate text based on a given prompt",
    href: "/conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgcolor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    description: "Generate images based on a given prompt",
    href: "/image",
    icon: ImageIcon,
    color: "text-pink-700",
    bgcolor: "text-pink-700/10",
  },
  {
    label: "Video Generation",
    description: "Generate videos based on a given prompt",
    href: "/video",
    icon: VideoIcon,
    color: "text-orange-700",
    bgcolor: "bg-orange-700/10",
  },
  {
    label: "Music Generation",
    description: "Generate music based on a given prompt",
    href: "/music",
    icon: MusicIcon,
    color: "text-emerald-500",
    bgcolor: "bg-emerald-500/10",
  },
  {
    label: "Code Generation",
    description: "Generate code based on a given prompt",
    href: "/code",
    icon: Code,
    color: "text-green-700",
    bgcolor: "bg-green-700/10",
  },
]

const DashboardPage = () =>  {
const router = useRouter()

  return (
    <div>
      <div className="mb-8 space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Explore the power of ai</h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Aurora your nest ai firend - experinece the power of ai
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4 ">
       {tools.map((tool) => (
        <Card
         onClick={() => router.push(tool.href)}
         key={tool.href}
         className="p-4 border-black/5 flex items-center *:
         justify-between gap-2 hover:shadow-md transition cursor-pointer"
         >
          <div className="flex items-center gap-x-4 ">
            <div className={cn("p-2 w-fit rounded-md", tool.bgcolor)}>
              <tool.icon className={cn("w-8 h-8", tool.color)} />
            </div>
            <div className="font-s font-semibold">
              {tool.label}
              <p className="text-muted-foreground">{tool.description}</p>
              </div>
          </div>
          <ArrowBigRight />
        </Card>
       ))}
      </div>
    </div>
  )
}

export default DashboardPage