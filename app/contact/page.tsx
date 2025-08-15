import React from 'react'
import { Metadata } from 'next'
import HeaderSection from '@/components/header-section'
import { IoMailOutline, IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import ContactForm from '@/components/contact-form'

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with us for any inquiries or support.',
}

const ContactPage = () => {
    return (
        <div>
            <HeaderSection title='Contact Us' subTitle='Get in touch with us for any inquiries or support.' />

            {/* Container dengan max width, padding, dan flex tengah */}
            <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-10 justify-center items-center">

                {/* Kolom kiri */}
                <div className="md:w-1/2">
                    <h1 className='text-lg text-gray-500 mb-3'>Contact Us</h1>
                    <h1 className='text-5xl font-semibold text-gray-900 mb-4'>Get in touch with us</h1>
                    <p className='text-gray-700 py-5'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, magni impedit, dolor explicabo fuga maxime magnam a ex quis ullam quas dolorum itaque eius id provident! Ex delectus aspernatur maiores?
                    </p>
                    <ul className='space-y-6'>
                        <li className='flex gap-5'>
                            <div className='flex-none bg-gray-300 p-3 shadow-sm rounded-sm'>
                                <IoMailOutline className='text-3xl' />
                            </div>
                            <div className='flex-1'>
                                <h4 className='text-lg font-semibold text-gray-900'>Email Us</h4>
                                <p className='text-gray-700'>info@example.com</p>
                            </div>
                        </li>
                        <li className='flex gap-5'>
                            <div className='flex-none bg-gray-300 p-3 shadow-sm rounded-sm'>
                                <IoCallOutline className='text-3xl' />
                            </div>
                            <div className='flex-1'>
                                <h4 className='text-lg font-semibold text-gray-900'>Phone Number :</h4>
                                <p className='text-gray-700'>085161358674</p>
                            </div>
                        </li>
                        <li className='flex gap-5'>
                            <div className='flex-none bg-gray-300 p-3 shadow-sm rounded-sm'>
                                <IoLocationOutline className='text-3xl' />
                            </div>
                            <div className='flex-1'>
                                <h4 className='text-lg font-semibold text-gray-900'>Address :</h4>
                                <p className='text-gray-700'>Lubuk Begalung, Lubuk Begalung Nan XX, Padang</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Kolom kanan */}
                <div className="md:w-1/2">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default ContactPage
