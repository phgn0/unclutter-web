import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { ExamplePage } from "../components/ExamplePageList";

type BrowserType = "chromium" | "firefox";
export function getBrowserType(): BrowserType {
    if (typeof window === "undefined") {
        return "chromium";
    }
    if (window.navigator.userAgent.includes("Firefox")) {
        return "firefox";
    }
    return "chromium";
}

export default function Home({ repoStars }) {
    const videoRefs = [useRef(), useRef()];
    const [showExamplePages, setShowExamplePages] = useState(false);
    const [browserType, setBrowserType] = useState<BrowserType>("chromium");

    useEffect(() => {
        setBrowserType(getBrowserType());

        setTimeout(
            () => (videoRefs[0]?.current as HTMLVideoElement)?.play(),
            1000
        );
        // setTimeout(
        //     () => (videoRefs[1]?.current as HTMLVideoElement)?.play(),
        //     6500
        // );

        setTimeout(() => setShowExamplePages(true), 4500);
        // setTimeout(() => setShowExamplePages(true), 9500);
    }, []);

    return (
        <div className="font-display text-stone-900 min-h-screen">
            <Head>
                <title>Welcome to Unclutter!</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="pt-10 pb-10 max-w-5xl mx-auto flex flex-col gap-10">
                {/* <h1 className="text-3xl">Welcome to Unclutter!</h1> */}

                <div className="grid grid-cols-2 gap-10">
                    <div className="animate-fadein">
                        <div className="text-xl">
                            Click the extension icon to unclutter articles:
                        </div>
                        <video
                            ref={videoRefs[0]}
                            className="mt-2 w-full h-72 object-cover object-left-top"
                            src={`/media/tutorial/1.mov`}
                            muted
                        />
                    </div>

                    {/* <div
                        className="animate-slidein"
                        style={{
                            animationDelay: "5s",
                            animationFillMode: "both",
                        }}
                    >
                        <div className="text-xl">
                            Press TAB to open your library
                        </div>
                        <video
                            ref={videoRefs[1]}
                            className="mt-2 pt-5 w-full h-72 object-cover object-left-top"
                            src={`/media/tutorial/2.mov`}
                            muted
                        />
                    </div> */}
                </div>

                <div className="">
                    <div
                        className="text-xl animate-slidein"
                        style={{
                            animationDelay: "4.5s",
                            // animationDelay: "9.5s",
                            animationFillMode: "both",
                        }}
                    >
                        Here are some great examples to try:
                    </div>

                    <div className="mt-5 xl:w-[1000px] flex justify-start gap-2 sm:gap-5">
                        <ExamplePage index={0} inView={showExamplePages} />
                        <ExamplePage index={1} inView={showExamplePages} />
                        <ExamplePage index={6} inView={showExamplePages} />
                        <ExamplePage index={10} inView={showExamplePages} />
                        <ExamplePage index={2} inView={showExamplePages} />
                    </div>
                </div>

                <div
                    className="text-xl flex flex-col gap-1 animate-slidein"
                    style={{
                        animationDelay: "6.5s",
                        // animationDelay: "12s",
                        animationFillMode: "both",
                    }}
                >
                    <div className="max-w-2xl">
                        <a
                            className="inline-block font-bold cursor-pointer desktop:hover:rotate-1 transition-all"
                            href="https://my.unclutter.it/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Create an account
                        </a>{" "}
                        to make use of what you read by automatically saving,
                        organizing, and connecting article quotes using AI.
                        <a
                            href="https://my.unclutter.it/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="mt-5 w-full h-72 object-cover object-left-top"
                                src={`https://my.unclutter.it/media/connect_ideas.png`}
                            />
                        </a>
                        {/* See the{" "}
                        <a
                            className="inline-block font-bold cursor-pointer desktop:hover:rotate-1 transition-all"
                            onClick={openExtensionSettings}
                        >
                            extension settings
                        </a>{" "}
                        for more. */}
                    </div>
                </div>

                {/* <div
                    className="text-xl flex flex-col gap-1 animate-slidein -mt-5"
                    style={{
                        animationDelay: "13s",
                        animationFillMode: "both",
                    }}
                >
                    <div>
                        This project is open source! Add your ideas to our{" "}
                        <a
                            href="https://unclutter.canny.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block font-bold cursor-pointer desktop:hover:-rotate-1 transition-all"
                        >
                            open roadmap
                        </a>{" "}
                        or contribute{" "}
                        <a
                            href="https://github.com/lindylearn/unclutter/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block font-bold cursor-pointer desktop:hover:rotate-1 transition-all"
                        >
                            on GitHub
                        </a>
                        .
                    </div>
                </div> */}
            </main>

            <footer></footer>
        </div>
    );
}

function openExtensionSettings() {
    // listened for in extension boot.js
    window.postMessage({ event: "openOptionsPage" }, "*");
}

// export async function getStaticProps() {
//     let repoStars = 73;
//     try {
//         // GitHub API seems to be rate-limited
//         repoStars = (
//             await axios.get("https://api.github.com/repos/lindylearn/unclutter")
//         ).data?.stargazers_count;
//     } catch {}

//     return {
//         props: { repoStars },
//     };
// }
