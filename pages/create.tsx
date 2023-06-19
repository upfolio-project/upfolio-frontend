import {Meta} from "@/shared/seo";
import {GetServerSideProps} from "next";
import ProjectCreateWidget from "@/widgets/projectCreateWidget";
import {useGetMe, useRedirectNotAuthToLoginPage} from "@/shared/hooks";
import {BaseLayout} from "@/layouts/baseLayout";


function CreatePage() {
    const {me, loading} = useGetMe();
    useRedirectNotAuthToLoginPage();

    if (loading || !me) return <></>;
    return (
        <BaseLayout>
            <ProjectCreateWidget/>
        </BaseLayout>
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