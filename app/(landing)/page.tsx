import Link from "next/link";
import { Button } from "@/components/ui/button"

const LandingPage = () => {
  return (
    <div className="h-screen">
        <h1>Landing Page (Unprotected)</h1> 
        <div className="flex gap-3">
            <Link href="/sign-in">
            <Button>
                Login
            </Button>
            </Link>
            <Link href="/sign-up">
            <Button>
                Register
            </Button>
            </Link>
        </div>

    </div>
  );
};

export default LandingPage;