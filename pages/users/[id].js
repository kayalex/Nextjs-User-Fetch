import React from 'react';

export default function Dynamic({ user }) {
  return (
    <article className='m-5'>
      <h1 className='text-4xl uppercase'>{user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>
        Address: {user.address.suite}{' '}
        <span className='font-bold'>{user.address.street}</span>,{' '}
        {user.address.city}{' '}
      </p>
    </article>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  const ids = users.map((user) => user.id);

  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog user using params.id
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}
