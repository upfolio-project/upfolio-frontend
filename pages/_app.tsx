import "@/styles/globals.scss";
import type {AppProps} from "next/app";
import {setupStore} from "@/shared/store";
import {Provider} from "react-redux";
import Head from "next/head";
import {DefaultTags, Meta} from "@/shared/seo";
import React from "react";

interface MyAppProps {
    meta?: Meta
}

export default function App({Component, pageProps}: AppProps<MyAppProps>) {
    const store = setupStore();

    const meta  = pageProps.meta?.tags || [];
    const title = pageProps.meta?.title || "UpFolio — платформа для создания и размещения цифрового портфолио";

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                {...DefaultTags}
                {meta && meta.map(prop => <meta {...prop} key={prop.key}/>)}
                <title key="title">{title}</title>
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}
