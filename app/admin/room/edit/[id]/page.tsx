import { Suspense } from "react";
import { notFound } from "next/navigation";
import EditRoom from "@/components/admin/room/edit-room";
import { getRoomsById } from "@/lib/data";

const UpdateRoomPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const room = await getRoomsById(id);

  if (!room) return notFound();

  return (
    <div className="max-w-screen-xl px-4 py-16 mt-10 mx-auto">
      <Suspense fallback={<p>Loading....</p>}>
        <EditRoom roomId={room.id} /> 
      </Suspense>
    </div>
  );
};

export default UpdateRoomPage;
