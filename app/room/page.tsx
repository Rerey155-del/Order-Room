import React from 'react'
import { Metadata } from "next"
import { Suspense } from 'react'
import HeaderSection from '@/components/header-section'
import Main from '@/components/main'
import RoomSkeleton from '@/components/skeletons/room-skeleton'

export const metadata: Metadata = {
    title: "Room and Rates",
    description: "Choose your best room today"
}

const RoomPage = () => {
    return (
        <div>
            <HeaderSection title="Room and Rates" subTitle="Manage your room rates" />
            <div className='mt-10 px-4'>
                <Suspense fallback={<RoomSkeleton />}>
                    <Main />
                </Suspense>
            </div>
        </div>
    )
}

export default RoomPage
