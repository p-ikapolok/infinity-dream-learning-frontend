import React from "react"

interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

function Modal({ open, onClose, children }: ModalProps) {

  if (!open) return null

  return (
    <div className="modal-overlay">

      <div className="modal">

        <button onClick={onClose}>Close</button>

        {children}

      </div>

    </div>
  )
}

export default Modal