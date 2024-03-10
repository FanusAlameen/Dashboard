import { useState } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { links } from "./data";
import { links } from "./data";

const App=()=>{
  const [sidebar, setSidebar] = useState(false);
const App = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="flex flex-row min-h-screen">
      <BrowserRouter>
       <div className={sidebar ? "w-1/13 bg-lightgray" : "w-1/6 bg-lightgray"}>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
       </div>
       <div className="w-full">
        <Routes>
        {links.map((linkContent,index)=>{
              return <Route exact={linkContent?.exact || false} path={linkContent?.to || "/"} element={linkContent.component} />
        })}
        </Routes>
       </div>
      </BrowserRouter>
    </div>
  )
}

export default App
