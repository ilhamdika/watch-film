import Authenticated from "@/Layouts/Authenticated/Index"
import Button from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/inertia-react";
import FlashMessage from "@/Components/FlashMessage";


export default function Index({auth, flashMessage, movies}) {
    return (
        <Authenticated auth={auth}>
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
                                <Button type="button" variant="danger" className="bg-red-600">
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
         </Authenticated>
    )
}