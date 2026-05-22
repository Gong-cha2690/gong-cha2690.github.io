import Link from "next/link";

const navigationItems = [
  { href: "/about", label: "自己紹介" },
  { href: "/research", label: "研究" },
  { href: "/projects", label: "Web開発" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "連絡先" },
];

const profileHighlights = [
  "React / TypeScript を学習中",
  "研究内容をわかりやすく整理",
  "小さくても動く Web 体験を作る",
];

const pageCards = [
  {
    number: "01",
    title: "自己紹介",
    href: "/about",
    summary:
      "学部・学科、興味のある分野、これから伸ばしたい技術を短く整理します。",
  },
  {
    number: "02",
    title: "研究",
    href: "/research",
    summary:
      "フォトグラメトリで得られた三次元点群データの欠損部補間について、背景・手法・成果をまとめます。",
  },
  {
    number: "03",
    title: "Web開発",
    href: "/projects",
    summary:
      "Web開発に関するプロジェクトや、実装で工夫した点を整理します。",
  },
  {
    number: "04",
    title: "Blog",
    href: "/blog",
    summary:
      "詰まったこと、調べたこと、解決した流れの学習ログと日記",
  },
  {
    number: "05",
    title: "連絡先",
    href: "/contact",
    summary:
      "GitHub、メール、SNS など、採用担当者が次の行動を取りやすい情報を置きます。",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#ead9b8] text-[#241711]">
      <div className="retro-paper absolute inset-0 opacity-90" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(120,37,43,0.12)_0,_rgba(120,37,43,0.12)_1px,_transparent_1px,_transparent_96px),linear-gradient(0deg,_rgba(36,23,17,0.08)_0,_rgba(36,23,17,0.08)_1px,_transparent_1px,_transparent_32px)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex animate-fade-up flex-col gap-4 border-b-2 border-[#241711]/25 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#7a252b]">
              Portfolio
            </p>
            <h1 className="mt-2 font-serif text-3xl font-bold tracking-normal sm:text-4xl">
              ごんちゃのポートフォリオ
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5a4030] sm:text-base">
              トップページでは全体像を見せて、詳しい説明は別ページで読める構成にします。
            </p>
          </div>

          <nav className="flex flex-wrap gap-3 text-sm font-medium text-[#4f3b32]">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-[#241711]/30 bg-[#f8ecd0]/75 px-4 py-2 shadow-[2px_2px_0_rgba(36,23,17,0.22)] transition hover:-translate-y-0.5 hover:border-[#7a252b] hover:text-[#7a252b]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <section className="grid gap-6 py-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
          <div className="relative animate-fade-up overflow-hidden border-2 border-[#241711] bg-[#f8ecd0] p-8 shadow-[10px_10px_0_#7a252b] sm:p-10">
            <div className="halftone-stamp absolute -right-8 -top-8 h-40 w-40 opacity-20" />
            <div className="absolute right-6 top-6 border-2 border-[#241711] bg-[#c8d6c1] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#241711]">
              Draft
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#7a252b]">
              はじめに
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-bold tracking-normal text-[#241711] sm:text-6xl">
              学んでいることと、取り組んできたことを伝える入口
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5a4030] sm:text-lg">
              まずは「誰なのか」「何に取り組んでいるのか」「どんな技術を学んでいるのか」がすぐ伝わるようにします。詳しい研究説明や制作物は別ページに分けて、読みたい人が深く読める形にします。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {profileHighlights.map((item) => (
                <span
                  key={item}
                  className="border border-[#241711]/25 bg-[#ead9b8] px-4 py-2 text-sm font-medium text-[#5a4030]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/research"
                className="border-2 border-[#241711] bg-[#7a252b] px-5 py-3 text-sm font-semibold text-[#f8ecd0] shadow-[4px_4px_0_#241711] transition hover:-translate-y-0.5"
              >
                研究を見る
              </Link>
              <Link
                href="/projects"
                className="border-2 border-[#241711] bg-[#c8d6c1] px-5 py-3 text-sm font-semibold text-[#241711] shadow-[4px_4px_0_#241711] transition hover:-translate-y-0.5"
              >
                制作物を見る
              </Link>
            </div>
          </div>

          <aside className="animate-float-slow grid gap-4 border-2 border-[#241711] bg-[#c8d6c1] p-8 shadow-[8px_8px_0_#241711]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7a252b]">
                作っていく順番
              </p>
              <p className="mt-3 font-serif text-xl font-bold text-[#241711]">
                まずは研究ページからでOK
              </p>
            </div>
            <ol className="space-y-3 text-sm leading-6 text-[#5a4030]">
              <li>1. 研究の背景と目的を書く</li>
              <li>2. 手法を図や箇条書きで整理する</li>
              <li>3. Web制作物を1つずつ追加する</li>
              <li>4. 学習ログをBlogとして残す</li>
            </ol>
            <Link
              href="/research"
              className="border-2 border-[#241711] bg-[#f8ecd0] px-4 py-3 text-center text-sm font-semibold text-[#241711] transition hover:bg-[#fff8ea]"
            >
              研究ページから書く
            </Link>
          </aside>
        </section>

        <section className="grid gap-4 border-t-2 border-[#241711]/25 py-10 md:grid-cols-2">
          {pageCards.map((card) => (
            <article
              key={card.href}
              className="group flex min-h-56 flex-col border-2 border-[#241711]/80 bg-[#f8ecd0] p-6 shadow-[6px_6px_0_rgba(36,23,17,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_#7a252b]"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7a252b]">
                {card.number}
              </p>
              <h2 className="mt-3 font-serif text-2xl font-bold tracking-normal text-[#241711]">
                {card.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#5a4030]">
                {card.summary}
              </p>
              <Link
                href={card.href}
                className="mt-auto pt-6 text-sm font-semibold text-[#7a252b] underline underline-offset-4 transition group-hover:text-[#241711]"
              >
                詳しく見る
              </Link>
            </article>
          ))}
        </section>

        <footer className="mt-auto border-t-2 border-[#241711]/25 py-6 text-sm text-[#5a4030]">
          <p>この土台に、あとから作品と記事を追加していけば十分に強いポートフォリオになります。</p>
        </footer>
      </div>
    </main>
  );
}
