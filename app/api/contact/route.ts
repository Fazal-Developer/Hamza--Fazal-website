import { NextResponse } from 'next/server'
import { PERSONAL_INFO } from '@/lib/data'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please provide your name, email, and message.' },
        { status: 400 }
      )
    }

    const recipientEmail = PERSONAL_INFO.email || 'hhhdeveloper125@gmail.com'
    const mailSubject = subject
      ? `Portfolio Contact: ${subject} (from ${name})`
      : `New Portfolio Message from ${name}`

    // 1. Resend API support (if configured in environment variables)
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: recipientEmail,
            reply_to: email,
            subject: mailSubject,
            text: `New contact form submission from hamzafazal.deesu.org:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
          }),
        })

        if (resendRes.ok) {
          return NextResponse.json({ success: true, provider: 'resend' })
        }
      } catch (e) {
        console.error('Resend delivery failed, falling back to FormSubmit:', e)
      }
    }

    // 2. Web3Forms support (if configured in environment variables)
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      try {
        const web3Res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
            name,
            email,
            subject: mailSubject,
            message,
          }),
        })

        const web3Data = await web3Res.json()
        if (web3Data.success) {
          return NextResponse.json({ success: true, provider: 'web3forms' })
        }
      } catch (e) {
        console.error('Web3Forms delivery failed, falling back to FormSubmit:', e)
      }
    }

    // 3. FormSubmit forwarder (using your assigned token hash)
    const siteUrl = PERSONAL_INFO.siteUrl || 'https://hamzafazal.deesu.org'
    const formSubmitTarget = process.env.FORMSUBMIT_TOKEN || '2c7c29c1b5cf10dda1c1f9e0a984587d'
    const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${formSubmitTarget}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: siteUrl,
        Referer: `${siteUrl}/contact`,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Portfolio-Server',
      },
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
        _subject: mailSubject,
        message,
        _template: 'table',
        _captcha: 'false',
      }),
    })

    const fsData = await formSubmitRes.json().catch(() => ({}))

    if (fsData.success === 'true' || fsData.success === true) {
      return NextResponse.json({ success: true, provider: 'formsubmit' })
    }

    // FormSubmit activation email sent on first use
    if (typeof fsData.message === 'string' && fsData.message.toLowerCase().includes('activation')) {
      return NextResponse.json({
        success: true,
        activationNeeded: true,
        message: fsData.message,
      })
    }

    return NextResponse.json(
      { error: fsData.message || 'Unable to deliver message. Please use direct email.' },
      { status: 500 }
    )
  } catch (error: any) {
    console.error('Contact route error:', error)
    return NextResponse.json(
      { error: 'An unexpected server error occurred.' },
      { status: 500 }
    )
  }
}
