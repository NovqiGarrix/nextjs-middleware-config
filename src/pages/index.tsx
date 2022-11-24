import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="mx-auto my-auto flex items-center justify-center h-screen flex-col space-y-5">
      <Head>
        <title>NextJS Middleware Configurations</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="font-poppins text-7xl text-green-500 font-semibold">
        Hello World!
      </h1>
      <p>
        Edit{" "}
        <code className="rounded-full py-1 px-2 bg-gray-200">
          pages/index.tsx
        </code>{" "}
        to start developing.
      </p>
    </div>
  );
};

export default Home;