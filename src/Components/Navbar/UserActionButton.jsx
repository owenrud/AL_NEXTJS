import Link from "next/link"
import {authUserSession} from "@/libs/auth-libs"

 
 const UserActionButton = async() => {
        const  user = await authUserSession()
        const actionLabel = user ? "Sign Out" : "Sign In"
        const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"
        console.log(user)
    return(
        <div className="flex justify-between p-4 space-x-4 text-white items-center">
            { user ?
            <Link href="users/dashboard">Dashboard</Link>
             : null
            }
            
            <Link href={actionURL} className="bg-gray-900 text-yellow-500 inline-block py-1 px-12">{actionLabel}</Link>
        </div>
        
    )
}

export default UserActionButton