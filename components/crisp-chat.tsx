"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("9fcf6305-5be3-4fdf-9156-7022e6da4139")
    }, [])
    return null;

}