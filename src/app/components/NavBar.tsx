import Image from "next/image";
import {rowdies} from "@/app/font";
const NavBar = () => {
    return (
        <div className="flex items-center gap-8 h-20 m-4 font-white">
            <div className="logoContainer w-fit">
                <h1 className={rowdies.className}>One1Social</h1>
            </div>
            <div className="flex w-full gap-4">
                <button>Home</button>
                <button>Youtube</button>
                <button>Tiktok</button>
                <button>Instagram</button>
                <button>X</button>
            </div>
            <div className="flex optionsContainer items-center gap-3">
                <input placeholder="search" className=" flex h-10 rounded-3xl p-4"/>
                <div className="userImageContainer w-20 h-20 border-2">
                    {/*<Image alt="user image"/>*/}
                </div>

            </div>
        </div>
    )
}

export default NavBar
