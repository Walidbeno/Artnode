import Image from 'next/image'

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
      }}
    >
      <Image
        src="/assets/logo.png"
        alt="Artnode"
        width={240}
        height={240}
        priority
        style={{ width: 'auto', height: 'auto', maxWidth: 'min(60vw, 320px)' }}
      />
      <p
        style={{
          marginTop: '1.5rem',
          fontSize: '0.65rem',
          fontWeight: 400,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
        }}
      >
        Website coming soon
      </p>
    </main>
  )
}
