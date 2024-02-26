"use client"

import { useProModal } from "@/hooks/use-pro-modal"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Badge } from "./ui/badge"


export const ProModal = () => {

    const proModal = useProModal()

return(
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
    <DialogContent>
        <DialogHeader>
            <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                <div className="flex items-center gap-x-2 font-bold py-1">
                Upgrade to Aurora
                <Badge variant="premium" className="u uppercase text-sm py-1">
                  Pro
                </Badge>
                </div>
            </DialogTitle>
        </DialogHeader>
    </DialogContent>
    </Dialog>
)
}

function useProModalStore(arg0: (state: any) => any) {
    throw new Error("Function not implemented.")
}
