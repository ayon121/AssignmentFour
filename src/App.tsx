
import { Link, Outlet } from 'react-router'
import './App.css'
import { Button } from './components/ui/button'
import { ModeToggle } from './components/mode-toggle'
import 'react-toastify/dist/ReactToastify.css'
import { DropdownMenuComponent } from './components/module/DropDownMenuComponent'

function App() {


  return (
    <>
      <div className='max-w-7xl mx-auto flex flex-row gap-4 items-center justify-between border-2 border-black dark:border-white rounded-2xl py-2 px-0.5 md:px-1.5 mb-5'>
        <div className='flex flex-row gap-3 items-center'>
          <ModeToggle></ModeToggle>
          <div className='block lg:hidden'>
            <DropdownMenuComponent></DropdownMenuComponent>
          </div>
          <h1 className=' text-xs md:text-xl font-extrabold uppercase dark:text-white w-full'>Book Management</h1>
        </div>
        <div className='hidden  lg:flex flex-row gap-1 items-center '>
          <Button className='px-2 py-1 text-xs sm:px-2 sm:py-1.5 sm:text-sm'><Link to="/">Home</Link></Button>
          <Button className='px-2 py-1 text-xs sm:px-2 sm:py-1.5 sm:text-sm'><Link to="/books">All Books</Link></Button>
          <Button className='px-2 py-1 text-xs sm:px-2 sm:py-1.5 sm:text-sm'><Link to="/create-book">Add Book</Link></Button>
          <Button className='px-2 py-1 text-xs sm:px-2 sm:py-1.5 sm:text-sm'><Link to="/borrow-summary">Borrow Summary</Link></Button>
        </div>



      </div>

      <div className='min-h-screen'>
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <footer className="max-w-7xl mx-auto border-2 border-black dark:border-white mt-10 pt-4 pb-6 px-2 md:px-4 text-center rounded-t-2xl shadow-inner">
        <p className="text-lg sm:text-sm font-bold text-muted-foreground">
          © {new Date().getFullYear()} Book Management. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1 font-bold">
          Developed by <a href="https://github.com/ayon121" className="underline hover:text-black dark:hover:text-white">Ayon Saha</a>
        </p>
      </footer>
    </>
  )
}

export default App
