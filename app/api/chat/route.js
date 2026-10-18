import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const userMessage = body.message || "Hello";

        // Simple automated assistant response logic for watch store
        let reply = "Welcome to ZevenWatches! How can I assist you with our luxury watch collection today?";

        if (userMessage.toLowerCase().includes("price") || userMessage.toLowerCase().includes("cost")) {
            reply = "Our watches range from PKR 32,000 to PKR 68,000 with premium materials and warranty.";
        } else if (userMessage.toLowerCase().includes("order") || userMessage.toLowerCase().includes("buy")) {
            reply = "Aap koi bhi watch select kar ke Cart se direct WhatsApp par order confirm kar sakte hain!";
        }

        return NextResponse.json({ reply });
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}