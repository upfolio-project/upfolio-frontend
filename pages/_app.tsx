import "@/shared/styles/globals.css";
import type {AppProps} from "next/app";
import {wrapper} from "@/shared/store";
import Head from "next/head";
import {DefaultTags, Meta} from "@/shared/seo";
import React from "react";
import {StyledEngineProvider} from "@mui/styled-engine";
import {Provider} from "react-redux";

interface MyAppProps {
    meta?: Meta;
}

export default function App({Component, ...rest}: AppProps<MyAppProps>) {
    const {store, props} = wrapper.useWrappedStore(rest);
    const {pageProps} = props as {pageProps: MyAppProps};
    const meta = pageProps.meta?.tags || [];
    const title = pageProps.meta?.title || "UpFolio — платформа для создания и размещения цифрового портфолио";

    return (
        <>
            <Provider store={store}>
                <Head>
                    <meta charSet="utf-8"/>
                    {...DefaultTags}
                    {meta && meta.map(prop => <meta {...prop} key={prop.key}/>)}
                    <title key="title">{title}</title>
                </Head>
                    <StyledEngineProvider injectFirst>
                        <Component {...pageProps} />
                    </StyledEngineProvider>
            </Provider>
        </>
    );
}

