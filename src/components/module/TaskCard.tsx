
import type { ITask } from "@/types";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";

interface IProps {
    task : ITask
}

export default function TaskCard({task} : IProps) {

    return (
        <div className="flex flex-row justify-between py-4 mt-3 mb-3 border-2 border-black rounded-2xl px-2.5 ">
            <div className="text-sm font-bold flex flex-col items-start"> 
                <h1 className={cn("text-lg" , {
                    "text-green-900" : task.priority == "Low",
                    "text-orange-900" : task.priority == "Medium",
                    "text-red-800" : task.priority == "High",
                    
                })}>Task Name : {task.title}</h1>
                <p>Description : {task.description}</p>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
                <Button >Delete</Button>
                <Checkbox/>
            </div>
        </div>
    )
}