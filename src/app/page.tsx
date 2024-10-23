import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Devhub Agent
          </h1>
          <ul className="space-y-6">
            <li>
              <a
                href="https://docs.bitte.ai/agents/quick-start"
                target="_blank"
                rel="noreferrer"
                className="block text-center py-3 px-6 bg-red-400 text-white rounded-lg font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                href="https://wallet.bitte.ai/"
                target="_blank"
                rel="noreferrer"
                className="block text-center py-3 px-6 bg-blue-400 text-white rounded-lg font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
              >
                Wallet
              </a>
            </li>
            <li>
              <Link
                href="/.well-known/ai-plugin.json"
                className="block text-center py-3 px-6 bg-green-400 text-white rounded-lg font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
              >
                OpenAPI Spec
              </Link>
            </li>
            <li>
              <Link
                href="/api/swagger"
                className="block text-center py-3 px-6 bg-yellow-400 text-white rounded-lg font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
              >
                Swagger
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/Tguntenaar/ai-agent-devhub"
                target="_blank"
                rel="noreferrer"
                className="block text-center py-3 px-6 bg-purple-400 text-white rounded-lg font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
              >
                Source Code
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
