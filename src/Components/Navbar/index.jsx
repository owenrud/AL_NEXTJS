import Link from "next/link"
import Searchbar from "./inputSearch"
import UserActionButton from "./UserActionButton"


const Navbar = () =>{
    return(
        <nav className="bg-color-primary border-gray-200 dark:bg-color-primary shadow-xl">
        <div className=" flex md:flex-row lg:flex-row xl:flex-row flex-col items-center justify-between p-2 space-y-2 mb-8">
        <Link href="/" className="flex md:self-center text-4xl text-color-accent font-bold whitespace-nowrap dark:text-color-accent p-4">Anime List</Link>
        <Searchbar/>
        <UserActionButton/>
        </div>
        </nav>
    )
}

export default Navbar