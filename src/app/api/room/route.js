import { DB, readDB, writeDB } from "@/app/libs/DB";
import { checkToken } from "@/app/libs/checkToken";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export const GET = async () => {
  // let roomCount = 0;
  // readDB();
  // const foundRooms = DB.rooms.find((x) => x.roomId === roomId)
  // if (foundRooms)
  //   roomCount++;
  //อ่านไฟล์ไม่ได้เลยครับ
  return NextResponse.json({
    ok: true,
    rooms: DB.rooms,
    // totalRooms: roomCount,
  });
};

export const POST = async (request) => {
  const payload = checkToken();
  role = payload.role

  try {
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid token",
      },
      { status: 401 }
    );
  }


  const body = await request.json();
  const { roomName } = body;
  readDB();
  const foundRoom = DB.rooms.find((x) => x.roomName === roomName);
  return NextResponse.json(
    {
      ok: false,
      message: `Room ${foundRoom} already exists`,
    },
    { status: 400 }
  );

  const roomId = nanoid();

  //call writeDB after modifying Database
  writeDB();

  return NextResponse.json({
    ok: true,
    //roomId,
    message: `Room ${"replace this with room name"} has been created`,
  });
};
