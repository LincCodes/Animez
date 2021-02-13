import Head from "next/head";
import Link from "next/link";

export default function Layout(props) {
  return (
    <div className="bg-gray-900">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Created by Linc Codes" />
        <link rel="icon" sizes="192x192" href="/public/favicon.png" />
        <link rel="apple-touch-icon" href="/public/favicon.png" />
        <link rel="mask-icon" href="/public/favicon.png" color="#49B882" />
        <link rel="icon" href="/public/favicon.png" />
        <meta property="og:url" content="{props.url || defaultOGURL}" />
        <meta property="og:title" content={''} />
        <meta property="og:description" content="{props.description || defaultDescription} "/>
        <meta name="twitter:site" content="{props.url || defaultOGURL}" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="{props.ogImage || defaultOGImage}" />
        <meta property="og:image" content="{props.ogImage || defaultOGImage} "/>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link href="https://unpkg.com/video.js/dist/video-js.min.css" rel="stylesheet" />
        <script src="https://unpkg.com/video.js/dist/video.min.js"></script>
        <title>Animez</title>
      </Head>
      <nav className="p-6 flex justify-around justify-items-center text-lg font-semibold bg-black text-white">
        <Link href="/">
          <a>Popular</a>
        </Link>
        <Link href="/people">
          <a>Category</a>
        </Link>
        <Link href="/people">
          <a>About</a>
        </Link>
      </nav>
      <div id="main">{props.children}</div>
      <footer className="p-4 flex justify-around justify-items-center text-lg font-semibold bg-black text-white">
        <h3>Made with love by Linc 😍</h3><a href="https://linc-codes.web.app" className="text-blue-400 block">My Website</a>
      </footer>
    </div>
  );
}
