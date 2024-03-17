"use client"
import axios from "axios";
import * as z from "zod"
import { Heading } from "@/components/heading";
import { Code } from "lucide-react";
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
import ReactMarkdown from "react-markdown";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";


const CodePage = () => {
const router = useRouter()
const proModal = useProModal()
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
                role: "user"| "assistant", 
                content: values.prompt,
            }

            const newMessages = [...messages, userMessages]

            const response = await axios.post("./api/code",
             { messages: newMessages }
             )

            setMessages((current) => [...current, userMessages, response.data])

            form.reset()

        } catch (error: any) {
            if(error?.response?.status === 403) {
                proModal.onOpen()
            }else {
                toast.error("An error occurred, please try again")
               }
            
        } finally {
            router.refresh()
        }
    } 
    

    return (
        <div>
            <Heading 
            title="Code generation"
            description="Generate Code using description  of what you want to achieve"
            icon={Code}
            iconColor= "text-green-700"
            bgColor= "bg-green-700/10"
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
                                     placeholder="Make an API that takes a name and an email address as inputs and sends back a success flag"
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
                             message.role === "assistant" ? "bg-muted border border-black/10 " : "bg-green-700/10")}
                             > 
                            {message.role === "assistant" ? <BotAvatar /> :  <UserAvatar />}

                                <ReactMarkdown 
                                components={{
                                    pre: ({node, ...props}) => (
                                        <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                                        <pre {...props} />
                                        </div>
                                    ), 
                                code: ({node, ...props}) => (
                                    <code className="bg-black/10 rounded-lg p-1" {...props} />
                                )
                                }}
                                className="w-full text-sm overflow-hidden leading-7"
                                >
                                    {message.content}
                                </ReactMarkdown>
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
    }
export default CodePage;