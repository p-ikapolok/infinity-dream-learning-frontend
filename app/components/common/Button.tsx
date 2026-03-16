import React from "react"

interface ButtonProps {
  label: string
  onClick?: () => void
  type?: "button" | "submit"
}

function Button({ label, onClick, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn"
    >
      {label}
    </button>
  )
}

export default Button