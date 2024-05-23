import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-zinc-950 flex justify-center items-center text-slate-50">
      <div className="w-full max-w-2xl">
        <h1 className="text-6xl text-balance">The Best Journal App, Period.</h1>
        <p className="text-2xl text-slate-50/60 my-4 text-pretty">
          The is the best app for tracking your mood throughout your life. All
          you have to do is be honest.
        </p>
        <div>
          <Link href="/journal">
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
