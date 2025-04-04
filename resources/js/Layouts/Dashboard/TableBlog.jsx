import { Link, router  } from '@inertiajs/react'
function handleDelete(id, nama) {
    Swal.fire({
      title: "Are you sure ?",
      text: "This data" + " (" + nama + ") " + " will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        router.delete("/dashboard/manage-blog/" + id); 
      }
    });
  }
export default function TableBlog({data_blog}) {
    return (
    <div className="shadow-md rounded-md sm:rounded-lg bg-white">
        <div className="p-5 text-lg text-left rtl:text-right text-gray-900 font-inter-semibold flex justify-between items-end gap-4">
            <div>
                Daftar Blog  
                <p className="font-inter-reguler mt-1 text-xs sm:text-sm text-gray-500">
                    Daftar blog HIMSI UBSI KLA
                </p>
            </div>
        </div>

        <div className="relative">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-collapse">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-3">Banner</th>
                        <th scope="col" className="px-6 py-3">Judul</th>
                        <th scope="col" className="px-6 py-3">Kategori</th>
                        <th scope="col" className="px-6 py-3">Content</th>
                        <th scope="col" className="px-6 py-3"><span className="sr-only">Edit</span></th>
                    </tr>
                </thead>
                <tbody>
                    {data_blog.map((item, i) => (
                        <tr className="bg-white border-b border-gray-200" key={i}>
                            <td className="px-6 py-4">
                                <img src={`/storage/BlogAssets/Banner/${item.banner}`} alt={item.nama} className="w-20 shadow-lg" />
                            </td>
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {item.judul}
                            </th>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <div className='flex gap-2'>
                                    <p dangerouslySetInnerHTML={{ __html: item.icon_kategori_blog }}/> 
                                    <p>{item.nama_kategori_blog}</p>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <Link href={"/dashboard/manage-blog/" + item.id} className="text-yellow-700 font-semibold">
                                    <i className="fa-solid fa-eye mr-2"></i>Show
                                </Link>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex gap-4">
                                    <Link href={"/dashboard/manage-blog/" + item.slug + "/edit"} className="text-green-700 font-semibold">
                                        <i className="fa-solid fa-pen-to-square mr-2"></i>Edit
                                    </Link>
                                    <button type="button" onClick={() => handleDelete(item.id, item.nama)} className="text-red-700 font-semibold">
                                        <i className="fa-solid fa-trash-can mr-2"></i>Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
}
