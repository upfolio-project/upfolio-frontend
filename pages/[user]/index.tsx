import {useRouter} from "next/router";
import {Meta} from "@/shared/seo";
import {GetServerSideProps} from "next";
import {GetServerSidePropsContext} from "next/types";
import {ParsedUrlQuery} from "querystring";
import {UserWidget} from "@/widgets/profileWidget";
import {PageLayout} from "@/layouts/pageLayout";
import {setupStore} from "@/shared/store";
import {Profile, useGetProfileQuery} from "@/shared/api/profile/profile";
import type {ProfileModel} from "@/shared/api/entities";
import {sizes} from "@/shared/styles";
import {PortfolioWidget} from "@/widgets/portfolioWidget";
import {Box} from "@mui/material";
import {useCallback, useEffect} from "react";
import {Error404Entity} from "@/entities/error404Entity";
import {useGetMe} from "@/shared/hooks";


function OtherPages() {
    const route = useRouter();

    // TODO hook for this
    const username = route.asPath.replace("/", "");

    const {me, loading} = useGetMe();
    const router = useRouter();

    const authToLogin = useCallback(function () {
        if (!me && !loading && username === "me") {
            router.push("/login");
        }
    }, [username, router, loading, me]);

    useEffect(() => {
        authToLogin();
    }, [authToLogin]);


    const meString = me?.username || "";
    const currentUsername = username === "me" ? meString : username;

    const {
        data: userData,
        isLoading: getProfileLoading,
        isError: getProfileError
    } = useGetProfileQuery({"username": currentUsername}, {skip: loading});

    const profile = userData?.profile;

    if (loading || (username === "me" && !me)) return <></>;
    if (getProfileError) return <PageLayout><Error404Entity/></PageLayout>;

    return (
        <PageLayout>
            <Box
                display="flex"
                gap={sizes.s}
                justifyContent="center"
            >
                <UserWidget profile={profile} isLoading={getProfileLoading}/>
                <PortfolioWidget username={profile?.username} userUuid={profile?.userUuid} isLoading={getProfileLoading}/>
            </Box>

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
    if (username === "me") {
        return {
            props:
                {
                    meta: {
                        title: `Личная страница — UpFolio`,
                    }
                }
        };
    }
    const store = setupStore();
    const {res} = context;
    let profile: undefined | ProfileModel = undefined;
    try {
        await store.dispatch(Profile.endpoints.getProfile.initiate({
            username: username
        }));
        await Promise.all(store.dispatch(Profile.util.getRunningQueriesThunk()));
        const {data} = await Profile.endpoints.getProfile.select({username: username})(store.getState());
        profile = data?.profile;
        if (!profile) {
            res.statusCode = 404;
            return {notFound: true};
        }
    } catch (e) {
        res.statusCode = 404;
        return {notFound: true};
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
                        content: profile?.bio || "",
                        key: "description"
                    },
                    {
                        property: "og:title",
                        content: "UpFolio",
                        key: "socialNetworkTitle"
                    },
                    {
                        property: "og:site_name",
                        content: `${profile?.realName?.firstName || ""} ${profile?.realName?.lastName || ""}`,
                        key: "socialNetworkSiteName"
                    },
                    {
                        property: "og:description",
                        content: profile?.bio || "",
                        key: "socialNetworkDescription"
                    },
                    {
                        property: "og:type",
                        content: "website",
                        key: "socialNetworkType"
                    },
                    {
                        property: "og:image",
                        content: profile?.profilePhotoUrl || "",
                        key: "socialNetworkImage"
                    }
                ]
            }
        }
    };

};


export default OtherPages;