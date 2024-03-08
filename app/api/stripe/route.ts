
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
        });

return new NextResponse(JSON.stringify({ url: stripeSession.url }), {
    headers: { "Content-Type": "application/json" }
})

    }

    const stripeSession = await stripe.checkout.sessions.create({
        success_url: settinsgUrl,
        cancel_url: settinsgUrl,
        payment_method_types: ["card"],
        mode: "setup",
        billing_address_collection: "auto",
        customer_email: user.emailAddresses[0].emailAddress,
        line_items: [],
        metadata: { userId: userId }
    })

return new NextResponse(JSON.stringify({ url: stripeSession.url }), {
})
/// error
} catch (error) {
    console.error("[ STRIPE_ERROR]", error)
    return new NextResponse("Internal Server Error", { status: 500 })
}
}