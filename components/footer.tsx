import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <footer className="bg-gray-900">
            <div className='max-w-screen-xl mx-auto px-4 w-full py-10 md:py-16'>
                <div className="grid md:grid-cols-3 gap-7">
                    <div>
                        <Link href="/" className='mb-10 block'>
                            <Image src="/logo.png" alt="Logo" width={128} height={49} />
                        </Link>
                        <p className='text-gray-400'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quo perspiciatis rem, culpa quisquam aliquid!
                        </p>
                    </div>
                    <div>
                        <div className='flex gap-20'>
                            <div className='flex-1 md:flex-none'>
                                <h4 className='mb-8 text-xl font-semibold text-white'>Links</h4>
                                <ul className='list-items space-y-5 text-gray-400'>
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Rooms</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex-1 md:flex-none'>
                                <h4 className='mb-8 text-xl font-semibold text-white'>Legals</h4>
                                <ul className='list-items space-y-5 text-gray-400'>
                                    <li>
                                        <Link href="#">Legal</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Term & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Payment Method</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>News Letter</h4>
                        <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium non ratione odit.</p>
                        <form action="">
                            <div className='mb-5'>
                                <input type="email" placeholder='reyvars155@gmail.com' className='w-full p-3 rounded-md bg-white' />
                            </div>
                            <button className='bg-orange-400 p-3 font-bold text-white w-full text-center rounded-sm hover:bg-orange-500'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto px-4 border-t border-gray-500 py-8 text-center text-base text-gray-500'>
                &copy; Copyright 2025. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
