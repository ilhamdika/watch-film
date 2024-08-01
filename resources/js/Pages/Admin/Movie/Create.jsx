import Authenticated from "@/Layouts/Authenticated/Index"
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import Input from '@/Components/TextInput';
import Label from '@/Components/InputLabel';
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/PrimaryButton";

export default function Create ({auth}){


    const { setData, post, processing, errors} = useForm({
        name : "",
        category : "",
        video_url : "",
        thumbnail : "",
        rating : "",
        is_featured : false,
     });
 
 
     const onHandleChange = (event) => {
         setData(event.target.name,
             event.target.type === 'file' 
             ? event.target.files[0]
             : event.target.value);
     };
 
     const submit = (e) => {
         e.preventDefault();
 
         post(route('admin.dashboard.movie.store'));
     };


    return (
        <div className="bg-amber-200">
        <Authenticated auth={auth}>
            <Head title="Create Movie" />
            
            <h1 className="text-xl mb-10">New Movie</h1>
            <form onSubmit={submit}>
            <InputError message={errors.name} className="mt-2" />
                <Label forInput="name" value="Name" />
                <Input 
                    
                    type="text"
                    name="name"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="name of movie"
                    isError={errors.name}
                />
                <Label forInput="category" value="Category" className="mt-4" />
            <InputError message={errors.category} className="mt-2" />
                <Input 
                    type="text"
                    name="category"
                    variant="primary"
                    handleChange={onHandleChange}
                    placeholder="category of movie"
                    isError={errors.category}
                />
                <Label forInput="video_url" value="Video Url" className="mt-4" />
            <InputError message={errors.video_url} className="mt-2" />
                <Input 
                    type="url"
                    name="video_url"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Video Url of movie"
                    isError={errors.video_url}
                />
                <Label forInput="thumbnail" value="Thumbnail" className="mt-4" />
            <InputError message={errors.thumbnail} className="mt-2" />
                <Input 
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
                <Input 
                    type="number"
                    name="rating"
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