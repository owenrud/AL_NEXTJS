import {authUserSession} from "@/libs/auth-libs"
import Image from "next/image"

const Page = async() => {
    const user = await authUserSession()
    return(
        <div>
            <h3>DASHBOARD</h3>
            <h5>WELCOME, {user.name}</h5>
            <Image src={user.image} alt="..." width={350} height={350}></Image>
        </div>
    )
}

export default Page