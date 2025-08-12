import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='relative h-screen text-white overflow-hidden'>
            <div className='absolute inset-0'>
                <Image src="/hero.jpg" layout="fill" objectFit="cover" alt="Hero Image object-center w-full h-full" />
            </div>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='relative flex flex-col justify-center items-center h-full text-center'>
                <h1 className='text-7xl font-extrabold'>Book Your Luxury Rooms</h1>
                <p className='text-xl text-gray-300 mb-8 '>Get Official offer just for you today </p>
                <div className='flex gap-5'>
                    <Link href="room" className='bg-orange-400 text-white hover:bg-orange-500 py-2 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg'>Pesan Sekarang</Link>
                    <Link href="/contactUs" className='bg-transparent border border-orange-400 text-white hover:bg-orange-500 py-2 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg'>Kontak Kami</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
