import ThemeToggle from "../ui/ThemeToggle"
import NotificationBell from "./NotificationBell"
import NineDotMenu from "./NineDotMenu"
import ProfileDropdown from "./ProfileDropdown"

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow">
      <div className="text-2xl font-bold text-purple-700">Infinity Dream Learning</div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <NotificationBell />
        <NineDotMenu />
        <ProfileDropdown />
      </div>
    </header>
  )
}