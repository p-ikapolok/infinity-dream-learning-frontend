import NineDotMenu from "./NineDotMenu"
import NotificationBell from "./NotificationBell"
import ProfileDropdown from "./ProfileDropdown"

function Navbar() {
  return (
    <header className="navbar">

      <div className="left">
        <h3>Dashboard</h3>
      </div>

      <div className="right">

        <NotificationBell />

        <NineDotMenu />

        <ProfileDropdown />

      </div>

    </header>
  )
}

export default Navbar