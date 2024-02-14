import { LucideIcon } from "lucide-react";

interface HeadingProps {
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor: string;
}

export const Heading = () => {
    return (
        <div className="mb-8 space-y-2">            
            Aurora your nest ai firend - experinece the power of ai
        </div>
    );
    }