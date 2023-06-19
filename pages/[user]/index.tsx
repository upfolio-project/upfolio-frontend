import {useRouter} from "next/router";
import {Meta} from "@/shared/seo";
import {GetServerSideProps} from "next";
import {GetServerSidePropsContext} from "next/types";
import {ParsedUrlQuery} from "querystring";
import {UserWidget} from "@/widgets/profileWidget";
import {PageLayout} from "@/layouts/pageLayout";
import {setupStore} from "@/shared/store";
import type {ProfileModel} from "@/shared/api/entities";
import {PortfolioWidget} from "@/widgets/portfolioWidget";
import {useCallback, useEffect} from "react";
import {Error404Entity} from "@/entities/error404Entity";
import {useGetMe, useGetPathRoute} from "@/shared/hooks";
import {BaseLayout} from "@/layouts/baseLayout";
import {useGetByUsernameQuery, Username} from "@/shared/api/username/username";
import {OrganizationModel, UserType} from "@/shared/api/entities/profile/profile";


function OtherPages() {
    const username = useGetPathRoute();
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
    } = useGetByUsernameQuery({"username": currentUsername}, {skip: loading});

    const profile = userData && userData.userType === "SPECIALIST" ? userData.specialist : userData?.organization;

    if (getProfileError) return <PageLayout><Error404Entity/></PageLayout>;

    if (userData?.userType === "ORGANIZATION") return <></>;
    return (
        <BaseLayout>
            <UserWidget profile={profile as ProfileModel} isLoading={getProfileLoading}/>
            <PortfolioWidget
                username={userData?.username}
                userUuid={profile?.userUuid}
                isLoading={getProfileLoading}/>
        </BaseLayout>
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
    let profile: undefined | ProfileModel | OrganizationModel = undefined;
    try {
        await store.dispatch(Username.endpoints.getByUsername.initiate({
            username: username
        }));
        await Promise.all(store.dispatch(Username.util.getRunningQueriesThunk()));
        const {data} = await Username.endpoints.getByUsername.select({username: username})(store.getState());
        profile = data?.userType === UserType.SPECIALIST ? data?.specialist : data?.organization;
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
                        content: "UpFolio",
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