"use client"
import { cn } from '@/lib/utils'
import { LayoutDashboard } from 'lucide-react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const montserrat = Montserrat(
    { weight: '600',
    subsets: ['latin']})

const routes = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
        color: "text-sky-500"
    },
    
]
    


const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
           <div className="px-3 py-2 flex-1">
            <Link href="/dashboard" className='flex items-center pl-3 mb-14'>
                <div className='relative w-8 h-8 mr-4'>
               <Image src="/logo.png" fill objectFit="contain" alt="logo" />
                </div>
                <h1 className={cn("text-2xl font-bold", montserrat.className)}>Aurora</h1>
            </Link>
            <div className='space-y-1'>
            {routes.map((route, index) => (
                <Link href={route.href} key={index}>
                    <div className='flex items-center flex-1'>
                    {<route.icon className={cn("h-5 w-5 mr-3", route.color)} />}
                    </div>
                </Link>
            ))}
            </div>
           </div>
        </div>
    )
}

export default Sidebar