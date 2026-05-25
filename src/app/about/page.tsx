import { PageHeader, PageShell, RetroCard, SectionLabel } from "../components/RetroLayout";

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
    <PageShell>
      <PageHeader label="About" title="自己紹介" description="自分について書くぞー！" />

      <section className="grid gap-4 md:grid-cols-3">
        {profileItems.map((item) => (
          <RetroCard key={item.label}>
            <SectionLabel>{item.label}</SectionLabel>
            <p className="mt-3 text-sm leading-6 text-[#5a4030]">{item.text}</p>
          </RetroCard>
        ))}
      </section>

      <RetroCard className="mt-10 p-8" tone="green">
        <h2 className="font-serif text-2xl font-bold tracking-normal">詳細</h2>
        <p className="mt-4 leading-7 text-[#4f3b32]">
          私は現在信州大学大学院にて三次元点群についての研究を行っています。研究では、特にフォトグラメトリを用いて点群を再構成した際に生じる欠損部について、補間を行う手法について提案しています。
          研究の内容や成果については、研究ページにまとめていく予定です。
          趣味というかただの好奇心とちょっとのスキルアップ願望を込めて、Web開発もやっています。絶賛勉強中ですが、Next.jsを使いこなしたいと考えています。Web開発については、プロジェクトや実装で工夫した点をProjectsページにまとめていく予定です。
        </p>
      </RetroCard>
    </PageShell>
  );
}
