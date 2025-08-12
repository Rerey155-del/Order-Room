import {object, string} from "zod"

export const ContactSchema = object({
    name: string().min(6,"Name must be at least 6 characters long"),
    email: string()
    .min(6,"Email must be at least 6 characters long")
    .email("Please enter a valid email address"),
    subject: string().min(50,"Subject must be at least 50 characters long"),
    message: string().min(200,"Message must be at least 200 characters long"),
})