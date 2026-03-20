import { useEffect, useState } from "react"

export const useSocket = (url: string) => {

  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [messages, setMessages] = useState<any[]>([])

  useEffect(() => {
    const ws = new WebSocket(url)

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setMessages((prev) => [...prev, data])
    }

    setSocket(ws)

    return () => ws.close()
  }, [url])

  const sendMessage = (msg: any) => {
    socket?.send(JSON.stringify(msg))
  }

  return { messages, sendMessage }
}