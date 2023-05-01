import {Meta} from "@/shared/seo";
import {GetServerSideProps} from "next";
import {GetServerSidePropsContext} from "next/types";
import {ParsedUrlQuery} from "querystring";
import {PageLayout} from "@/layouts/pageLayout";
import {setupStore} from "@/shared/store";
import {useGetProfileQuery} from "@/shared/api/profile/profile";
import {Box} from "@mui/material";
import {Error404Entity} from "@/entities/error404Entity";
import {ProjectEditWidget} from "@/widgets/projectEditWidget";
import {Projects} from "@/shared/api/projects/projects";
import {useGetMe, useGetPathRoute, useRedirectNotAuthToLoginPage} from "@/shared/hooks";


function ProjectEditPage() {
    const username = useGetPathRoute();
    const projectUuid = useGetPathRoute(2);

    const {me} = useGetMe();

    useRedirectNotAuthToLoginPage();

    const meString = me?.username || "";
    const currentUsername = username === "me" ? meString : username;

    const {
        data: userData,
        isError: getProfileError
    } = useGetProfileQuery({"username": currentUsername}, {skip: !me});

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
                title: `${project.title} — UpFolio`
            }
        }
    };

};


export default ProjectEditPage;