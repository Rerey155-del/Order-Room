import { object, string, coerce, array } from "zod";

export const RoomSchema = object({
  name: string().min(1, "Name is required"),
  description: string().min(50, "Description must be at least 50 characters long"),
  capacity: coerce.number().gt(0, "Capacity must be greater than 0"),
  price: coerce.number().min(0, "Price must be a positive number"),
  amenities: array(string()).nonempty("Please select at least one amenity"),
});

export const ContactSchema = object({
  name: string().min(6, "Name must be at least 6 characters long"),
  email: string()
    .min(6, "Email must be at least 6 characters long")
    .email("Please enter a valid email address"),
  subject: string().min(50, "Subject must be at least 50 characters long"),
  message: string().min(200, "Message must be at least 200 characters long"),
});
