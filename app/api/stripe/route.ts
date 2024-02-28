
import { auth, currentUser } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import prismadb from "@/lib/prismadb"
import { stripe } from "@/lib/stripe"
import { absoluteUrl } from "@/lib/utils"

const settinsgUrl = absoluteUrl("/settings")

export async function GET(){
try {
    const { userId } = auth()
    const user = await currentUser()

    if (!user) {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    const userSubscription = await prismadb.userSubscription.findUnique({
        where: { userId: userId ?? "" }
    })

    if(userSubscription && userSubscription.stripeCustomerId){
        const stripeSession = await stripe.billingPortal.sessions.create({
            customer: userSubscription.stripeCustomerId,
            return_url: settinsgUrl
        })
    }



} catch (error) {
    console.error("[ STRIPE_ERROR]", error)
    return new NextResponse("Internal Server Error", { status: 500 })
}
}