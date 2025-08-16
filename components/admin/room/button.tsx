import { deleteRoom } from "@/lib/actions";
import { IoTrashOutline } from "react-icons/io5";

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