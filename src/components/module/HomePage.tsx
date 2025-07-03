import { useGetBooksQuery } from "@/redux/api/baseapi";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import type { IBook } from "@/types";


const HomePage = () => {
  const { data, isError, isLoading } = useGetBooksQuery(undefined);
  const books: IBook[] = data?.data || []

  if (isLoading) {
    return <p className="text-center mt-10 text-muted-foreground">Loading books...</p>;
  }

  if (isError) {
    return <p className="text-center mt-10 text-red-500">Failed to load books.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <div
          key={book._id}
          className="border border-black dark:border-white rounded-xl p-4 shadow-md flex flex-col justify-between"
        >
          <div>
            <h2 className="text-xl font-bold mb-2">{book.title}</h2>
            <p className="text-sm text-muted-foreground line-clamp-3">{book.description}</p>
          </div>
          <div className="mt-4">
            <Button className="w-full text-sm" variant="default" asChild>
              <Link to={`/books/${book._id}`}>View</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
