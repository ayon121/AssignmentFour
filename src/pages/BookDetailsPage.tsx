import { useGetBookByIdQuery } from "@/redux/api/baseapi";
import { useParams } from "react-router";


const BookDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isError, isLoading } = useGetBookByIdQuery(id!, {
        skip: !id,
    });

    if (isLoading) return <p>Loading book details...</p>;
    if (isError) return <p>Failed to load book details.</p>;
    return (
        <div className="p-4 text-start font-medium flex flex-col gap-3">
            <h1 className="text-3xl font-bold mb-4 text-center">Book Details</h1>
            <div className="border-2 border-black dark:border-white flex flex-col gap-1.5 px-5 py-2.5 rounded-2xl shadow-2xl">
                <div className="flex flex-row justify-between items-center">
                    <p className="text-xl"><strong className="uppercase">Title:</strong> {data?.data?.title}</p>
                    <p className="text-xl"><strong className="uppercase">Author:</strong> {data?.data?.author}</p>
                </div>
                <hr></hr>
                <div className="py-1.5">
                    <p>Description: {data?.data?.description}</p>
                </div>
                <hr></hr>
                <p><strong className="uppercase">ISBN:</strong> {data?.data?.isbn}</p>
                <p><strong className="uppercase">Genre:</strong> {data?.data?.genre}</p>
                <p><strong className="uppercase">Copies:</strong> {data?.data?.copies}</p>
                <p><strong className="uppercase">Available:</strong> {data?.data?.available ? "Yes" : "No"}</p>
            </div>
        </div>
    );
};

export default BookDetailsPage;