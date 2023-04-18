import {useRouter} from "next/router";
import {Meta} from "@/shared/seo";
import {GetServerSideProps} from "next";
import {GetServerSidePropsContext} from "next/types";
import {ParsedUrlQuery} from "querystring";
import {PageLayout} from "@/layouts/pageLayout";
import {setupStore} from "@/shared/store";
import {useGetMeQuery, useGetProfileQuery} from "@/shared/api/profile/profile";
import {Box} from "@mui/material";
import {useCallback, useEffect} from "react";
import {Error404Entity} from "@/entities/error404Entity";
import {ProjectWidget} from "@/widgets/projectWidget";
import {Projects} from "@/shared/api/projects/projects";


function ProjectPage() {
    const router = useRouter();

    // TODO hook for this
    const [username, projectUuid] = router.asPath.slice(1).split("/");

    const {data: me,
        isLoading: getMeLoading,
        isError} = useGetMeQuery({});

    const authToLogin = useCallback(function () {
        if (isError && username === "me") {
            router.push("/login");
        }
    }, [isError, username, router]);

    useEffect(() => {
        authToLogin();
    }, [authToLogin]);


    const meString = me?.username || "";
    const currentUsername = username === "me" ? meString : username;

    const {
        isError: getProfileError
    } = useGetProfileQuery({"username": currentUsername}, {skip: getMeLoading});

    if (getProfileError) return <Box position="absolute" top="200px"><Error404Entity/></Box>;

    return (
        <PageLayout>
            <ProjectWidget
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
    project?: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext<Context>) => {
    const uuid = context.params?.project || "";

    const store = setupStore();
    const {res} = context;
    let project: any = undefined;
    try {
        await store.dispatch(Projects.endpoints.getProject.initiate({
            uuid: uuid
        }));
        await Promise.all(store.dispatch(Projects.util.getRunningQueriesThunk()));
        const {data} = await Projects.endpoints.getProject.select({uuid: uuid})(store.getState());
        project = data;
        if (!project) {
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
                title: `${project.title} — UpFolio`,
                tags: [
                    {
                        name: "title",
                        content: `${project.title} — UpFolio`,
                        key: "title"
                    },
                    {
                        name: "description",
                        content: project.description || "",
                        key: "description"
                    },
                    {
                        property: "og:title",
                        content: "UpFolio",
                        key: "socialNetworkTitle"
                    },
                    {
                        property: "og:site_name",
                        content: `${project.title} — UpFolio`,
                        key: "socialNetworkSiteName"
                    },
                    {
                        property: "og:description",
                        content: project.description,
                        key: "socialNetworkDescription"
                    },
                    {
                        property: "og:type",
                        content: "website",
                        key: "socialNetworkType"
                    },
                    {
                        property: "og:image",
                        content: "",
                        key: "socialNetworkImage"
                    }
                ]
            }
        }
    };
};


export default ProjectPage;