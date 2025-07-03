
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/api/baseapi"
import type { IBook } from "@/types"
import { Link } from "react-router"
import { toast , ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function Books() {
    const { data, isError, isLoading } = useGetBooksQuery(undefined)
    const books: IBook[] = data?.data || []

    const [deleteBook] = useDeleteBookMutation();

    const handleDelete = async (id: string) => {
        try {
            await deleteBook(id).unwrap();
            toast.success("Book deleted successfully");
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete book");
        }
    };
    return (
        <div>
            <h1 className="text-4xl font-bold uppercase mb-4">All Books</h1>


            {isLoading && <p className="text-sm text-muted-foreground">Loading books...</p>}
            {isError && <p className="text-sm text-red-500">Failed to load books.</p>}

            {!isLoading && !isError && (
                <Table className="border border-black/15 ">
                    <TableCaption>A list of all available books.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px]">Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Genre</TableHead>
                            <TableHead>ISBN</TableHead>
                            <TableHead>Copies</TableHead>
                            <TableHead>Available</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {books.length ? (
                            books?.map((book) => (
                                <TableRow key={book._id} className="text-start">
                                    <TableCell className="font-medium">{book.title}</TableCell>
                                    <TableCell>{book.author}</TableCell>
                                    <TableCell className="capitalize">{book.genre}</TableCell>
                                    <TableCell>{book.isbn}</TableCell>
                                    <TableCell>{book.copies}</TableCell>

                                    <TableCell>
                                        {book.available ? (
                                            <span className="text-green-600 font-medium">Yes</span>
                                        ) : (
                                            <span className="text-red-600 font-medium">No</span>
                                        )}
                                    </TableCell>
                                    <TableCell><DropdownMenu>
                                        <DropdownMenuTrigger className="bg-black dark:bg-white text-white dark:text-black px-1 rounded py-1  font-medium hover:bg-black/65 dark:hover:bg-white/65">Options</DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem className="font-bold hover:text-lg uppercase"><Link to={`/books/${book?._id}`}>View</Link></DropdownMenuItem>
                                            <DropdownMenuItem className="font-bold hover:text-lg uppercase"><Link to={`/edit-book/${book?._id}`}>Edit</Link></DropdownMenuItem>

                                            <DropdownMenuItem className="font-bold hover:text-lg uppercase">Borrow</DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => handleDelete(book._id)} className="font-bold hover:text-lg uppercase">Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu></TableCell>

                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center">
                                    No books found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter className="text-start">
                        <TableRow>
                            <TableCell colSpan={5}>Total Books</TableCell>
                            <TableCell colSpan={2} className="text-start font-semibold">
                                {books?.length}
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                    
                </Table>
            )}
            <ToastContainer></ToastContainer>
        </div>
    )
}
