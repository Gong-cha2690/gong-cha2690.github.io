import Link from "next/link";

const sections = [
  {
    title: "背景",
    text: "3Dデータの一種である三次元点群は、レーザー測量とフォトグラメトリのいずれかの方法で取得される。\nレーザー測量は高精度だが測量に知識とコストが必要となる。一方で、フォトグラメトリは写真から3Dデータを生成する方法で、手軽に利用できるが、欠損が生じやすいという課題がある。",
  },
  {
    title: "目的",
    text: "特に特徴点が少ない単色の平坦な面について、大規模な欠落が生じることがあるため、これを補間する手法を提案する。\nまた、測量会社との共同研究であるため実際の現場の声を反映し、平面の検出から拡張し配管やコンプレッサーなどの円柱形状の検出について行っている。\nこれによりその後の寸法計測や構造解析の時間短縮と精度向上を目的としている。",
  },
  {
    title: "キーワード",
    text: "三次元点群, 3Dデータ, C++, PCL, 平面検出, RANSAC, Sliding Voxel, 円柱検出, 補間",
  },
  {
    title: "今後書くこと",
    text: "実験条件、比較手法、評価指標、うまくいった点、まだ課題として残っている点を追記します。",
  },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto w-full max-w-5xl px-6 py-8 sm:px-10 lg:px-12">
        <Link href="/" className="text-sm font-semibold text-slate-600 underline underline-offset-4">
          トップへ戻る
        </Link>

        <section className="py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Research
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            三次元点群データの欠損部補間
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700">
            フォトグラメトリによって得られた三次元点群データにおける欠損部補間手法の提案についてまとめるページです。最初は文章だけで大丈夫です。あとから図、実験結果、画像を足していきます。
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 whitespace-pre-wrap">{section.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-slate-100 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight">研究ページの書き方</h2>
          <ol className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            <li>1. 研究の背景を、専門外の人にもわかる言葉で書く</li>
            <li>2. 何を解決したいのかを1文で書く</li>
            <li>3. 手法を「入力、処理、出力」の順番で説明する</li>
            <li>4. 結果や考察は、画像や表を追加してから詳しくする</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
