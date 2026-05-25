import Link from "next/link";
import { PageHeader, PageShell, RetroCard, SectionLabel } from "../components/RetroLayout";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <PageShell>
      <PageHeader
        label="Blog"
        title="日々の日記と学習ログ"
        description="Blogは完璧な記事でなくて大丈夫です。詰まったこと、調べたこと、解決したことを残すだけで、学習の過程が伝わります。"
      />

      <section>
        <SectionLabel>記事一覧</SectionLabel>

        <div className="mt-5 grid gap-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <RetroCard className="transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0_#7a252b]">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7a252b]">
                  {post.date}
                </p>
                <h2 className="mt-3 font-serif text-2xl font-bold tracking-normal text-[#241711]">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#5a4030]">
                  {post.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-[#7a252b] underline underline-offset-4 group-hover:text-[#241711]">
                  読む
                </p>
              </RetroCard>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
