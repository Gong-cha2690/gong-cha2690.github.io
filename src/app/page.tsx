export default function Home() {
  const profileHighlights = [
    "React / TypeScript を学習中",
    "研究内容をわかりやすく整理",
    "小さくても動く Web 体験を作る",
  ];

  const researchItems = [
    {
      title: "研究テーマ",
      detail: "何を課題にして、何を明らかにしたいのかを1〜2行でまとめる",
    },
    {
      title: "使った技術",
      detail: "実験、分析、可視化、システム実装などの担当範囲を記載する",
    },
    {
      title: "成果",
      detail: "数値、学会発表、発見、改善点を見出し付きで整理する",
    },
  ];

  const webSkills = [
    "React のコンポーネント設計",
    "TypeScript での型付けと保守性",
    "Node.js を使った API / 簡易バックエンド",
    "UI を整えるための Tailwind CSS",
  ];

  const blogPosts = [
    {
      title: "学習ログ",
      summary: "詰まった点、解決までの流れ、次に試すことを書く",
    },
    {
      title: "技術メモ",
      summary: "React、TypeScript、Node.js の小さな知見を残す",
    },
    {
      title: "制作記録",
      summary: "何を作り、どこで迷い、どう直したかを整理する",
    },
  ];

  return (
    <main className="min-h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-fixed text-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Portfolio Draft
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              あなたの名前
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              就活用に、自己紹介・研究・Web開発・Blog・連絡先を1ページにまとめる土台です。
            </p>
          </div>

          <nav className="flex flex-wrap gap-3 text-sm font-medium text-slate-600">
            <a href="#about" className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-slate-400 hover:text-slate-900">
              自己紹介
            </a>
            <a href="#research" className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-slate-400 hover:text-slate-900">
              研究
            </a>
            <a href="#web" className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-slate-400 hover:text-slate-900">
              Web開発
            </a>
            <a href="#blog" className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-slate-400 hover:text-slate-900">
              Blog
            </a>
            <a href="#contact" className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-slate-400 hover:text-slate-900">
              連絡先
            </a>
          </nav>
        </header>

        <section className="grid gap-6 py-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] p-8 shadow-sm sm:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-slate-900/5 blur-3xl" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              はじめに
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              学んでいることと、作れるものを見せるためのポートフォリオ
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              まずは「何者か」「何に取り組んでいるか」「どんな技術を使えるか」が一目で伝わる構成にします。あとから作品や記事を増やしやすい土台を優先すると続けやすいです。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {profileHighlights.map((item) => (
                <span key={item} className="rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                まず決めること
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-900">
                内容はこれで十分
              </p>
            </div>
            <ul className="space-y-3 text-sm leading-6 text-slate-600">
              <li>・自己紹介</li>
              <li>・研究内容</li>
              <li>・Web開発で作ったもの</li>
              <li>・Blog や学習ログ</li>
              <li>・連絡先</li>
            </ul>
            <div className="rounded-2xl bg-slate-950 p-4 text-sm text-slate-100">
              <p className="font-semibold">迷ったらここから始める</p>
              <p className="mt-2 leading-6 text-slate-300">
                ひとまず完成度より、更新しやすさと見やすさを優先します。
              </p>
            </div>
          </aside>
        </section>

        <section id="about" className="grid gap-6 border-t border-slate-200 py-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              01
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">自己紹介</h2>
          </div>
          <div className="space-y-4 text-slate-700">
            <p className="leading-7">
              ここには学部・学科、興味のある分野、どんな方向に進みたいかを素直に書きます。長文よりも、読み手がすぐ把握できる短い文章が向いています。
            </p>
            <p className="leading-7">
              例としては「React と TypeScript を使った UI 開発に興味があります」「研究ではデータの可視化や分析をしています」のような書き方です。
            </p>
          </div>
        </section>

        <section id="research" className="grid gap-6 border-t border-slate-200 py-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              02
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">研究</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {researchItems.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="web" className="grid gap-6 border-t border-slate-200 py-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              03
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Web開発</h2>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-slate-100 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              入れると強い要素
            </p>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {webSkills.map((skill) => (
                <li key={skill} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-200">
                  {skill}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-slate-300">
              作品は「何を作ったか」だけでなく、「どの技術を使って」「どこを工夫したか」まで書くと、就活で伝わりやすくなります。
            </p>
          </div>
        </section>

        <section id="blog" className="grid gap-6 border-t border-slate-200 py-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              04
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Blog</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Article
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{post.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-6 border-t border-slate-200 py-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              05
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">連絡先</h2>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">今の段階では仮で大丈夫</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                GitHub / Mail / SNS を並べる
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                後でリンク先を差し替えやすいように、まずは場所だけ作っておきます。
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-medium">
              <a className="rounded-full bg-slate-950 px-4 py-2 text-white transition hover:bg-slate-800" href="mailto:your-email@example.com">
                Email
              </a>
              <a className="rounded-full border border-slate-300 px-4 py-2 text-slate-700 transition hover:border-slate-500 hover:text-slate-950" href="https://github.com/your-id" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="rounded-full border border-slate-300 px-4 py-2 text-slate-700 transition hover:border-slate-500 hover:text-slate-950" href="https://x.com/your-id" target="_blank" rel="noreferrer">
                X
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-auto border-t border-slate-200 py-6 text-sm text-slate-500">
          <p>この土台に、あとから作品と記事を追加していけば十分に強いポートフォリオになります。</p>
        </footer>
      </div>
    </main>
  );
}
