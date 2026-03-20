import { useState } from "react"
import { askAI } from "../../api/ai.api"

function LessonAI({ lessonId }: any) {

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const ask = async () => {
    const data = await askAI({
      prompt: `Lesson ${lessonId}: ${question}`
    })

    setAnswer(data.answer)
  }

  return (
    <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded-xl shadow">

      <h4 className="font-bold mb-2">Ask AI</h4>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full p-2 border rounded-lg mb-2 dark:bg-slate-700"
      />

      <button
        onClick={ask}
        className="bg-cyan-500 text-white px-4 py-2 rounded-lg"
      >
        Ask
      </button>

      {answer && (
        <p className="mt-3">{answer}</p>
      )}

    </div>
  )
}

export default LessonAI