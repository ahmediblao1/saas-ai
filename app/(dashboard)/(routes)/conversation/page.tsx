"use client"

import * as z from "zod"
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";


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
                        grid grid-colss-12 
                        gap-2
                        "
                        >
                        <FormField
                        name="prompt"
                        render={({ field }) => (
                            <FormItem className="col-span-12 lg:col-span-10 ">
                                <FormControl className="m-0 p-0">
                                    <label htmlFor="prompt" className="text-sm font-semibold text-muted-foreground">Prompt</label>
                                    <textarea
                                    {...field}
                                    className="w-full p-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-violet-500"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                        />

                        </form>

                    </Form>

                </div>

            </div>
        </div>
    );
    }
export default ConversationPage;