import { Heading } from "@/components/heading";
import { checksubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";





const SettingsPage = async () => {

const isPro = await checksubscription();

    return (
        <div>
        <Heading
         title="Settings" 
         description="Manage your account settings and set preferences"
         icon={Settings}
         iconColor="text-primary"
         bgColor="bg-primary-light"
         />
         <div className="px-4 lg:px-8 space-y-8">
            <div className="text-muted-foreground text-sm">
                {isPro ? "You are on the Pro user" : "You are a on the Free Plan"}
            </div>
         </div>
        </div>
    );
    }

    export default SettingsPage;