import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Agar environment variable nahi hai, toh build crash na ho
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY) 
  : null;

export async function POST(req: Request) {
  try {
    if (!resend) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }
    
    // Aapka baki email logic yahan rahega...
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
