import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../api/auth.api"

function Register() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async () => {
    try {
      await registerUser({ name, email, password })

      navigate("/login")
    } catch {
      alert("Registration failed")
    }
  }

  return (
    <div>

      <h2>Register</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>
        Register
      </button>

    </div>
  )
}

export default Register