"use client"

const tools = [
  {
    title: "Conversation",
    description: "Generate text based on a given prompt",
    href: "/conversation",
    icon: "MessageSquare",
    color: "text-violet-500",
  },
  {
    title: "Image Generation",
    description: "Generate images based on a given prompt",
    href: "/image",
    icon: "ImageIcon",
    color: "text-pink-700",
  },
  {
    title: "Video Generation",
    description: "Generate videos based on a given prompt",
    href: "/video",
    icon: "VideoIcon",
    color: "text-orange-700",
  },
  {
    title: "Music Generation",
    description: "Generate music based on a given prompt",
    href: "/music",
    icon: "MusicIcon",
    color: "text-emerald-500",
  },
  {
    title: "Code Generation",
    description: "Generate code based on a given prompt",
    href: "/code",
    icon: "Code",
    color: "text-green-700",
  },
]

  
const DashboardPage = () =>  {
  return (
    <div>
      <div className="mb-8space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Explore the power of ai</h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Aurora your nest ai firend - experinece the power of ai
        </p>
      </div>
      <div className="px-4 md:px-20 lg:32 spcae-y-4">
       {tools.map((tool, index) => (
        
       ))}
      </div>
    </div>
  )
}

export default DashboardPage