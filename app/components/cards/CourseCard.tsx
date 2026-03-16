import Card from "../common/Card"

interface Props {
  title: string
  description: string
}

function CourseCard({ title, description }: Props) {
  return (
    <Card>

      <h3>{title}</h3>

      <p>{description}</p>

      <button>View Course</button>

    </Card>
  )
}

export default CourseCard