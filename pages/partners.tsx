import {InProgressWidget} from "@/widgets/inProgressWidget";
import {BaseLayout} from "@/layouts/baseLayout";

function Partners() {
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
                title: `Партнёры — UpFolio`,
                tags: [
                    {
                        name: "title",
                        content: `Партнёры — UpFolio`,
                        key: "title"
                    },
                ]
            }
        }
    };

};


export default Partners;