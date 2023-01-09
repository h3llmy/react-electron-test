import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <>
      <Head>
        <title>Home - Nextron (with-typescript-tailwindcss)</title>
      </Head>
      <div>mantap</div>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <Link href='/next'>
          <a className='bg-gray-900'>Go to next page</a>
        </Link>
      </div>
    </>
  );
}

export default Home;
