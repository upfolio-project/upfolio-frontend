import {useRouter} from "next/router";
import {Meta} from "@/shared/seo";
import {GetServerSideProps} from "next";
import {PageLayout} from "@/layouts/pageLayout";
import {useGetMeQuery} from "@/shared/api/profile/profile";
import {useCallback, useEffect} from "react";
import ProjectCreateWidget from "@/widgets/projectCreateWidget";


function CreatePage() {
    const router = useRouter();

    const {data: me, isLoading: getMeLoading, isError} = useGetMeQuery({});

    const authToLogin = useCallback(function () {
        if (isError) {
            router.push("/login");
        }
    }, [isError, router]);

    useEffect(() => {
        authToLogin();
    }, [authToLogin]);

    if (getMeLoading) return <></>;
    return (
        <PageLayout>
            <ProjectCreateWidget/>
        </PageLayout>
    );
}

interface Props {
    meta?: Meta;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    return {
        props: {
            meta: {
                title: `Создать проект — UpFolio`,
            }
        }
    };

};


export default CreatePage;