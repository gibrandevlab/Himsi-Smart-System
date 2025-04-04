import Layout from "@/Layouts/Dashboard/Layout";
import TableBlogCategory from "@/Layouts/Dashboard/TableBlogCategory";

const Index = ({data_blog_category}) => {
    return <Layout>
        <TableBlogCategory data_blog_category={data_blog_category}/>
    </Layout>;
};

export default Index;
