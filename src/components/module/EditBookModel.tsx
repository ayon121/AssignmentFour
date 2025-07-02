import { useEditBookMutation } from "@/redux/api/baseapi";
import type { IBook } from "@/types";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";


interface EditBookModelProps {
    book: IBook
    trigger: React.ReactNode
}


const EditBookModel = ({ book, trigger }: EditBookModelProps) => {

    const [formData, setFormData] = useState<IBook>(book)
    const [open, setOpen] = useState(false)
    const [ bookdata , { data ,  isLoading }] = useEditBookMutation()

    
    return (
        <div>
           
        </div>
    );
};

export default EditBookModel;