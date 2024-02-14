"use client"

import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";

const ConversationPage = () => {

    const form = useForm({
        defaultValues: {
            prompt: "",
            max_tokens: 50,
            temperature: 0.7,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop_sequence: "",
        },
    })

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

            </div>
        </div>
    );
    }
export default ConversationPage;