import React from 'react'

export default function NotFound() {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                color: '#333',
                textAlign: 'center',
                padding: '20px'
            }}>
                <h1 className='text-primary' style={{
                    fontSize: '4rem',
                    fontWeight: 'bold',
                }}>404</h1>
                <p style={{
                    fontSize: '1.5rem',
                    margin: '10px 0',
                    color: '#555'
                }}>Nothing to show</p>

            </div>
        </>

    )
}
Error.getLayout = function pageLayout(page) {
    return <>{page}</>
}