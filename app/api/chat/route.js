import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { messages } = await req.json();
        const apiKey = process.env.OPENROUTER_API_KEY;

        const systemPrompt = {
            role: 'system',
            content: `You are the VIP AI Sales Assistant for 'Chronos Luxury Watches'. 
RULES:
1. Keep answers extremely short, precise, and direct (1-2 sentences).
2. When the user wants to buy or order a watch, strictly ask for these 3 details step-by-step or together:
   - Full Name
   - Phone Number
   - Delivery Address
3. Be polite and professional at all times.`
        };

        if (apiKey && !apiKey.includes('your-key')) {
            try {
                const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${apiKey.trim()}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        model: 'openai/gpt-4o-mini',
                        messages: [systemPrompt, ...messages],
                        temperature: 0.3,
                        max_tokens: 120,
                    }),
                });

                const data = await response.json();
                if (data.choices && data.choices[0] && data.choices[0].message) {
                    return NextResponse.json(data);
                }
            } catch (err) {
                // Fallback handled on frontend
            }
        }

        return NextResponse.json({
            choices: [{ message: { role: 'assistant', content: "Order place karne ke liye kripya apna Full Name, Phone Number, aur Delivery Address batayein." } }]
        });

    } catch (error) {
        return NextResponse.json({
            choices: [{ message: { role: 'assistant', content: 'Order details ke liye Name, Phone, aur Address share karein.' } }]
        });
    }
}