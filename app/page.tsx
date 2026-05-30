export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Education Tech
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Predict which students will{" "}
          <span className="text-[#58a6ff]">drop out</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          DropGuard analyzes engagement patterns across your courses and flags at-risk students before they disappear — so you can intervene and boost completion rates.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $14/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No credit card required to try.</p>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["92%", "Prediction accuracy"],
            ["3×", "Higher retention"],
            ["48h", "Early warning lead time"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-extrabold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$14</div>
          <div className="text-[#8b949e] text-sm mb-6">/month per platform</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited student profiles",
              "Real-time dropout predictions",
              "CSV & API data ingestion",
              "Intervention recommendations",
              "Email alerts for at-risk students",
              "Dashboard analytics"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the prediction model work?",
              "DropGuard ingests login frequency, video watch time, quiz scores, and forum activity. A scikit-learn gradient boosting model trained on millions of course interactions scores each student daily."
            ],
            [
              "How do I get my data in?",
              "Upload a CSV export from your LMS or connect via our REST API. We support Teachable, Thinkific, and custom platforms out of the box."
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel from your billing dashboard at any time. You keep access until the end of your billing period with no questions asked."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} DropGuard. All rights reserved.
      </footer>
    </main>
  );
}
