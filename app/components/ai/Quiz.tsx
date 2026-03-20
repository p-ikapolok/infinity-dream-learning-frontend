import { useEffect, useState } from "react"
import { generateQuiz, submitQuiz } from "../../api/ai.api"

function Quiz({ lessonId }: any) {

  const [quiz, setQuiz] = useState<any>(null)
  const [answers, setAnswers] = useState<any>({})
  const [result, setResult] = useState<any>(null)

  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    const data = await generateQuiz(lessonId)
    setQuiz(data)
  }

  const handleSubmit = async () => {
    const res = await submitQuiz(answers)
    setResult(res)
  }

  if (!quiz) return <p>Loading quiz...</p>

  return (
    <div>

      <h3>Quiz</h3>

      {quiz.questions.map((q: any, i: number) => (
        <div key={i}>

          <p>{q.question}</p>

          {q.options.map((opt: string) => (
            <button
              key={opt}
              onClick={() => setAnswers({ ...answers, [i]: opt })}
            >
              {opt}
            </button>
          ))}

        </div>
      ))}

      <button onClick={handleSubmit}>
        Submit Quiz
      </button>

      {result && <p>Score: {result.score}</p>}

    </div>
  )
}

export default Quiz