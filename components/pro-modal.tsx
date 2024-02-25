"use client"


export const ProModal = () => {
return(
    <div>
    <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black opacity-60"></div>
        <div className="relative bg-white rounded-lg w-1/2">
        <div className="flex items-center justify-between p-4 border-b">
            <h1 className="text-lg font-bold">Modal</h1>
            <button className="text-lg font-bold" onClick={() => {}}>X</button>
        </div>
        <div className="p-4">
            <p>Modal Content</p>
        </div>
        </div>
    </div>
    </div>
)
}