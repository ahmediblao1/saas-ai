
import { auth, currentUser } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import prismadb from "@/lib/prismadb"
import { stripe } from "@/lib/stripe"
import { absoluteUrl } from "@/lib/utils"

const settingUrl = absoluteUrl("/settings")

export async function GET(){
try {
    
} catch (error) {
    console.error(error)
}
}