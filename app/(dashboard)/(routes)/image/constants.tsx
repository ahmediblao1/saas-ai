

import * as z from "zod"

export const formSchema = z.object({
    prompt: z.string().min(1, {
    message: "Image prompt is required",
    }),
    amount: z.string().min(1),
    resolution: z.string().min(1)
  })

  export const amountOptions = [ 
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ]

  const resolutionOptions = [
    { value: "256", label: "256x256" },
    { value: "512", label: "512x512" },
    { value: "1024", label: "1024x1024" },
    { value: "2048", label: "2048x2048" },
  ]
