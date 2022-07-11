import Head from 'next/head';
import Link from 'next/link';

export default function Home({ users }) {
  return (
    <div className='container'>
      <Head>
        <title>Next Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='text-center text-red-400 font-mono font-extrabold text-6xl'>
        Welcome !!!
      </h1>
      <div>
        {users.map((user) => {
          return (
            <Link key={user.id} href={`/users/${user.id}`}>
              <h1 className='cursor-pointer text-2xl m-3 text-blue-700'>
                {user.name}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
