import {InProgressWidget} from "@/widgets/inProgressWidget";
import {BaseLayout} from "@/layouts/baseLayout";

function About() {
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
                title: `О платформе — UpFolio`,
                tags: [
                    {
                        name: "title",
                        content: `О платформе — UpFolio`,
                        key: "title"
                    },
                ]
            }
        }
    };

};


export default About;