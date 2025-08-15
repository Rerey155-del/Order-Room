import CreateForm from "@/components/admin/room/create-form";
import { getAmenities } from "@/lib/data";

const CreateRoom = async () => {
  const amenities = await getAmenities();
  if(!amenities) return null;
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Create Room</h1>
      <CreateForm amenities={amenities} />
    </div>
  )
}

export default CreateRoom
