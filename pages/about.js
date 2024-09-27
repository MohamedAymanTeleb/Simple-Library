import { useEffect, useState } from 'react';
import { getSession, signIn } from 'next-auth/react';

export default function About() {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const SecurePage = async () => {
            const session = await getSession()
            if (!session)
                signIn()
            else
                setLoading(false)
        }
        SecurePage()
    }, [])

    if (loading) return <div>Loading.....</div>
    else return (
        <div className="container my-3" style={{
            backgroundColor: '#e0f7fa',
            color: '#0d47a1',
            padding: '20px',
            borderRadius: '8px',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <h1 style={{ color: '#0d47a1' }}>About Us</h1>
            <p style={{ color: '#1565c0' }}>
                Welcome to our website! We are dedicated to providing you with the best service. Our mission is to deliver quality and excellence.
            </p>
        </div>
    );
}
