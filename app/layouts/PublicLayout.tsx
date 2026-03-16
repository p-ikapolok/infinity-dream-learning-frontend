import { ReactNode } from "react"

function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div>

      <header>
        <h1>Infinity Dream Learning</h1>
      </header>

      <main>{children}</main>

      <footer>
        <p>© Infinity Dream Learning</p>
      </footer>

    </div>
  )
}

export default PublicLayout