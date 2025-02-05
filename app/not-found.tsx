import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({ error: "Page not found" }, { status: 404 });
}

export function generateMetadata() {
    return { title: "404 - Not Found" };
}

export default function NotFound() {
    return JSON.stringify({ error: "Page not found", status: 404 } );
}
