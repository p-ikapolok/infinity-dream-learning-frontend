import { useState } from "react"
import { askAI } from "../../api/ai.api"

export default function LessonAI({ lessonId }: { lessonId: string }) {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const handleAsk = async () => {
    if (!question.trim()) return
    const res = await askAI({ prompt: `Lesson ${lessonId}: ${question}` })
    setAnswer(res.answer)
  }

  return (
    <div className="p-4 border rounded shadow mt-4 bg-white dark:bg-gray-800">
      <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Ask AI about this lesson</h4>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question..."
        className="w-full p-2 border rounded mb-2 dark:bg-gray-700 dark:text-white"
      />
      <button
        onClick={handleAsk}
        className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
      >
        Ask
      </button>
      {answer && <p className="mt-2 text-gray-700 dark:text-gray-300">{answer}</p>}
    </div>
  )
}