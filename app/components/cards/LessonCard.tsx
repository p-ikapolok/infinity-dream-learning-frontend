interface Props {
  title: string
  description: string
}

export default function LessonCard({ title, description }: Props) {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition duration-200 bg-white dark:bg-gray-800">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
    </div>
  )
}