import {BaseLayout} from "@/layouts/baseLayout";
import {ProfileWidget} from "@/widgets/profileWidget";

export default function Me() {
    return (
        <BaseLayout>
            <ProfileWidget/>
        </BaseLayout>
    );
}

export const getServerSideProps = async () => {
    return {
        props: {
            meta: {
                title: `Личный кабинет - UpFolio`,
                tags: [
                    {
                        name: "title",
                        content: `Личный кабинет - UpFolio`,
                        key: "title"
                    },
                ]
            }
        }
    };

};