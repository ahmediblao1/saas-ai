"use client"

import React, { useEffect,useState } from 'react';
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Sidebar from '@/components/sidebar'


interface MobileSidebarProps {
  apiLimitCount: number,
  isPro:Boolean
}

const MobileSidebar = ({
  apiLimitCount = 0
  ,isPro = false
}: MobileSidebarProps ) => {

  const [isMounted, setIsMounted] = useState(false);
    useEffect (() => {
       setIsMounted (true);
    }, []);

    if (!isMounted) {
      return null; 
    }

    if(isPro){
return null
    }



    return (
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className='p-0' >
            <Sidebar 
            apiLimitCount={apiLimitCount}
            isPro={isPro}
            />
          </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar