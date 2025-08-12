"use client"

import { useActionState } from 'react'
import { ContactMessage } from '@/lib/actions'
import React from 'react'

const ContactForm = () => {
    const [state, formAction] = useActionState(ContactMessage, null)
    return (
        <div className='bg-white p-8 rounded-md shadow-sm'>
            {state?.message? (
                <div className='p-4 mb-4 text-sm text-gray-800 rounded-lg bg-green-50' role='alert'>
                    <div className='font-medium'>{state.message}</div>
                </div>
            ):null}
            <form action={formAction}>
                <div className='grid md:grid-cols-2 gap-7 mt-6'>
                    <div>
                        <input type="text" name="name" className='bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light' placeholder='Your Name' />
                        <div aria-live="polite" aria-atomic="true">
                            <p className="text-sm" mt-4>{state?.error?.name}</p>
                        </div>
                    </div>
                    <div>
                        <input type="email" name="email" className='bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light' placeholder='Your Email' />
                        <div aria-live="polite" aria-atomic="true">
                            <p className="text-sm" mt-4>{state?.error?.email}</p>
                        </div>
                    </div>
                    <div className='md:col-span-2'>
                        <input type="text" name="subject" className='bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light' placeholder='Your Subject' />
                        <div aria-live="polite" aria-atomic="true">
                            <p className="text-sm" mt-4>{state?.error?.subject}</p>
                        </div>
                    </div>
                    <div className='md:col-span-2'>
                        <textarea name="message" rows={5} className='bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light' placeholder='Your Message' />
                        <div aria-live="polite" aria-atomic="true">
                            <p className="text-sm" mt-4>{state?.error?.message}</p>
                        </div>
                    </div>
                </div>
                <button className='px-10 py-4 text-center font-semibold text-white bg-orange-400 rounded-md hover:bg-orange-500 cursor-pointer' type='submit'>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm
