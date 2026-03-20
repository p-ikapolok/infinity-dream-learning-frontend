import { ReactNode } from "react"
import Sidebar from "../components/navigation/Sidebar"
import Navbar from "../components/navigation/Navbar"

function EHubLayout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">

      <Sidebar />

      <div className="main">

        <Navbar />

        <div className="page">
          {children}
        </div>

      </div>

    </div>
  )
}

export default EHubLayout