import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useEditBookMutation, useGetBookByIdQuery } from "@/redux/api/baseapi"
import { useParams } from "react-router";
import { useEffect } from "react";



export default function EditBook() {
    const { id } = useParams<{ id: string }>();
    const { data } = useGetBookByIdQuery(id!, {
        skip: !id,
    });
    const [editBook, isError] = useEditBookMutation();
    const form = useForm({
        defaultValues: {
            title: "",
            description: "",
            author: "",
            isbn: "",
            genre: "SCIENCE",
            copies: 1,
            available: true
        },
    })
    useEffect(() => {
        if (data?.data) {
            form.reset(data.data)
        }
    }, [data, form])



    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            console.log("Submitted Book:", data);
            const res = await editBook({ id, bookdata: data }).unwrap();
            console.log(res);
            toast.success( res.message || "Book edited successfully");
        } catch (err) {
            console.error("Edit failed:", err);
            toast.error("Failed to edit book");
        }
    };


    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            <h1 className="text-2xl font-bold uppercase">Edit Book</h1>
            <p className="">{data?.data?.title}</p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* Title */}
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Book Title" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    {/*  */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>description</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="description" />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Author */}
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Author</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Author Name" />
                                </FormControl>
                            </FormItem>
                        )}
                    />


                    {/* ISBN */}
                    <FormField
                        control={form.control}
                        name="isbn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ISBN</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="ISBN Number" />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Genre */}
                    <FormField
                        control={form.control}
                        name="genre"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Genre</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select genre" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="FICTION">Fiction</SelectItem>
                                        <SelectItem value="NON_FICTION">Non-Fiction</SelectItem>
                                        <SelectItem value="SCIENCE">Science</SelectItem>
                                        <SelectItem value="HISTORY">History</SelectItem>
                                        <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                                        <SelectItem value="FANTASY">Fantasy</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />

                    {/* Copies */}
                    <FormField
                        control={form.control}
                        name="copies"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Number of Copies</FormLabel>
                                <FormControl>
                                    <Input {...field} type="number" placeholder="10" />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Availability */}
                    <FormField
                        control={form.control}
                        name="available"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Availability</FormLabel>
                                <Select onValueChange={(value) => field.onChange(value === "true")} value={String(field.value)}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select availability" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="true">Available</SelectItem>
                                        <SelectItem value="false">Not Available</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Submit Book</Button>
                </form>
            </Form>
            <ToastContainer />
        </div>
    )
}
