import { useState } from "react"

function ProfileDropdown() {

  const [open, setOpen] = useState(false)

  return (
    <div className="profile">

      <button onClick={() => setOpen(!open)}>
        
      </button>

      {open && (
        <div className="dropdown">

          <p>Profile</p>
          <p>Settings</p>
          <p>Logout</p>

        </div>
      )}

    </div>
  )
}

export default ProfileDropdown