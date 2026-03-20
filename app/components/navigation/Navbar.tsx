import ThemeToggle from "./ThemeToggle"
import NotificationBell from "./NotificationBell"
import NineDotMenu from "./NineDotMenu"
import ProfileDropdown from "./ProfileDropdown"

function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 border-b dark:border-slate-700">

      <div className="font-bold text-lg">Dashboard</div>

      <div className="flex gap-3 items-center">

        <ThemeToggle />
        <NotificationBell />
        <NineDotMenu />
        <ProfileDropdown />

      </div>

    </header>
  )
}

export default Navbar