import {Meta} from "@/shared/seo";
import {GetServerSideProps} from "next";
import {PageLayout} from "@/layouts/pageLayout";
import ProjectCreateWidget from "@/widgets/projectCreateWidget";
import {useGetMe, useRedirectNotAuthToLoginPage} from "@/shared/hooks";


function CreatePage() {
    const {me, loading} = useGetMe();
    useRedirectNotAuthToLoginPage();

    if (loading || !me) return <></>;
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