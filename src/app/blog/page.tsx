import Link from "next/link";

const posts = [
  {
    date: "2026-05-22",
    title: "ポートフォリオサイトを作った",
    href: "/blog/20260522",
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto w-full max-w-5xl px-6 py-8 sm:px-10 lg:px-12">
        <Link href="/" className="text-sm font-semibold text-slate-600 underline underline-offset-4">
          トップへ戻る
        </Link>

        <section className="py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Blog
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            日々の日記と学習ログ
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700">
            Blogは完璧な記事でなくて大丈夫です。詰まったこと、調べたこと、解決したことを残すだけで、学習の過程が伝わります。
          </p>
        </section>

        <section>
          <h2>記事一覧</h2>

            <div>
              {posts.map((post) => (
                <Link 
                  key={post.href}
                  href={post.href}
                  className="block rounded-2xl border border-red-200 bg-white p-4 transition hover:border-red-400 hover:bg-red-50"
                >
                  <span>{post.date}</span>
                  <span>{post.title}</span>
                </Link>
              ))}
            </div>
        </section>
      
      </div>
    </main>
  );
}
