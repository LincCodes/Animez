import Head from "next/head";
import Link from "next/link";

export default function Layout(props) {
  return (
    <div className="bg-gray-900">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="anime, series, movies"/>
<meta name="description" content="Watch and download free anime without ads"/>
<meta name="summary" content="Watch free anime"/>
<meta name="Classification" content="Entertainment"/>
<meta name="author" content="Linc Codes, linccodes@gmail.com"/>

<meta name="category" content="anime"/>
<meta name="coverage" content="Worldwide"/>
<meta name="distribution" content="Global"/>
<meta name="og:title" content="Animez"/>
<meta name="og:type" content="movie"/>
<meta name="og:image" content="/logo.png"/>
<meta name="og:description" content="Watch and download free anime without ads."/>
<meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:description"
    content="Watch and download free anime without ads."
  />
  <meta name="twitter:title" content="Animez" />
  <meta
    name="twitter:image"
    content="/logo.png"
  />
  <meta name="twitter:creator" content="@LincCodes" />

        <link rel="icon" sizes="192x192" href="/animez.ico" />
        <link href="https://unpkg.com/video.js/dist/video-js.min.css" rel="stylesheet"/>
        <script src="https://unpkg.com/video.js/dist/video.min.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>
        

        <title>Animez</title>
      </Head>
      <nav className="bg-black text-white font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <Link href="/">
            <a className="text-2xl no-underline text-grey-darkest hover:text-blue-300">Animez</a>
          </Link>
        </div>
        <div>
            <Link href="/">
              <a className="text-lg no-underline text-grey-darkest hover:text-blue-300 ml-2">popular</a>
            </Link>
            <Link  href="/category">
              <a className="text-lg no-underline text-grey-darkest hover:text-blue-300 ml-2">Category</a>
            </Link>
            <Link  href="/about">
              <a className="text-lg no-underline text-grey-darkest hover:text-blue-300 ml-2">About</a>
            </Link>
            <Link href="/search">
              <a>
                <span className="ml-2 inline-block hover:text-blue-300">
                  <i class="fa fa-search fa-lg" aria-hidden="true"></i>
                </span>
              </a>
            </Link>
          </div>
      </nav>
      <div id="main">{props.children}</div>
      <footer className="p-4 flex justify-around justify-items-center text-lg bg-black text-white">
        <h3>Made with love @2021 😍</h3><a href="https://linccodes.vercel.app" className="text-blue-400 block">My Website</a>
      </footer>
    </div>
  );
}
