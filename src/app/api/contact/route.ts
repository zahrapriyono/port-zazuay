import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validators';
import { escapeHtml } from '@/lib/utils';

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const maxRequest = parseInt(process.env.RATE_LIMIT_MAX || '5');
  const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000');
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }
  entry.count++;
  return entry.count > maxRequest;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 },
      );
    }

    const body = await request.json();
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.flatten() },
        { status: 400 },
      );
    }

    if (result.data.honeypot) {
      return NextResponse.json({ success: true });
    }

    const sanitizedData = {
      name: escapeHtml(result.data.name),
      email: escapeHtml(result.data.email),
      subject: escapeHtml(result.data.subject),
      message: escapeHtml(result.data.message),
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.CONTACT_API_KEY,
        ...sanitizedData,
      }),
    });

    if (!response.ok) throw new Error('Failed to send message');

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}
