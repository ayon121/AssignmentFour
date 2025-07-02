import EditBookModel from "@/components/module/EditBookModel"
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
import { useGetBooksQuery } from "@/redux/api/baseapi"
import type { IBook } from "@/types"

export default function Books() {
    const { data, isError, isLoading } = useGetBooksQuery(undefined)
    const books: IBook[] = data?.data || []


    return (
        <div>
            <h1 className="text-4xl font-bold uppercase mb-4">All Books</h1>

            <div className="my-4">
                Add new Books
            </div>

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
                                            <DropdownMenuItem>View</DropdownMenuItem>
                                            <EditBookModel
                                                book={book}
                                                trigger={<DropdownMenuItem>Edit</DropdownMenuItem>}
                                            />
                                            <DropdownMenuItem>Borrow</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
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
        </div>
    )
}
