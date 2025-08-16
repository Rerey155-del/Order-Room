import React from 'react'
import { getRooms } from '@/lib/data';
import Image from 'next/image';
import { formatDate, formatCurrency } from '@/lib/utils'; 
import { DeleteButton } from './button';

const RoomTable = async () => {
    const rooms = await getRooms();
    if (!rooms?.length) return <div>No rooms found</div>;
    return (
        <div className='overflow-x-auto bg-white mt-4 rounded-md border-gray-200'>
            <table className="w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left '>Image</th>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left '>Room name</th>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left '>Price</th>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left '>Created at</th>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase '>Action</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                    {rooms.map((room) => (
                        <tr className='hover:bg-gray-100' key={room.id}>
                            <td className='px-6 py-4'>
                                <Image src={room.image} alt={room.name} width={100} height={100} className='object-cover'/>
                            </td>
                            <td className='px-6 py-4'>{room.name}</td>
                            <td className='px-6 py-4'>{formatCurrency(room.price)}</td>
                            <td className='px-6 py-4'>{formatDate(room.createdAt.toString())}</td>
                            <td className='px-6 py-4 text-right'>
                                <DeleteButton id={room.id} image={room.image}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RoomTable
