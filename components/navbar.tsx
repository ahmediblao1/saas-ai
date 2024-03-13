
import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "./mobile-sidebar"
import { getApiLimitCount } from "@/lib/api.limit"
import { checksubscription } from "@/lib/subscription"


const Navbar = async () => {

    const apiLimitCount = await getApiLimitCount()
    const isPro = await checksubscription()

    return (
        <div className="flex items-center p-4">
            <MobileSidebar
             apiLimitCount={apiLimitCount}
             isPro={isPro}
             />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}
export default Navbar