"use server"

import { prisma } from "@/lib/prisma"
import { ContactSchema } from "@/lib/zod"

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
