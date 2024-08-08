import Link from "next/link"
import Searchbar from "./inputSearch"
import UserActionButton from "./UserActionButton"


const Navbar = () =>{
    return(
        <nav className="bg-blue-600 border-gray-200 dark:bg-blue-600 shadow-xl">
        <div className=" flex md:flex-row lg:flex-row xl:flex-row flex-col justify-between p-2 space-y-2 mb-8">
        <Link href="/" className="flex-1 md:self-center text-4xl font-bold whitespace-nowrap dark:text-white p-4">Anime List</Link>
        <Searchbar/>
        <UserActionButton/>
        </div>
        </nav>
    )
}

export default Navbar