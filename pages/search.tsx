import {InProgressWidget} from "@/widgets/inProgressWidget";
import {BaseLayout} from "@/layouts/baseLayout";

function Search() {
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
                title: `Каталог портфолио — UpFolio`,
                tags: [
                    {
                        name: "title",
                        content: `Каталог портфолио — UpFolio`,
                        key: "title"
                    },
                ]
            }
        }
    };

};


export default Search;