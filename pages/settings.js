import React from 'react';

export default function Settings() {
    return (
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
            <h1 style={{ color: '#0d47a1' }}>Settings</h1>
            <p style={{ color: '#1565c0' }}>
                What do you want to change ?
            </p>
        </div>
    );
}
