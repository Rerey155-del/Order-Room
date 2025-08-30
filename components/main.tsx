import React from "react";
import { getRooms } from "@/lib/data";
import Card from "./card";
import { notFound } from "next/navigation";

const Main = async () => {  
  const rooms = await getRooms();
  if (!rooms || rooms.length === 0) return notFound();

  return (
    <div className="container max-w-screen-xl py-6 pb-20 mx-auto">
      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <Card room={room} key={room.id} />   
        ))}
      </div>
    </div>
  );
};

export default Main;
