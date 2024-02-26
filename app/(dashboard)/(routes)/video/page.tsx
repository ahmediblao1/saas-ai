"use client"
import axios from "axios";
import * as z from "zod"
import { Heading } from "@/components/heading";
import { VideoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { useProModal } from "@/hooks/use-pro-modal";



const VideoPage = () => {
const router = useRouter()
const proModal = useProModal()
const [video, setVideo] = useState<string>();
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
            setVideo(undefined);
      
            const response = await axios.post('/api/video', values);

            console.log(response)
      
            setVideo(response.data[0]);


            form.reset()

        } catch (error: any) {
            if(error?.response?.status === 403) {
                proModal.onOpen()
            }
            
        } finally {
            router.refresh()
        }
    } 
    

    return (
        <div>
            <Heading 
            title="Video Generation"
            description="turn your prompt into video ."
            icon={VideoIcon}
            iconColor= "text-orange-700"
            bgColor= "bg-ornage-700/10"
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
                                     placeholder="a man walks into a bar and orders a drink"
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
                    {!video && !isloading && (
                        <div >
                            <Empty label="No video genereted" />
                        </div>
                    )}
                    {video && (
          <video controls className="w-full aspect-video mt-8 rounded-lg border bg-black ">
            <source src={video} />
          </video>
        )}
                </div>
            </div>
        </div>
    );
    }
export default VideoPage;