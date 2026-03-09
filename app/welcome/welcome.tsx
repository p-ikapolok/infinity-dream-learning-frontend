export function Welcome() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center space-y-6 max-w-xl px-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Infinity Dream Learning
        </h1>

        <p className="text-gray-600 dark:text-gray-300">
          Learn programming, build real projects, and grow your developer
          career with modern tools and guided courses.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/signup"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
          >
            Get Started
          </a>

          <a
            href="/login"
            className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Login
          </a>
        </div>
      </div>
    </main>
  );
}
