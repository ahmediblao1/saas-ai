import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor?: string;
    bgColor?: string;
}

export const Heading = ({
    title,
    description,
    icon: Icon,
    iconColor ,
    bgColor ,
} : HeadingProps ) => {
    return (
        <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">    
        <div className={cn("p-2 w-fitt rounded-md", bgColor)}>
            <Icon className={cn("w-8 h-8", iconColor)} />
            </div>   
            <div>
            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
            <p className="text-sm text-muted-foreground font-light">{description}</p>
        </div>     
        </div>        
    );
    }