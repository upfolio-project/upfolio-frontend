import {useRouter} from "next/router";
import {Meta} from "@/shared/seo";
import {GetServerSideProps} from "next";
import {GetServerSidePropsContext} from "next/types";
import {ParsedUrlQuery} from "querystring";
import {UserWidget} from "@/widgets/userWidget";
import {PageLayout} from "@/layouts/pageLayout";
import {BASE_URL} from "@/shared/api";
import {ProfileModel} from "@/shared/api/entities";


function OtherPages() {
    const route = useRouter();

    // TODO hook for this
    const username = route.asPath.replace("/", "");

    return (
        <PageLayout>
            <UserWidget username={username}/>
        </PageLayout>
    );
}

interface Props {
    meta?: Meta;
}

interface Context extends ParsedUrlQuery {
    user?: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext<Context>) => {
    const username = context.params?.user || "";
    const profile: ProfileModel = await fetch(`${BASE_URL}/profile/${username}`|| "")
        .then(response => response.json().then(data => data?.profile));

    if (!profile) {
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
                        content: profile.bio,
                        key: "description"
                    },
                    {
                        property: "og:title",
                        content: "UpFolio",
                        key: "socialNetworkTitle"
                    },
                    {
                        property: "og:site_name",
                        content: `${profile.realName.firstName} ${profile.realName.lastName}`,
                        key: "socialNetworkSiteName"
                    },
                    {
                        property: "og:description",
                        content: profile.bio,
                        key: "socialNetworkDescription"
                    },
                    {
                        property: "og:type",
                        content: "website",
                        key: "socialNetworkType"
                    },
                    {
                        property: "og:image",
                        content: profile.profilePhotoUrl,
                        key: "socialNetworkImage"
                    }
                ]
            }
        }
    };

};


export default OtherPages;