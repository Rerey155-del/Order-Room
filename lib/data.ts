import {auth} from "@/auth";

import { prisma } from "@/lib/prisma"; // Adjust the path if your prisma client is elsewhere

export const getAmenities = async () => {
    const session = await auth();
    if(!session || !session.user) {
        throw new Error("Unauthorized Access");
    }
    try {
        const result = await prisma.amenities.findMany();
        return result;
    } catch (error) {
        throw new Error("Failed to fetch amenities");
    }
};
