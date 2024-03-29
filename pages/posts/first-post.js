import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </Head>
      <h1 className="title">
        Hi
      </h1>
      <h2>
        <Link href="/">
          <button>
            Back
          </button>
        </Link>
      </h2>
      <Link href="/">
        <a>
          Back to my home
        </a>
      </Link>
    </Layout>
  );
}
