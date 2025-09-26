'use client';
import React from 'react';
import Link from 'next/link';
const Header: React.FC = () => {
  return (
    <header>
        <h1>Welcome to the Header Component</h1>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/home">Home Page</Link></li>
                <li><Link href="/posts">Posts</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;