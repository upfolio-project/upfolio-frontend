import {InProgressWidget} from "@/widgets/inProgressWidget";
import {BaseLayout} from "@/layouts/baseLayout";

function Companies() {
    return (
        <BaseLayout>
            <InProgressWidget/>
        </BaseLayout>
    );
}

export const getServerSideProps = async () => {
    return {
        props: {
            meta: {
                title: `Компании — UpFolio`,
                tags: [
                    {
                        name: "title",
                        content: `Компании — UpFolio`,
                        key: "title"
                    },
                ]
            }
        }
    };

};


export default Companies;