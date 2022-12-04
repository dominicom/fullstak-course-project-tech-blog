import Layout from 'layout/default';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Blog | Recent posts</title>
      </Head>
      <h1 className="text-center">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </Layout>
  );
}
