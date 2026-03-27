import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN

    if (!botToken) {
      return NextResponse.json(
        { error: 'Telegram bot token not configured' },
        { status: 500 }
      )
    }

    // Get bot updates
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/getUpdates`,
      {
        method: 'GET',
      }
    )

    const data = await response.json()

    if (!data.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch updates from Telegram' },
        { status: 500 }
      )
    }

    // Extract chat IDs from recent messages
    const chatIds: { chat_id: number; message: string; username?: string }[] = []

    if (data.result && Array.isArray(data.result)) {
      data.result.forEach((update: any) => {
        if (update.message) {
          chatIds.push({
            chat_id: update.message.chat.id,
            message: update.message.text || '[no text]',
            username: update.message.from?.username,
          })
        }
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Recent messages and chat IDs',
      chat_ids: chatIds,
      raw_updates: data.result || [],
    })
  } catch (error) {
    console.error('Get updates error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
