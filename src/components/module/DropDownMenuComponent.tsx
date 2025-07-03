import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router"

export function DropdownMenuComponent() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel className="text-xl font-bold uppercase">All Options</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Button className='px-2 py-1 text-xs sm:px-2 sm:py-1.5 sm:text-sm w-full'><Link to="/">Home</Link></Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button className='px-2 py-1 text-xs sm:px-2 sm:py-1.5 sm:text-sm w-full'><Link to="/books">All Books</Link></Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button className='px-2 py-1 text-xs sm:px-2 sm:py-1.5 sm:text-sm w-full'><Link to="/create-book">Add Book</Link></Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button className='px-2 py-1 text-xs sm:px-2 sm:py-1.5 sm:text-sm w-full'><Link to="/borrow-summary">Borrow Summary</Link></Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
