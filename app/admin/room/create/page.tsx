import React from 'react'
import CreateForm from '@/components/admin/room/create-form'

const CreateRoomPage = () => {
  return (
    <div className='max-w-screen-xl px-4 py-16 mt-10 mx-auto '>
     <h2 className="mb-6 font-bold text-xl">Create New Room</h2>
      <CreateForm />
    </div>
  )
}


export default CreateRoomPage
