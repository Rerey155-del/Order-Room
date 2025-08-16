import { auth } from "@/auth";

import { prisma } from "@/lib/prisma"; // Adjust the path if your prisma client is elsewhere
import { create } from "domain";

export const getAmenities = async () => {
    const session = await auth();
    if (!session || !session.user) {
        throw new Error("Unauthorized Access");
    }
    try {
        const result = await prisma.amenities.findMany();
        return result;
    } catch (error) {
        throw new Error("Failed to fetch amenities");
    }
};
export const getRooms = async () => {

    try {
        const result = await prisma.room.findMany({
            orderBy: {
                createdAt: 'desc'
            }

        });
        return result;
    } catch (error) {
        throw new Error("Failed to fetch rooms");
    }
};
export const getRoomsById = async (roomId: string) => {

    try {
        const result = await prisma.room.findUnique({
            where: { id : roomId },
            include: { RoomAmenities: { select: { amenitiesId: true } } }

        });
        return result;
    } catch (error) {
        throw new Error("Failed to fetch rooms");
    }
};
