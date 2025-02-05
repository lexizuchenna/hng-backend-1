import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json(
    { message: "URL not found", status: 404 },
    { status: 404 }
  );

  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}

export async function POST() {
  const response = NextResponse.json(
    { message: "URL not found", status: 404 },
    { status: 404 }
  );

  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}

export async function PATCH() {
  const response = NextResponse.json(
    { message: "URL not found", status: 404 },
    { status: 404 }
  );

  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}

export async function DELETE() {
  const response = NextResponse.json(
    { message: "URL not found", status: 404 },
    { status: 404 }
  );

  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}
