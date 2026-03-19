import LiveChat from "../../components/realtime/LiveChat"

function Community() {

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Community
      </h1>

      {/* Live Chat Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow">

        <LiveChat />

      </div>

    </div>
  )
}

export default Community