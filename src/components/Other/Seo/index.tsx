import Head from "next/head";
import { SeoInterface } from "@/interfaces/SeoInterface";

const Seo = ({ title, description }: SeoInterface) => {
    return (
        <Head>
            <meta name="author" content="Kushal Mandala" />
            <meta name="keywords" content="Javascript" />
            <link rel="fluid-icon" href="/favicon.webp" title="Kushal Mandala" />
            <link rel="icon" type="svg+xml" href="/favicon.webp" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
            <link rel="shortcut icon" href="/favicon.webp" type="x-icon" />
            <link rel="icon" href="/favicon32x32.webp" sizes="32x32" />
            <link rel="icon" href="/favicon48x48.webp" sizes="48x48" />
            <link rel="icon" href="/favicon96x96.webp" sizes="96x96" />
            <link rel="icon" href="/favicon144x144.webp" sizes="144x144" />
            <link rel="icon" href="/favicon512x512.webp" sizes="512x512" />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="Vagner Mengali" />
            <meta property="og:type" content="website" key="ogtype" />
            <meta property="og:url" content="https://vagnermengali.com/" />
            <meta property="og:image:alt" content={description} />
            <meta property="og:image" content="/portfolio-green.webp" />
            <meta name="twitter:title" content="Vagner Mengali" />
            <meta name="twitter:site" content="@vagnermengali" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="/portfolio-green.webp" />
            <meta name="twitter:description" content={description} />
            <meta property="al:ios:app_name" content="Vagner Mengali" />
            <meta property="al:ios:url" content="https://vagnermengali.com/" />
            <meta property="al:android:app_name" content="Vagner Mengali" />
            <meta property="al:android:url" content="https://vagnermengali.com/" />
            <link rel="canonical" href="https://vagnermengali.com/" />
            <meta name="theme-color" content="#0b0d0c" />
            <meta name="msapplication-TileColor" content="#0b0d0c" />
            <meta name="msapplication-navbutton-color" content="#0b0d0c" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#0b0d0c" />
            <link rel="manifest" href={"/manifest.webmanifest"} />
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index, follow" />
        </Head>
    );
};

export default Seo;
