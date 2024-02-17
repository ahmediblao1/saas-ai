import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="h-10 w-10 border-t-2 relative animate-spin">
        <Image 
        alt="logo"
        fill
        src="/logo.png" 
        />
      </div>
      <p className="text-muted-foreground text-sm">
        Aurora is thinking...
      </p>
    </div>
  );
}