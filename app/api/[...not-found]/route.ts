import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "URL not found", status: 404 },
    { status: 404 }
  ).headers.set("Access-Control-Allow-Origin", "*");
}

export async function POST() {
  return NextResponse.json(
    { message: "URL not found", status: 404 },
    { status: 404 }
  ).headers.set("Access-Control-Allow-Origin", "*");
}

export async function PATCH() {
  return NextResponse.json(
    { message: "URL not found", status: 404 },
    { status: 404 }
  ).headers.set("Access-Control-Allow-Origin", "*");
}

export async function DELETE() {
  return NextResponse.json(
    { message: "URL not found", status: 404 },
    { status: 404 }
  ).headers.set("Access-Control-Allow-Origin", "*");
}
