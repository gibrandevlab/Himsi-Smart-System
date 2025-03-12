import Layout from "@/Layouts/Dashboard/Layout";
import TableDivisi from "@/Layouts/Dashboard/TableDivisi";

const ManageDivisiIndex = ({data_divisi}) => {
    
    return <Layout>
        <TableDivisi data_divisi={data_divisi}/>
    </Layout>;
};

export default ManageDivisiIndex;
