
import { Link, Outlet } from 'react-router'
import './App.css'
import { Button } from './components/ui/button'
import { ModeToggle } from './components/mode-toggle'

function App() {


  return (
    <>
      <div className='max-w-7xl mx-auto flex flex-row gap-4 items-center justify-between border-2 border-black dark:border-white rounded-2xl py-2 px-0.5 md:px-1.5 mb-5'>
        <div className='flex flex-row gap-3 items-center'>
          <ModeToggle></ModeToggle>
          <h1 className=' text-xs md:text-xl font-extrabold uppercase dark:text-white w-full'>Book Management</h1>
        </div>
        <div className='flex flex-row gap-3 items-center'>
          <Button className='px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm'><Link to="/">Home</Link></Button>
          <Button className='px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm'><Link to="/books">Book</Link></Button>
          <Button className='px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm'><Link to="/create-book">Add Book</Link></Button>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  )
}

export default App
