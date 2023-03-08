import Error404 from "@/pages/404";
import {useRouter} from "next/router";
import {Meta} from "@/shared/seo";
import {GetServerSideProps} from "next";
import {GetServerSidePropsContext} from "next/types";
import {ParsedUrlQuery} from "querystring";

function OtherPages() {
    function getUser(username: string) {
        if (username) {
            return null;
        }
        return null;
    }

    const route = useRouter();

    // TODO hook for this
    const username = route.asPath.replace("/", "");

    const user = getUser(username);
    if (!user) {
        return (
            <Error404/>
        );
    }
    return (
        // user page here
        <></>
    );
}

interface Props {
    meta?: Meta;
}

interface Context extends ParsedUrlQuery {
    user?: string
}

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext<Context>) => {
    const username = context.params?.user || "";

    function getUserData(user: string): null | {username: string, description: string, user: string} {
       return {user: user, username: "Пупкин Иван", description: "Самое крутое описание пользователя"};
        // return null;
    }

    // this data from specific API handler that return name and description
    const userData = getUserData(username);
    if (!userData) {
        return {
            props: {
                meta: {
                    title: "Ошибка 404"
                }
            }
        };
    }
    return {
        props: {
            meta: {
                title: `${username} — UpFolio`,
                tags: [
                    {
                        name: "title",
                        content: `${username} — UpFolio`,
                        key: "title"
                    },
                    {
                        name: "description",
                        content: userData.description,
                        key: "description"
                    },
                    {
                        property: "og:title",
                        content: "UpFolio",
                        key: "socialNetworkTitle"
                    },
                    {
                        property: "og:site_name",
                        content: userData.username,
                        key: "socialNetworkSiteName"
                    },
                    {
                        property: "og:description",
                        content: userData.description,
                        key: "socialNetworkDescription"
                    },
                    {
                        property: "og:type",
                        content: "website",
                        key: "socialNetworkType"
                    },
                ]
            }
        }
    };

};


export default OtherPages;