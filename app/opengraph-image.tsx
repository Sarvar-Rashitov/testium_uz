import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            marginBottom: '20px',
            background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          } as any}
        >
          Testium
        </div>
        <div style={{ fontSize: 40, marginBottom: '30px', textAlign: 'center' }}>
          AI-Powered Mock Exam Platform
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          IELTS • TOEFL • SAT • GRE • DTM • CEFR
        </div>
      </div>
    ),
    { ...size },
  )
}
