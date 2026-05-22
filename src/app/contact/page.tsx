import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto w-full max-w-5xl px-6 py-8 sm:px-10 lg:px-12">
        <Link href="/" className="text-sm font-semibold text-slate-600 underline underline-offset-4">
          トップへ戻る
        </Link>

        <section className="py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            連絡先
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700">
            就活で使う場合は、採用担当者が確認しやすいリンクを置きます。メールアドレスは公開してよいものだけにしましょう。
          </p>
        </section>

        <section className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Links</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              後でメールアドレスやSNSを本物に差し替えます。
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <a className="rounded-full bg-slate-950 px-4 py-2 text-white transition hover:bg-slate-800" href="mailto:your-email@example.com">
              Email
            </a>
            <a className="rounded-full border border-slate-300 px-4 py-2 text-slate-700 transition hover:border-slate-500 hover:text-slate-950" href="https://github.com/gong-cha2690" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="rounded-full border border-slate-300 px-4 py-2 text-slate-700 transition hover:border-slate-500 hover:text-slate-950" href="https://x.com/Gong_cha2690" target="_blank" rel="noreferrer">
              X
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
