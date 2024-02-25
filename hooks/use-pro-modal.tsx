import { create } from "zustand"

interface useProModalStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
    }