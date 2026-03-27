import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, organization, phone, telegram, message } = body

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get bot token from environment variable
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error('Telegram credentials not configured')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Format the message
    const telegramMessage = `
📧 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${escapeHtml(name)}
🏢 <b>Organization:</b> ${escapeHtml(organization || 'Not provided')}
� <b>Phone:</b> ${escapeHtml(phone)}
💬 <b>Telegram:</b> ${escapeHtml(telegram || 'Not provided')}

💬 <b>Message:</b>
${escapeHtml(message)}
    `.trim()

    // Send to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'HTML',
        }),
      }
    )

    const telegramData = await telegramResponse.json()

    if (!telegramResponse.ok || !telegramData.ok) {
      console.error('Failed to send Telegram message:', telegramData)
      return NextResponse.json(
        { error: `Failed to send message: ${telegramData.description || 'Unknown error'}` },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m: string) => map[m])
}
