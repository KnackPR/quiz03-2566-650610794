import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Peerawich Rattanahiran",
    studentId: "650610794",
  });
};
