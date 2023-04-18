import {useRouter} from "next/router";
import {Meta} from "@/shared/seo";
import {GetServerSideProps} from "next";
import {GetServerSidePropsContext} from "next/types";
import {ParsedUrlQuery} from "querystring";
import {PageLayout} from "@/layouts/pageLayout";
import {setupStore} from "@/shared/store";
import {Profile, useGetMeQuery, useGetProfileQuery} from "@/shared/api/profile/profile";
import type {ProfileModel} from "@/shared/api/entities";
import {Box} from "@mui/material";
import {useCallback, useEffect} from "react";
import {Error404Entity} from "@/entities/error404Entity";
import {ProjectWidget} from "@/widgets/projectWidget";
import {ProjectEditWidget} from "@/widgets/projectEditWidget";


function ProjectEditPage() {
    const router = useRouter();

    // TODO hook for this
    const [username, projectUuid, _] = router.asPath.slice(1).split("/");

    const {data: me,
        isLoading: getMeLoading,
        isError} = useGetMeQuery({});

    const authToLogin = useCallback(function () {
        if (isError) {
            router.push("/login");
        }
    }, [isError, username, router]);

    useEffect(() => {
        authToLogin();
    }, [authToLogin]);


    const meString = me?.username || "";
    const currentUsername = username === "me" ? meString : username;

    const {
        data: userData,
        isLoading: getProfileLoading,
        isError: getProfileError
    } = useGetProfileQuery({"username": currentUsername}, {skip: getMeLoading});

    const profile = userData?.profile;

    if (getProfileError) return <Box position="absolute" top="200px"><Error404Entity/></Box>;
    if ((profile && profile.username != me?.username)) return <>Доступа нет</>;

    return (
        <PageLayout>
            <ProjectEditWidget
                uuid={projectUuid}
            />
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


export default ProjectEditPage;