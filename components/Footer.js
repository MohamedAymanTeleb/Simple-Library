import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='container-fluid bg-primary d-flex justify-content-around align-items-center mt-2' style={{ height: '120px' }}>
                <Link href="/" className="text-white">Home</Link>
                <Link href="/about" className="text-white">About</Link>
                <Link href="/contact" className="text-white">Contact</Link>
            </div>
        </>
    )
}
