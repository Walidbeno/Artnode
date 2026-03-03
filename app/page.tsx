import Image from 'next/image'

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
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
    </main>
  )
}
