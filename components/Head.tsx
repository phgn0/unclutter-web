import Head from "next/head";

export default function SiteHead({ title, description }) {
    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta name="twitter:title" content={title} />

            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta name="twitter:description" content={description} />

            <meta
                property="og:image"
                content="https://hn.lindylearn.io/icon.png"
            />
            <meta
                name="twitter:image"
                content="https://hn.lindylearn.io/icon.png"
            />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@lindylearn" />
        </Head>
    );
}