import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <aside className="sidebar">

      <h3>IDL</h3>

      <nav>

        <p>Hub</p>

        <Link to="/hub/dashboard">Dashboard</Link>
        <Link to="/hub/courses">Courses</Link>
        <Link to="/hub/community">Community</Link>
        <Link to="/hub/events">Events</Link>
        <Link to="/hub/ai">Ask AI</Link>

        <hr />

        <p>Learning</p>

        <Link to="/learn/dashboard">Dashboard</Link>
        <Link to="/learn/courses">Courses</Link>
        <Link to="/learn/lessons">Lessons</Link>
        <Link to="/learn/live-classes">Live Classes</Link>
        <Link to="/learn/scheduler">Scheduler</Link>
        <Link to="/athena/community">Community</Link>

      </nav>

    </aside>
  )
}

export default Sidebar