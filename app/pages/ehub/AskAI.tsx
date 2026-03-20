import { useState } from "react"
import { askAI } from "../../api/ai.api"

export default function AskAI() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const handleAsk = async () => {
    const res = await askAI({ prompt: question })
    setAnswer(res.answer)
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Ask AI</h2>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
        className="border p-2 rounded w-full mb-4 dark:bg-gray-700 dark:text-white"
      />
      <button onClick={handleAsk} className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800">
        Ask
      </button>
      {answer && <p className="mt-4 text-gray-700 dark:text-gray-300">{answer}</p>}
    </div>
  )
}