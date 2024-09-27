"use client";
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const NavBar = () => {
    const { data: session } = useSession();
    console.log(session);

    if (session) return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
            <div className="container-fluid bg-primary">
                <Link className="navbar-brand text-white fw-bold fs-2" href="/">Library</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav w-100 d-flex flex-row justify-content-evenly mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-white fw-bold" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-bold" href="/book">Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-bold" href="/authors">Authors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-bold" href="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-bold" href="/settings">Settings</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-bold" href="/api/auth/signout">Sign Out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
    else
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
                <div className="container-fluid bg-primary">
                    <Link className="navbar-brand text-white fw-bold fs-2" href="/">Library</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav w-100 d-flex flex-row justify-content-evenly mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white fw-bold" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bold" href="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bold" href="/api/auth/signin">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
}

export default NavBar;
