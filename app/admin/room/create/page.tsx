// app/admin/room/create/page.tsx
import { getAmenities } from "@/lib/data";
import CreateForm from "@/components/admin/room/create-form";

export default async function CreateRoomPage() {
  const amenities = await getAmenities();

  return (
    <div className="max-w-screen-xl px-4 py-16 mt-10 mx-auto">
      <h2 className="mb-6 font-bold text-xl">Create New Room</h2>
      <CreateForm amenities={amenities} />
    </div>
  );
}
