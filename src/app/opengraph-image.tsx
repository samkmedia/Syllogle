import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Syllogle – Daily Logic Puzzle';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#111111',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            width: '90px',
            height: '90px',
            background: '#ffffff',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '32px',
          }}
        >
          <span style={{ fontSize: '56px', color: '#111111', fontWeight: 'bold' }}>S</span>
        </div>

        {/* Title */}
        <div style={{ fontSize: '80px', fontWeight: 'bold', color: '#ffffff', letterSpacing: '-2px' }}>
          Syllogle
        </div>

        {/* Tagline */}
        <div style={{ fontSize: '32px', color: '#999999', marginTop: '16px' }}>
          Daily Logic Puzzle
        </div>

        {/* Puzzle preview line */}
        <div
          style={{
            marginTop: '48px',
            padding: '20px 40px',
            background: '#1f1f1f',
            borderRadius: '16px',
            fontSize: '22px',
            color: '#cccccc',
            maxWidth: '800px',
            textAlign: 'center',
          }}
        >
          Can all of these statements be true at once?
        </div>
      </div>
    ),
    { ...size }
  );
}
