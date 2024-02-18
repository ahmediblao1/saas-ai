"use client"
import axios from "axios";
import * as z from "zod"
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OpenAI from "openai";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";


const ImagePage = () => {
const router = useRouter()
const [messages, setMessages] = useState<OpenAI.Chat.ChatCompletionMessage[]>([])
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
            // max_tokens: 50,
            // temperature: 0.7,
            // top_p: 1,
            // frequency_penalty: 0,
            // presence_penalty: 0,
            // stop_sequence: "",
        },
    })


    const isloading = form.formState.isSubmitting
    
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const userMessages: OpenAI.Chat.ChatCompletionMessage = {
                role: "user", 
                content: values.prompt,
            }

            const newMessages = [...messages, userMessages]

            const response = await axios.post("./api/conversation",
             { messages: newMessages }
             )

            setMessages((current) => [...current, userMessages, response.data])

            form.reset()

        } catch (error: any) {
            //TODO: OPEN PRO MODAL
            console.log(error)
        } finally {
            router.refresh()
        }
    } 
    

    return (
        <div>
            <Heading 
            title="Image Generation"
            description="Turn your text into an image."
            icon={MessageSquare}
            iconColor= "text-pink-700"
            bgColor= "bg-pink-700/10"
            />
            <div className="px-4 lg:px-8">
                <div >
                    <Form {...form}>
                        <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="
                        rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm
                        grid
                        grid-cols-12 
                        gap-2
                        "
                        >
                        <FormField
                        name="prompt"
                        render={({ field }) => (
                            <FormItem className="col-span-12 lg:col-span-10 ">
                                <FormControl className="m-0 p-0">
                                    <Input
                                    className="border-0 outline-none focus-visible:ring-0
                                     focus-visible:ring-transparent"
                                     disabled={isloading}
                                     placeholder="how i can make extra 300$ in a day"
                                     {...field}
                                     />
                                </FormControl>
                            </FormItem>
                        )}
                        />
                        <Button 
                        className="col-span-12 lg:col-span-2 w-full"
                        disabled={isloading}
                        >
                            Generate
                        </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    {isloading && (
                        <div className="p-8 rounded-lg flex items-center justify-center">
                            <Loader />
                        </div>
                    
                    )}
                    {messages.length === 0 && !isloading && (
                        <div >
                            <Empty label=" Start a conversation by typing a prompt" />
                        </div>
                    )}
                    <div className="flex flex-col gap-y-4">
                        {messages.map((message) => (
                            <div
                             key={message.content}
                             className={cn("p-8 w-full flex items-start gap-x-4 rounded-lg",
                             message.role === "user" ? "bg-muted border border-black/10 " : "bg-violet-400")}
                             > 
                            {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                                <p className="text-sm">
                                    {message.content}
                                </p>
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
    }
export default ImagePage;