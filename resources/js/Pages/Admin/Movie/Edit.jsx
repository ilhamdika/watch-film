import Authenticated from "@/Layouts/Authenticated/Index"
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import Label from '@/Components/InputLabel';
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/PrimaryButton";
import { Inertia } from '@inertiajs/inertia'; 

export default function Create ({auth, movie}){


    const { data, setData, processing, errors} = useForm({
        ...movie
     });
 
 
     const onHandleChange = (event) => {
         setData(event.target.name,
             event.target.type === 'file' 
             ? event.target.files[0]
             : event.target.value);
     };
 
     const submit = (e) => {
         e.preventDefault();
        
         if (data.thumbnail === movie.thumbnail){
            delete data.thumbnail;
         }
         Inertia.post(route('admin.dashboard.movie.update', movie.id), {
            _method: 'PUT',
            ...data
         });
     };


    return (
        <div className="bg-amber-200">
        <Authenticated auth={auth}>
            <Head title="Edit Movie" />
            
            <h1 className="text-xl mb-10">Edit Movie: {movie.name}</h1>
            <form onSubmit={submit}>
            <InputError message={errors.name} className="mt-2" />
                <Label forInput="name" value="Name" />
                <TextInput 
                    
                    type="text"
                    name="name"
                    defaultValue={movie.name}
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="name of movie"
                    isError={errors.name}
                />
                <Label forInput="category" value="Category" className="mt-4" />
            <InputError message={errors.category} className="mt-2" />
                <TextInput 
                    type="text"
                    name="category"
                    defaultValue={movie.category}
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="category of movie"
                    isError={errors.category}
                />
                <Label forInput="video_url" value="Video Url" className="mt-4" />
            <InputError message={errors.video_url} className="mt-2" />
                <TextInput 
                    type="url"
                    name="video_url"
                    defaultValue={movie.video_url}
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Video Url of movie"
                    isError={errors.video_url}
                />
                <Label forInput="thumbnail" value="Thumbnail" className="mt-4" />
            <InputError message={errors.thumbnail} className="mt-2" />
            <img src={`/storage/${movie.thumbnail}`} alt="thumbnail" className="w-50 mb-4" />
                <TextInput 
                    className="w-50"
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Thumbnail of movie"
                    isError={errors.thumbnail}
                />
                <Label forInput="rating" value="Rating" className="mt-4" />
            <InputError message={errors.rating} className="mt-2" />
                <TextInput 
                    type="number"
                    name="rating"
                    defaultValue={movie.rating}
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Rating of movie"
                    isError={errors.rating}
                />
                <div className="flex flex-row items-center mt-4">
                <Label forInput="is_featured" value="Featured" className="mt-1 mr-3" />
                <Checkbox 
                    name="is_featured"
                    handleChange={(e) => setData('is_featured', e.target.checked)}
                    checked={movie.is_featured}
                />
                </div>
                <Button type="submit" className="mt-4 bg-alerange" processing={processing}>
                    Save
                </Button>
            </form>
            
        </Authenticated>
        </div>
    )
}