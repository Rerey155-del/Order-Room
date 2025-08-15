import { prisma } from "@/lib/prisma"

export default async function Page() {
  const rooms = await prisma.room.findMany({
    include: { RoomAmenities: true }
  })

  return (
    <div className="mb-12">
      {rooms.map(room => (
        <div key={room.id}>{room.name}</div>
      ))}
    </div>
  )
}
