import Card from "../common/Card"

interface Props {
  title: string
  duration: string
}

function LessonCard({ title, duration }: Props) {
  return (
    <Card>

      <h4>{title}</h4>

      <p>{duration}</p>

      <button>Start Lesson</button>

    </Card>
  )
}

export default LessonCard