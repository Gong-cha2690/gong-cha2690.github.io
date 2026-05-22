import Link from "next/link";

const projectDrafts = [
  {
    title: "ポートフォリオサイト",
    stack: "Next.js / React / TypeScript / Tailwind CSS",
    text: "このサイト自体を制作物として扱い、設計、実装、公開までの流れを説明します。",
  },
  {
    title: "研究可視化ツール",
    stack: "これから追加",
    text: "研究データや実験結果を見やすくする小さなWebツールを作る候補です。",
  },
  {
    title: "学習用ミニアプリ",
    stack: "これから追加",
    text: "Reactの状態管理やコンポーネント分割を練習するための小さな制作物を置きます。",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto w-full max-w-5xl px-6 py-8 sm:px-10 lg:px-12">
        <Link href="/" className="text-sm font-semibold text-slate-600 underline underline-offset-4">
          トップへ戻る
        </Link>

        <section className="py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Projects
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Web開発で作ったもの
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700">
            作品ページでは「何を作ったか」だけでなく、「なぜ作ったか」「どの技術を使ったか」「どこを工夫したか」を書くと強くなります。
          </p>
        </section>

        <section className="grid gap-4">
          {projectDrafts.map((project) => (
            <article key={project.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">{project.stack}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{project.text}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
