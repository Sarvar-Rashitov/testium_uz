import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      return NextResponse.json(
        { 
          error: 'Configuration missing',
          botToken: botToken ? 'configured' : 'missing',
          chatId: chatId ? 'configured' : 'missing'
        },
        { status: 500 }
      )
    }

    // Send a test message
    const testMessage = `🧪 <b>Telegram Integration Test</b>

✅ Bot token: ${botToken.substring(0, 10)}...
✅ Chat ID: ${chatId}
⏰ Time: ${new Date().toISOString()}

Agar bu xabarani ko'ryapsan, integratsiya to'g'ri ishlayapti!`

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: testMessage,
          parse_mode: 'HTML',
        }),
      }
    )

    const data = await response.json()

    return NextResponse.json({
      success: response.ok && data.ok,
      response: data,
      botToken: `${botToken.substring(0, 10)}...`,
      chatId: chatId,
      message: data.ok ? 'Test message sent successfully!' : `Error: ${data.description}`
    })
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Test failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
