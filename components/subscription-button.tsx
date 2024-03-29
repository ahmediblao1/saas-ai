"use client"

import { Subscript, Zap } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface SubscriptionButtonProps {
    isPro: boolean;
}

export const SubscriptionButton = ({
    isPro = false,
}:SubscriptionButtonProps) => {

    const [loading, setLoading] = useState(false);

    const onClick = async () => {
    try {
        const response = await axios.get("/api/stripe");
        window.location.href = response.data.url;
        setLoading(true);
        
    } catch (error) {
        toast.error("An error occurred, please try again");
    } finally {
        setLoading(false);
    }
    };

    return (
        <Button disabled={loading} variant={isPro ? "default" : "premium"} onClick={onClick}>
            {isPro ? "Manage Subscription" : "Upgrade"}
            {!isPro && <Zap className="ml-2 w-4 h-4 fill-white" />}
        </Button>
    );
}
