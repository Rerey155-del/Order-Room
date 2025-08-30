import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoPeopleOutline } from 'react-icons/io5'
import { Room } from '@prisma/client'
import { formatCurrency } from '@/lib/utils'

const Card = ({room}:{room: Room}) => {
    return (
        <div className='bg-white shadow-lg rounded-sm transition duration-100 hover:shadow-sm'>
            <div className='h-[260px] w-auto rounded-t-sm relative'>
                <Image src={room.image} width={384} height={256} alt='Hero Image' className='w-full h-full rouded-t-sm object-cover' />
            </div>
            <div className='p-8'>
                <h4 className='text-2xl font-medium'>
                    <Link href={`/room/${room.id}`} className='hover:underline'>{room.name}</Link>
                </h4>
                <h4 className='text-2xl mb-7'>
                    <span className='font-semibold text-gray-600'>{formatCurrency(room.price)}/malam</span>

                </h4>
                <div className='flex items-center justify-center '>
                    <div className="flex items-center space-x-4">
                        <IoPeopleOutline />
                        <span>{room.capacity} Orang </span>
                        <Link href={`/room/${room.id}`} className='px-6 py-2.5 md:py-3 font-semibold text-white bg-orange-500 rounded-sm hover:bg-orange-500 transition duration-150'>Pesan Sekarang </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
