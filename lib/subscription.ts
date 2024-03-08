import { auth } from "@clerk/nextjs";
import prismadb from "./prismadb";

const  DAY_IN_MS = 86_400_000;

export const checksubscription = async () => {
    const { userId } = auth();

    if(!userId) {
        return false;
    } 

    const userSubscription = await prismadb.userSubscription.findUnique({
        where: { userId: userId ?? "" }
    });



}
    