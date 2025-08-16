"use server"

import { prisma } from "@/lib/prisma"
import { ContactSchema, RoomSchema } from "@/lib/zod"
import { redirect } from "next/navigation"
import {del} from "@vercel/blob"
import { revalidatePath } from "next/cache"

export const saveRoom = async (image: string, prevState: unknown, formData: FormData) => {
    if (!image) return { message: "Image is Required" }

    const rawData = {
        name: formData.get("name"),
        description: formData.get("description"),
        capacity: formData.get("capacity"),
        price: formData.get("price"),
        amenities: formData.getAll("amenities"),
    };

    const validatedFields = RoomSchema.safeParse(rawData);
    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors
        }
    }

    const { name, description, price, amenities, capacity } = validatedFields.data;

    try {
        await prisma.room.create({
            data: {
                name,
                description,
                image,
                price,
                capacity,
                RoomAmenities: {
                    createMany: {
                        data: amenities.map((item) => ({
                            amenitiesId: item
                        }))
                    }
                }
            }
        });
    } catch (error) {
        console.error(error);
    }

    redirect("/admin/room")
}

    export const ContactMessage = async (prevState: unknown, formData: FormData) => {
        const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData))

        if (!validatedFields.success) {
            return {
                message: "Please fix the errors below",
                success: false,
                error: validatedFields.error.flatten().fieldErrors
            }
        }

        const { name, email, subject, message } = validatedFields.data

        try {
            await prisma.contact.create({
                data: { name, email, subject, message }
            })

            return {
                message: "Message sent successfully",
                success: true,
                error: {}
            }
        } catch (err) {
            console.error(err)
            return {
                message: "Something went wrong while saving your message",
                success: false,
                error: {}
            }
        }
    }

    // hapus data 
    export const deleteRoom = async(id: string ,image: string) => {
        try {
            await del(image);
            await prisma.room.delete({
                where: {
                    id
                }
            });
        } catch (error) {
            console.error(error);
        }
        revalidatePath("/admin/room");
    }
