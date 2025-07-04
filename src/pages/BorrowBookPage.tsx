import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useBorrowBookMutation, useGetBookByIdQuery } from "@/redux/api/baseapi";
import 'react-toastify/dist/ReactToastify.css'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router";

export default function BorrowBookPage() {
    const { id } = useParams<{ id: string }>();

    const form = useForm({
        defaultValues: {
            quantity: 1,
            dueDate: new Date(),
        },
    });

    const [borrowBook, { isLoading }] = useBorrowBookMutation();
    const { data: bookData } = useGetBookByIdQuery(id!, {
        skip: !id,
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const payload = {
                book: id!,
                quantity: Number(data.quantity),
                dueDate: new Date(data.dueDate).toISOString(),
            };

            const res = await borrowBook(payload).unwrap();
            console.log(res);

            toast.success("Book borrowed successfully");
        } catch (error : any ) {
            console.error(error);
            toast.error(error?.data?.message || "Failed to borrow book");
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-8 p-6 border dark:border-white border-black rounded-2xl shadow-2xl space-y-5">
            <h1 className="text-3xl font-bold text-center">Borrow Book</h1>
            <p className="text-center text-lg font-medium text-gray-700 dark:text-gray-300">
                {bookData?.data?.title ? `Borrowing: ${bookData.data.title}` : "Loading book..."}
            </p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* Quantity */}
                    <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quantity</FormLabel>
                                <FormControl>
                                    <Input {...field} type="number" min={1} placeholder="1" />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Due Date */}
                    <FormField
                        control={form.control}
                        name="dueDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Due Date  <span className="text-xs text-red-400">"Date must be in future"</span></FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value
                                                    ? format(field.value, "PPP")
                                                    : "Pick a date"}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) => date <= new Date()}
                                            captionLayout="dropdown"
                                        />
                                    </PopoverContent>
                                </Popover>
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Borrowing..." : "Borrow Book"}
                    </Button>
                </form>
            </Form>
            <ToastContainer></ToastContainer>
        </div>
    );
}
