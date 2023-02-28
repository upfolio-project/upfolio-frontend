import Head from "next/head";
import {ExampleWidget} from "@/widgets/exampleWidget";

interface HomeProps {
    className?: string
}

export default function Home({className}: HomeProps) {
    return (
        <>
            <Head>
                <title>UpFolio</title>
            </Head>
            <main className={className}>
                <ExampleWidget/>
            </main>
            </>
    );
}