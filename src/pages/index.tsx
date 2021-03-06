import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Next.js!</h1>
        <h2 className="text-primary">Luegopago</h2>
        <h3 className="text-secundary">Luegopago</h3>
        <h4 className="text-accent">Luegopago</h4>
        <h5 className="text-white">Luegopago</h5>
        <h6>Luegopago</h6>
        <p>Body 1</p>
        <a href="#">Link</a>
      </main>
    </div>
  );
};

export default Home;
