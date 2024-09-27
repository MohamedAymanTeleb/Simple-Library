import { useRouter } from 'next/router';
import React from 'react'

export default function Hassan() {
    const router = useRouter();
    const routeFunc = () => {
        router.push(`/authors`);
    };
    return (
        <>
            <div className='p-3 d-flex justify-content-center'>
                <button
                    onClick={routeFunc}
                    className='bg-danger text-white'
                >Back</button>
            </div>
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
                <h2 className='p-1 bg-primary text-white text-center border rounded '>Hassan Ayman</h2>
            </div>
        </>)

}
