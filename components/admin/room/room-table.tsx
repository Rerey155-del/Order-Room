import React from 'react'
import { getRooms } from '@/lib/data';
import Image from 'next/image';
import { formatDate, formatCurrency } from '@/lib/utils';
import { DeleteButton } from './button';
import { EditButton } from './button';

const RoomTable = async () => {
    const rooms = await getRooms();
    if (!rooms?.length) return <div>No rooms found</div>;
    return (
        <div className="overflow-x-auto bg-white mt-4 rounded-md border border-gray-200 shadow-sm">
            <table className="w-full divide-y divide-gray-200 text-sm text-gray-700">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 w-32 font-semibold uppercase tracking-wide text-left">Image</th>
                        <th className="px-6 py-3 w-32 font-semibold uppercase tracking-wide text-left">Room Name</th>
                        <th className="px-6 py-3 w-32 font-semibold uppercase tracking-wide text-left">Price</th>
                        <th className="px-6 py-3 w-32 font-semibold uppercase tracking-wide text-left">Created At</th>
                        <th className="px-6 py-3 w-32 font-semibold uppercase tracking-wide text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {rooms.length > 0 ? (
                        rooms.map((room) => (
                            <tr key={room.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <Image
                                        src={room.image || "/placeholder.png"}
                                        alt={room.name}
                                        width={100}
                                        height={100}
                                        className="rounded-md border object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4 font-medium">{room.name}</td>
                                <td className="px-6 py-4">{formatCurrency(room.price)}</td>
                                <td className="px-6 py-4">{formatDate(room.createdAt.toString())}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <EditButton id={room.id} />
                                        <DeleteButton id={room.id} image={room.image} />
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5} className="text-center py-6 text-gray-500">
                                No rooms found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default RoomTable
