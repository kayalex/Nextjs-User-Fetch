import React from 'react';
import Link from 'next/link';
export default function Layout({ children }) {
  return (
    <>
      <nav className='flex justify-around align-middle'>
        <Link className='' href={'/'}>
          Home
        </Link>
        <Link className='' href={'/about'}>
          About
        </Link>
        <Link className='' href={'/contact'}>
          Contact
        </Link>
      </nav>
      <div className=''>{children}</div>
    </>
  );
}
