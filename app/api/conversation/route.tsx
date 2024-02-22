
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI from "openai";

import { increaseApiLimit, checkApiLimit } from '@/lib/api.limit';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(
    req: Request
){
try {
    const { userId } = auth()
    const body = await req.json()
    const { messages } = body
    if(!userId) return new NextResponse( "Unauthorized", { status: 401})

    if(!openai.apiKey) return new NextResponse( "OpenAI API Key not found", { status: 400})

    if(!messages) return new NextResponse( "Messages are required", { status: 400})

    const freetrial = await checkApiLimit()

    if(!freetrial) return new NextResponse( "API Limit Exceeded", { status: 403})


    const response = await  openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages,
    })


    await increaseApiLimit()

    return NextResponse.json(response.choices[0].message , { status: 200})
    
} catch (error) {
    console.log("[CONVERSATION_ERROR] ", error)
    return new NextResponse( "Internal Server Error", { status: 500})
}
}