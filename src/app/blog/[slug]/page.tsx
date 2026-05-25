import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell, RetroCard, SectionLabel } from "../../components/RetroLayout";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <PageShell backHref="/blog" backLabel="Blogトップへ戻る">
      <article className="py-10">
        <SectionLabel>{post.date}</SectionLabel>
        <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold tracking-normal text-[#241711] sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-[#5a4030]">
          {post.description}
        </p>

        <RetroCard className="mt-8 p-8">
          <div className="space-y-5 text-base leading-8 text-[#5a4030]">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Link
            href="/blog"
            className="mt-8 inline-block border-2 border-[#241711] bg-[#c8d6c1] px-5 py-3 text-sm font-semibold text-[#241711] shadow-[4px_4px_0_#241711] transition hover:-translate-y-0.5"
          >
            記事一覧へ戻る
          </Link>
        </RetroCard>
      </article>
    </PageShell>
  );
}
