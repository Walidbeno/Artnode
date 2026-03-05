import Logo from '@/components/Logo'

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
      <Logo size={140} />
      <p
        style={{
          marginTop: '1.5rem',
          fontSize: '0.75rem',
          fontWeight: 400,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.75)',
        }}
      >
       
      </p>
    </main>
  )
}
