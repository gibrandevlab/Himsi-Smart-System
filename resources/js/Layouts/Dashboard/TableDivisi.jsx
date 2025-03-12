import { Link, router  } from '@inertiajs/react'
function handleDelete(slug, nama) {
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
        router.delete("/dashboard/manage-divisi/" + slug); 
      }
    });
  }
export default function TableDivisi({data_divisi}) {
    return (
        <div className="shadow-md rounded-md sm:rounded-lg bg-white">
    <div className="p-5 text-lg text-left rtl:text-right text-gray-900 font-inter-semibold flex justify-between items-end gap-4">
        <div>
            Daftar Divisi
            <p className="font-inter-reguler mt-1 text-xs sm:text-sm text-gray-500">
                Daftar divisi HIMSI UBSI KLA
            </p>
        </div>
    </div>

    {/* 🔥 Tidak ada scroll, tinggi menyesuaikan konten */}
    <div className="relative">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-collapse">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                    <th scope="col" className="px-6 py-3">Divisi</th>
                    <th scope="col" className="px-6 py-3">Deskripsi</th>
                    <th scope="col" className="px-6 py-3">Logo</th>
                    <th scope="col" className="px-6 py-3">Jumlah Anggota</th>
                    <th scope="col" className="px-6 py-3"><span className="sr-only">Edit</span></th>
                </tr>
            </thead>
            <tbody>
                {data_divisi.map((item, i) => (
                    <tr className="bg-white border-b border-gray-200" key={i}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {item.nama}
                        </th>
                        <td className="px-6 py-4">
                            <Link href={"/dashboard/manage-divisi/" + item.slug} className="text-yellow-700 font-semibold">
                                <i className="fa-solid fa-eye mr-2"></i>Show
                            </Link>
                        </td>
                        <td className="px-6 py-4">
                            <img src={`/storage/DivisiAssets/Logo/${item.logo}`} alt={item.nama} className="w-20 shadow-lg" />
                        </td>
                        <td className="px-6 py-4">{item.jumlah_anggota}</td>
                        <td className="px-6 py-4 text-right">
                            <div className="flex gap-4">
                                <Link href={"/dashboard/manage-divisi/" + item.slug + "/edit"} className="text-green-700 font-semibold">
                                    <i className="fa-solid fa-pen-to-square mr-2"></i>Edit
                                </Link>
                                <button type="button" onClick={() => handleDelete(item.slug, item.nama)} className="text-red-700 font-semibold">
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
