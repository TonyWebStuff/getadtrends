export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold text-white">GetAdTrends</h1>
        <a href="#" className="text-sm font-medium text-gray-400 hover:underline">Sign In</a>
      </header>

      <main className="flex flex-col items-center justify-center px-6 pt-20 pb-24 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold max-w-2xl leading-tight">
          This isn't an ad library. <span className="text-violet-400">This is your unfair advantage.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-gray-400">
          Track winning product ads. Analyze why they work. Remix your own templates in minutes.
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

      <section className="px-6 py-16 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          <AdCard
            label="Tracked"
            image="/ads/blenderbottle.jpg"
            caption="Rocket-launch shaker ad. Still scaling."
          />
          <AdCard
            label="Analyzed"
            image="/ads/brez.jpg"
            caption="Our AI flagged a sensory-focused hook that performs well on TikTok."
          />
          <AdCard
            label="Remixed"
            image="/ads/allbirds.jpg"
            caption="Same tone. New CTA. Ready to test in under 5 min."
          />
        </div>
      </section>

      <footer className="p-6 text-center text-xs text-gray-600 border-t border-gray-800">
        © {new Date().getFullYear()} GetAdTrends. All rights reserved.
      </footer>
    </div>
  );
}

function AdCard({ label, image, caption }: { label: string; image: string; caption: string }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition-all">
      <div className="text-sm text-violet-400 font-medium mb-2">{label}</div>
      <img src={image} alt={caption} className="w-full h-56 object-cover rounded-md mb-3" />
      <p className="text-sm text-gray-300">{caption}</p>
    </div>
  );
}
