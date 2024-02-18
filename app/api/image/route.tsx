
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(
    req: Request
){
try {
    const { userId } = auth()
    const body = await req.json()
    const { prompt, amount = 1, resolution = 1 } = body
    if(!userId) return new NextResponse( "Unauthorized", { status: 401})

    if(!openai.apiKey) return new NextResponse( "OpenAI API Key not found", { status: 400})

    if(!prompt) return new NextResponse( "prompt are required", { status: 400})

    if(!amount) return new NextResponse( "amount are required", { status: 400})

    if(!resolution) return new NextResponse( "resolution are required", { status: 400})

    const response = await  openai.images.generate({
        prompt,
        n: parseInt(amount, 10),
        size: resolution
    })

    return NextResponse.json(response.data)
    
} catch (error) {
    console.log("[IMAGE_ERROR] ", error)
    return new NextResponse( "Internal Server Error", { status: 500})
}
}