import { useRouter } from 'next/router';
import React from 'react'

export default function Index() {

    const router = useRouter();
    const routeFunc = (path) => {
        router.push(`/authors/${path}`);
    };

    return (
        <>
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
                <h1 style={{ color: '#0d47a1' }}>Top Authors</h1>
                <p className='h4' style={{ color: '#1565c0' }}>
                    Who do you prefer ?
                </p>
                <h2 className='p-1 bg-primary text-white text-center border rounded '
                    onClick={() => { routeFunc('ahmed'); }}
                >Ahmed Ayman</h2>
                <h2 className='p-1 bg-primary text-white text-center border rounded '
                    onClick={() => { routeFunc('mohamed'); }}
                >Mohamed Ayman</h2>
                <h2 className='p-1 bg-primary text-white text-center border rounded '
                    onClick={() => { routeFunc('abdulrahman'); }}
                >Abdulrahman Ayman</h2>
                <h2 className='p-1 bg-primary text-white text-center border rounded '
                    onClick={() => { routeFunc('hassan'); }}
                >Hassan Ayman</h2>
                <h2 className='p-1 bg-primary text-white text-center border rounded '
                    onClick={() => { routeFunc('jkrowling'); }}
                >J. K. Rowling</h2>
            </div>
        </>)

}
