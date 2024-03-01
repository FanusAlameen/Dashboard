import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard"
import Reports from "./components/Reports";
import Clients from "./components/Clients";
import Bills from "./components/Bills";

function App() {

  return (
    <>
     <Sidebar />

     <div className="flex flex-col">
          <BrowserRouter>
           <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/bills" element={<Bills />} />
           </Routes>
          </BrowserRouter>
      </div>
    </>
  )
}


export default App
