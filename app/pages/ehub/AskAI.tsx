import { useState } from "react"
import { askAI } from "../../api/ai.api"

function AskAI() {

  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")

  const submitPrompt = async () => {

    if (!prompt) return

    const data = await askAI({ prompt })

    setResponse(data.answer)
  }

  return (
    <div>

      <h2>Ask AI</h2>

      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask anything..."
      />

      <button onClick={submitPrompt}>
        Ask
      </button>

      {response && (
        <div className="ai-response">

          <h4>Response</h4>

          <p>{response}</p>

        </div>
      )}

    </div>
  )
}

export default AskAI
