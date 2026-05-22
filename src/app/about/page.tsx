import Link from "next/link";

const profileItems = [
  {
    label: "現在",
    text: "信州大学 大学院 総合理工学研究科 工学専攻 修士1年",
  },
  {
    label: "興味",
    text: "マルチメディア処理, 3Dデータ, Web開発, Next.jsなどを使ったUI開発",
  },
  {
    label: "目標",
    text: "研究で扱った論理的思考と、Web開発の実装力を組み合わせて伸ばしていくこと。",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto w-full max-w-5xl px-6 py-8 sm:px-10 lg:px-12">
        <Link href="/" className="text-sm font-semibold text-slate-600 underline underline-offset-4">
          トップへ戻る
        </Link>

        <section className="py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            About
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            自己紹介
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700">
            自分について書くぞー！
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {profileItems.map((item) => (
            <article key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">{item.label}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight">詳細</h2>
          <p className="mt-4 leading-7 text-slate-700">
            私は現在信州大学大学院にて三次元点群についての研究を行っています。研究では、特にフォトグラメトリを用いて点群を再構成した際に生じる欠損部について、補間を行う手法について提案しています。
            研究の内容や成果については、研究ページにまとめていく予定です。
            趣味というかただの好奇心とちょっとのスキルアップ願望を込めて、Web開発もやっています。絶賛勉強中ですが、Next.jsを使いこなしたいと考えています。Web開発については、プロジェクトや実装で工夫した点をProjectsページにまとめていく予定です。
          </p>
        </section>
      </div>
    </main>
  );
}
