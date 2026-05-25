import { PageHeader, PageShell, RetroCard } from "../components/RetroLayout";

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        label="Contact"
        title="連絡先"
        description="就活で使う場合は、採用担当者が確認しやすいリンクを置きます。メールアドレスは公開してよいものだけにしましょう。"
      />

      <RetroCard className="flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between" tone="green">
          <div>
            <h2 className="font-serif text-2xl font-bold tracking-normal">Links</h2>
            <p className="mt-3 text-sm leading-6 text-[#4f3b32]">
              後でメールアドレスやSNSを本物に差し替えます。
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <a className="border-2 border-[#241711] bg-[#7a252b] px-4 py-2 text-[#f8ecd0] shadow-[3px_3px_0_#241711] transition hover:-translate-y-0.5" href="mailto:your-email@example.com">
              Email
            </a>
            <a className="border-2 border-[#241711] bg-[#f8ecd0] px-4 py-2 text-[#241711] shadow-[3px_3px_0_#241711] transition hover:-translate-y-0.5" href="https://github.com/gong-cha2690" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="border-2 border-[#241711] bg-[#f8ecd0] px-4 py-2 text-[#241711] shadow-[3px_3px_0_#241711] transition hover:-translate-y-0.5" href="https://x.com/Gong_cha2690" target="_blank" rel="noreferrer">
              X
            </a>
          </div>
      </RetroCard>
    </PageShell>
  );
}
