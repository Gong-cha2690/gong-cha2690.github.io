import { PageHeader, PageShell, RetroCard } from "../components/RetroLayout";

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
    <PageShell>
      <PageHeader
        label="Projects"
        title="Web開発で作ったもの"
        description="作品ページでは「何を作ったか」だけでなく、「なぜ作ったか」「どの技術を使ったか」「どこを工夫したか」を書くと強くなります。"
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
