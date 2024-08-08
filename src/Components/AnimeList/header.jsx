import Link from "next/link"
const Header = ({title,link,linkTitle}) =>{
    return(
        <div className="flex justify between items-center p-4">
        <h1 className="flex-1 font-bold md:text-4xl text-2xl">{title}</h1>
        {link && linkTitle ?
        <Link href={link} className="md:text-xl text-md underline hover:text-indigo-500 transition-all">
        {linkTitle}
        </Link>
        : null
        }
        </div>
    )
}

export default Header