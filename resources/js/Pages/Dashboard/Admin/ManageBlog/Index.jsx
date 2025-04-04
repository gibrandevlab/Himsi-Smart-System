import Layout from "@/Layouts/Dashboard/Layout";
import TableBlog from "@/Layouts/Dashboard/TableBlog";

const ManageBlogIndex = ({data_blog}) => {
    
    return <Layout>
        <TableBlog data_blog={data_blog}/>
    </Layout>;
};

export default ManageBlogIndex;
