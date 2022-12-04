import Layout from 'layout/default';
import Head from 'next/head';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Blog | About</title>
      </Head>
      <h1 className="text-center">
        About
      </h1>
    </Layout>
  );
}