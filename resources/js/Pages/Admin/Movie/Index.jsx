import Authenticated from "@/Layouts/Authenticated/Index"
import Button from "@/Components/PrimaryButton";
import { Link, Head } from "@inertiajs/inertia-react";
import FlashMessage from "@/Components/FlashMessage";
import { useForm } from "@inertiajs/inertia-react";


export default function Index({auth, flashMessage, movies}) {
    const {delete: destroy, put} =useForm()
    return (
        <Authenticated auth={auth}>
            <Head title="Movie" />
            <Link href={route('admin.dashboard.movie.create')}>
            <Button 
            type="button"
            className="bg-alerange w-40 mb-10">
                New Movie
            </Button>
            </Link>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message}/>
            )}
            
            <table className="table-fixed w-full text-center">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>
                                <img src={`/storage/${movie.thumbnail}`} className="w-32 rounded-md" />
                            </td>
                            <td>{movie.name}</td>
                            <td>{movie.category}</td>
                            <td>{movie.rating.toFixed(1)}</td>
                            <td>
                                <Link href={route('admin.dashboard.movie.edit', movie.id)}>
                                    <Button type="button" variant="warning" className="bg-yellow-500">
                                        Edit
                                    </Button>
                                </Link>
                            </td>
                            <td>
                                <div onClick={()=>{
                                    movie.deleted_at ? put(route('admin.dashboard.movie.restore', movie.id)):
                                    destroy(route("admin.dashboard.movie.destroy", movie.id))
                                }}>
                                <Button type="button" variant="danger" className="bg-red-600">
                                    {movie.deleted_at ? "restore" : "Delete"}
                                </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
         </Authenticated>
    )
}