import Link from "next/link";

type PageShellProps = {
  children: React.ReactNode;
  maxWidth?: "max-w-5xl" | "max-w-6xl";
  backHref?: string;
  backLabel?: string;
};

type PageHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

type RetroCardProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "green" | "dark";
};

function joinClasses(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function PageShell({
  children,
  maxWidth = "max-w-5xl",
  backHref = "/",
  backLabel = "トップへ戻る",
}: PageShellProps) {
  return (
    <main className="relative min-h-screen bg-[#ead9b8] text-[#241711]">
      <div className="retro-paper fixed inset-0 opacity-90" />
      <div
        className="fixed inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(120,37,43,0.12) 0, rgba(120,37,43,0.12) 1px, transparent 1px, transparent 96px), linear-gradient(0deg, rgba(36,23,17,0.08) 0, rgba(36,23,17,0.08) 1px, transparent 1px, transparent 32px)",
        }}
      />

      <div
        className={joinClasses(
          "relative z-10 mx-auto w-full px-6 py-8 sm:px-10 lg:px-12",
          maxWidth,
        )}
      >
        <Link
          href={backHref}
          className="inline-block border border-[#241711]/30 bg-[#f8ecd0]/75 px-4 py-2 text-sm font-semibold text-[#4f3b32] shadow-[2px_2px_0_rgba(36,23,17,0.22)] transition hover:-translate-y-0.5 hover:border-[#7a252b] hover:text-[#7a252b]"
        >
          {backLabel}
        </Link>

        {children}
      </div>
    </main>
  );
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="py-10">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#7a252b]">
        {label}
      </p>
      <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold tracking-normal text-[#241711] sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 max-w-3xl text-base leading-7 text-[#5a4030]">
          {description}
        </p>
      ) : null}
    </section>
  );
}

export function RetroCard({
  children,
  className,
  tone = "paper",
}: RetroCardProps) {
  const toneClass = {
    paper: "bg-[#f8ecd0]",
    green: "bg-[#c8d6c1]",
    dark: "bg-[#241711] text-[#f8ecd0]",
  }[tone];

  return (
    <article
      className={joinClasses(
        "border-2 border-[#241711] p-6 shadow-[6px_6px_0_rgba(36,23,17,0.25)]",
        toneClass,
        className,
      )}
    >
      {children}
    </article>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7a252b]">
      {children}
    </p>
  );
}
