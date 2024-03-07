
import Stripe from "stripe";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";
import { error } from "console";

export async function POST(req: NextRequest) {
    const body = await req.text()
    const siqnature = headers().get("stripe-signature") as string
    let event: Stripe.Event
    

    try {
        event = stripe.webhooks.constructEvent(body, siqnature, process.env.STRIPE_WEBHOOK_SECRET)
    }
    catch (err: any) {
        return new NextResponse(`Webhook Error, ${err.message}` ,{ status: 400 })
    }

const session = event.data.object as Stripe.Checkout.Session;

if(event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(session.subscription as string)

    if(!session?.metadata?.userId) {
        return new NextResponse("Invalid Session", { status: 400 })
    }

await prismadb.userSubscription.create({
    data: {
        userId: session.metadata.userId,
        stripeSubscriptionId: subscription.id,
        stripeCustomerId: subscription.customer as string,
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
    },
})

}

if(event.type === "invoice.payment_succeeded"){
    const subscription = await stripe.subscriptions.retrieve(session.subscription as string)

    await prismadb.userSubscription.update({
        where: {
            stripeSubscriptionId: subscription.id,
        },
        data: {
            stripePriceId: subscription.items.data[0].price.id,
            stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
        },
    })
}

}
 