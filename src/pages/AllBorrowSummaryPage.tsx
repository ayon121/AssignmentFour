
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
import { useGetBorrowQuery } from "@/redux/api/baseapi"
import type { IBorrow } from "@/types"


import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function AllBorrowSummaryPage() {
    const { data, isError, isLoading } = useGetBorrowQuery(undefined)
    const borrows: IBorrow[] = data?.data || []


    return (
        <div>
            <h1 className="text-4xl font-bold uppercase mb-4">All Borrows</h1>

            {isLoading && <p className="text-sm text-muted-foreground">Loading borrows...</p>}
            {isError && <p className="text-sm text-red-500">Failed to load borrows.</p>}

            {!isLoading && !isError && (
                <Table className="border border-black/15  ">
                    <TableCaption>A Summary Of Borrowed Books.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px]">Book Name</TableHead>
                            <TableHead className="w-[200px]">Isbn Number</TableHead>
                            <TableHead>Quantity</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {borrows.length ? (
                            borrows?.map((borrow , index) => (
                                <TableRow key={index} className="text-start">
                                    <TableCell className="font-medium">{borrow?.book?.title}</TableCell>
                                    <TableCell className="font-medium">{borrow?.book?.isbn}</TableCell>
                                    <TableCell>{borrow.totalQuantity}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center">
                                    No Borrow found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter className="text-start">
                        <TableRow>
                            <TableCell colSpan={2}>Total Borrow</TableCell>
                            <TableCell colSpan={2} className="text-start font-semibold">
                                {borrows?.length}
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                    
                </Table>
            )}
            <ToastContainer></ToastContainer>
        </div>
    )
}
