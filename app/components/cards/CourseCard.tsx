import { useNavigate } from "react-router-dom"

interface Props {
  id: string
  title: string
  description: string
}

function CourseCard({ id, title, description }: Props) {

  const navigate = useNavigate()

  return (
    <div className="card">

      <h3>{title}</h3>

      <p>{description}</p>

      <button onClick={() => navigate(`/hub/courses/${id}`)}>
        View Course
      </button>

    </div>
  )
}

export default CourseCard