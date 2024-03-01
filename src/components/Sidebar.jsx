import { useState } from "react";
import { TfiControlSkipBackward, TfiControlSkipForward } from "react-icons/tfi";
import {links} from '../data/index.js'
import ReusableLi from "../reusables/ReusableLi.jsx";

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

  return (
    <aside className={sidebar ? "h-full w-1/13 p-5 bg-blue border-gray fixed" : "h-full w-1/6 p-5 bg-blue border-gray fixed"}> {/* w-1/13 */}
        <nav className="w-full h-full flex flex-col
        justify-between">
            <div className="flex flex-row 
            justify-between items-center w-full">
                <h1 
                 className={sidebar ? "sidebar-collapse" : "main-heading-light"}> {/*To be hidden*/}
                    BI-Studio
                </h1>
                <button
                 className="ml-3 nav-button"
                 onClick={() => setSidebar(!sidebar)}
                >
                    {sidebar ? <TfiControlSkipBackward /> : <TfiControlSkipForward />}
                </button>
            </div>

            <ul className="w-full mt-6 flex flex-col
            justify-between items-start gap-4">
                {links.map((link) => (
                    <ReusableLi
                     key={link.id}
                     icon={link.icon}
                     content={link.content}
                     to={link.to}
                     sidebar={sidebar}
                    />
                ))}
            </ul>

            <div className={sidebar ? "sidebar-collapse self-start bg-gray p-2 rounded-sm mt-80 flex flex-row gap-3" : "w-full self-center bg-gray p-2 rounded-sm mt-80 flex flex-row gap-3"}> {/* remove width and add self-start */}

                    <h1 className="self-start bg-blue p-2
                    flex items-center justify-center text-white
                    text-lg font-bold rounded-sm"> {/* w-1/5 */}
                        JD
                    </h1>
                    <div className={sidebar ? "sidebar-collapse" : "paragraph-light flex flex-col justify-center"}>
                        <p>John Doe</p>
                        <p className="text-sm">johndoe@gmail.com</p>
                    </div>
            </div>
        </nav>
    </aside>
  )
}

export default Sidebar;