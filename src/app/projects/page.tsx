import { PageHeader, PageShell, RetroCard } from "../components/RetroLayout";

const projectDrafts = [
  {
    title: "ポートフォリオサイト",
    stack: "Next.js / React / TypeScript / Tailwind CSS",
    text: "このサイト自体を制作物として扱い、設計、実装、公開までの流れを説明します。",
  },
  {
    title: "研究可視化",
    stack: "これから追加",
    text: "研究のレジュメや発表資料ベタ乗せは、見た目が悪そうなのでうまいこと可視化して見せたい。",
  },
  {
    title: "バンド活動",
    stack: "これから追加",
    text: "軽音楽部としての活動で自分がかっこいい演奏を見せびらかす。",
  },
];

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        label="Projects"
        title="生み出したもの"
        description="自分で生み出したものについて紹介します。"
      />

      <section className="grid gap-4">
        {projectDrafts.map((project) => (
          <RetroCard key={project.title}>
            <p className="text-sm font-bold text-[#7a252b]">{project.stack}</p>
            <h2 className="mt-2 font-serif text-2xl font-bold tracking-normal">
              {project.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5a4030]">{project.text}</p>
          </RetroCard>
        ))}
      </section>
    </PageShell>
  );
}
