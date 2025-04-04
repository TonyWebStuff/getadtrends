import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Head>
        <title>GetAdTrends</title>
        <meta name="description" content="Track & remix top-performing ads" />
      </Head>
      <main className="flex flex-col items-center justify-center px-6 pt-24 pb-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-2xl leading-tight">
          See What Ads Are Working. <span className="text-blue-600">Remix Them Fast.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-600">
          Track competitor ads in real-time across Meta, TikTok, Amazon & more.
          Get AI-generated templates based on top-performing creatives.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700">
            Start Tracking for Free
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-100">
            View Demo
          </button>
        </div>
      </main>
    </div>
  );
}
