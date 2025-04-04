export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold text-white">GetAdTrends</h1>
        <a href="#" className="text-sm font-medium text-gray-400 hover:underline">Sign In</a>
      </header>

      <main className="flex flex-col items-center justify-center px-6 pt-20 pb-24 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold max-w-2xl leading-tight">
          See What Ads Are Working. <span className="text-violet-400">Remix Them Fast.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-gray-400">
          Track top-performing product ads in real-time across Meta, TikTok, Amazon & Google. 
          Remix them into scroll-stopping templates with AI. Built for ecommerce founders & DTC marketers.
        </p>

        <form action="https://formspree.io/f/your-form-id" method="POST" className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="px-4 py-3 rounded-md text-black w-full"
          />
          <button type="submit" className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
            Get Early Access
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">No spam. Just early access + updates.</p>
      </main>

      <section className="px-6 py-16 bg-gray-900 border-t border-gray-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">🔍 Live Ad Tracking</h3>
            <p className="text-sm text-gray-400">Scrape and store competitor ads by platform with automated freshness tracking.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">🧠 AI-Powered Insights</h3>
            <p className="text-sm text-gray-400">Get GPT-generated summaries, tone analysis, and audience breakdowns.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">🎨 Template Generator</h3>
            <p className="text-sm text-gray-400">Turn top-performing ads into editable copy + image templates in seconds.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">🔐 Private Beta Access</h3>
            <p className="text-sm text-gray-400">We’re building quietly. Early access is limited. Curiosity encouraged.</p>
          </div>
        </div>
      </section>

      <footer className="p-6 text-center text-xs text-gray-600 border-t border-gray-800">
        © {new Date().getFullYear()} GetAdTrends. All rights reserved.
      </footer>
    </div>
  );
}
