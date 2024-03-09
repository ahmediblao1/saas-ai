import { Heading } from "@/components/heading";
import { Settings } from "lucide-react";





const SettingsPage = () => {
    return (
        <div>
        <Heading
         title="Settings" 
         description="Manage your account settings and set preferences"
         icon={Settings}
         iconColor="text-primary"
         bgColor="bg-primary-light"

         />
        </div>
    );
    }

    export default SettingsPage;