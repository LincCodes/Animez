import Head from "next/head";
import Link from "next/link";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://unpkg.com/video.js/dist/video-js.min.css" rel="stylesheet" />
        <script src="https://unpkg.com/video.js/dist/video.min.js"></script>
        <title>Animez</title>
      </Head>
      <nav>
        <Link href="/">
          <a>Popular</a>
        </Link>
        <Link href="/people">
          <a>Category</a>
        </Link>
      </nav>
      <div id="main">{props.children}</div>
      <footer>
        <h3>Made with love by
        <a href="https://linc-codes.web.app">
          Linc
        </a></h3>
      </footer>
    </div>
  );
}
