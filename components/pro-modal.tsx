"use client"

import { useProModal } from "@/hooks/use-pro-modal"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Badge } from "./ui/badge"
import { ArrowBigRight, Check, Code, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, VideoIcon, Zap } from "lucide-react"
import { Card } from "./ui/card";
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"


const tools = [
    {
      label: "Conversation",
      description: "Generate text based on a given prompt",
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
      icon: VideoIcon,
      color: "text-orange-700",
      bgcolor: "bg-orange-700/10",
    },
    {
      label: "Music Generation",
      description: "Generate music based on a given prompt",
      icon: MusicIcon,
      color: "text-emerald-500",
      bgcolor: "bg-emerald-500/10",
    },
    {
      label: "Code Generation",
      description: "Generate code based on a given prompt",
      icon: Code,
      color: "text-green-700",
      bgcolor: "bg-green-700/10",
    },
  ]


export const ProModal = () => {

    const proModal = useProModal()
    const [loading, setLoading] = useState(false)

    const onSubscribe =  async () => {
        try {
          setLoading(true)
          const response = await axios.get("/api/stripe")
          window.location.href = response.data.url
        } catch (error) {
          toast.error("An error occurred. Please try again.")
        } finally {
          setLoading(false)
        }
    }

return(
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
    <DialogContent>
        <DialogHeader>
            <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                <div className="flex items-center gap-x-2 font-bold py-1">
                Upgrade to Aurora
                <Badge variant="premium" className="u uppercase text-sm py-1">
                  Pro
                </Badge>
                </div>
            </DialogTitle>
            <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">

                {tools.map((tool) => (
                    <Card
                        key={tool.label}
                        className="p-4 border-black/5 flex items-center justify-between cursor-pointer" 
                    >
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fill rounded-md", tool.bgcolor)}>
                                <tool.icon className={cn("w-6 h-6", tool.color)} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{tool.label}</h3>
                                {/* <p className="text-muted-foreground">{tool.description}</p> */}
                            </div>
                        </div>
                        <Check className="text-primary w-5 h-5" />
                    </Card>
                ))}
            </DialogDescription>
        </DialogHeader>
        <DialogFooter>
                <Button
                disabled={loading}
                onClick={onSubscribe}
                 variant="premium"
                 size="lg"
                 className="w-full"
                 >
                    Upgrade
                    <Zap className="w-4 h-4 ml-2 fill-white" />
                </Button>
        </DialogFooter>
    </DialogContent>
    </Dialog>
)
}

function useProModalStore(arg0: (state: any) => any) {
    throw new Error("Function not implemented.")
}
