"use client"

import * as z from "zod"
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const ConversationPage = () => {

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
        console.log(values)
    }

    return (
        <div>
            <Heading 
            title="Conversation"
            description="Generate text based on a given prompt"
            icon={MessageSquare}
            iconColor= "text-violet-500"
            bgColor= "bg-violet-500/10"
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
                    <h3 className="text-lg font-bold">Results</h3>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p>Results will be shown here</p>
                    </div>
                </div>
            </div>
        </div>
    );
    }
export default ConversationPage;