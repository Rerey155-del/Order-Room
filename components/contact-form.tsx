import React from 'react'

const ContactForm = () => {
    return (
        <div className='bg-white p-8 rounded-md shadow-sm'>
            <form action="">
                <div className='grid md:grid-cols-2 gap-7 mt-6'>
                    <div>
                        <input type="text" name="name" className='bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light' placeholder='Your Name' />
                        <div aria-live="polite" aria-atomic="true">
                            <p className="text-sm" mt-4>Message</p>
                        </div>
                    </div>
                    <div>
                        <input type="email" name="email" className='bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light' placeholder='Your Email' />
                        <div aria-live="polite" aria-atomic="true">
                            <p className="text-sm" mt-4>Message</p>
                        </div>
                    </div>
                    <div className='md:col-span-2'>
                        <input type="text" name="subject" className='bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light' placeholder='Your Subject' />
                        <div aria-live="polite" aria-atomic="true">
                            <p className="text-sm" mt-4>Message</p>
                        </div>
                    </div>
                    <div className='md:col-span-2'>
                        <textarea name="message" rows={5} className='bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light' placeholder='Your Message' />
                        <div aria-live="polite" aria-atomic="true">
                            <p className="text-sm" mt-4>Message</p>
                        </div>
                    </div>
                </div>
                <button className='px-10 py-4 text-center font-semibold text-white bg-orange-400 rounded-md hover:bg-orange-500 cursor-pointer' type='submit'>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm
