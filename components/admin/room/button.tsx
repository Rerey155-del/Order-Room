import { deleteRoom } from "@/lib/actions";
import { IoPencil, IoTrashOutline } from "react-icons/io5";
import Link from "next/link";

export const EditButton =({id}: {id:string}) => {
    return (
        <Link href={'/admin/room/edit/${id}'} className='rounded-sm p-1 hover:bg-gray-200'>
            <IoPencil className="size-5"/>
        </Link>
    )
}
export const DeleteButton =({id,image}: {id: string, image: string}) => {
    const DeleteRoomWithId = deleteRoom.bind(null, id, image);
    return (
        <form action={DeleteRoomWithId}>
            <button type="submit" className="text-red-600 hover:text-red-800">
                <IoTrashOutline className="w-5 h-5" />
            </button>
        </form>
    )
}