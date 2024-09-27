export default function Home() {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        color: '#0d47a1',
        padding: '20px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}>Welcome to the Library</h1>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '20px',
          color: '#1565c0',
        }}>
          Here you can read and know so much books and know more about their authors
        </p>

      </div>
    </>
  );
}
