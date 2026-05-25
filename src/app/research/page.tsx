import { PageHeader, PageShell, RetroCard, SectionLabel } from "../components/RetroLayout";

const overviewCards = [
  {
    label: "テーマ",
    title: "フォトグラメトリ点群の欠損部補間",
    text: "写真から生成した三次元点群に生じる欠損、とくに単色の壁面や天井のような特徴点が少ない平面領域を、平面推定によって補間する研究です。",
  },
  {
    label: "目的",
    title: "計測・解析に使いやすい点群へ",
    text: "欠損の多い点群をそのまま使うと、寸法計測や構造解析の精度に影響します。本研究では、欠損部を補間することで、実務で扱いやすい点群データに近づけることを目指しました。",
  },
  {
    label: "評価",
    title: "Ground Truth との定量比較",
    text: "レーザースキャナで取得した高密度な点群を Ground Truth とし、補間前後の点群を ICP で位置合わせしたうえで Precision、Recall、F1 スコアにより評価しました。",
  },
];

const keywords = [
  "三次元点群",
  "フォトグラメトリ",
  "SfM-MVS",
  "RANSAC",
  "Sliding Voxel",
  "PCL",
  "C++",
  "ICP",
  "F1-score",
  "Convex Hull",
  "Concave Hull",
];

const methodFlow = [
  "フォトグラメトリ点群を入力",
  "RANSAC または SlidingVoxel により平面を検出",
  "検出された平面から平面方程式と法線ベクトルを算出",
  "平面上に局所直交座標系を作成",
  "格子状に点を生成し、元の三次元座標系へ逆変換",
  "補間後点群を Ground Truth と比較して評価",
];

const algorithms = [
  {
    name: "RANSAC",
    summary: "ランダムに選んだ点から平面候補を作り、最も多くの点が乗る平面を推定する手法。",
    strong: "大規模な壁面のように、点数が多く広い平面を安定して検出できる。",
    weak: "小規模な面や複雑な形状では、十分なインライアを得にくく検出が難しい。",
  },
  {
    name: "SlidingVoxel",
    summary: "点群をボクセルに分割し、各局所領域の平面らしさを PCA によって評価する手法。",
    strong: "局所的に平面を検出できるため、RANSAC では拾いにくい小規模な面も検出できる。",
    weak: "欠損によってボクセルの連結が途切れると、本来同一の平面でも分断されやすい。",
  },
];

const experimentFacts = [
  {
    title: "入力データ",
    value: "Nikon Z7 で撮影した 215 枚の写真から MetaShape により生成",
  },
  {
    title: "元の点数",
    value: "2,853,234 点",
  },
  {
    title: "実験用点群",
    value: "整形・ダウンサンプリング後 641,208 点",
  },
  {
    title: "Ground Truth",
    value: "レーザー計測による 12,161,943 点の高密度点群",
  },
];

const results = [
  {
    title: "RANSAC の結果",
    text: "四方の壁面のような大規模な平面を安定して補間できました。床面を除いた評価では、4 面を検出し、合計約 65㎡ の補間を行いました。一方で、柱や天井のような比較的小さい平面は検出しづらい傾向がありました。",
  },
  {
    title: "SlidingVoxel の結果",
    text: "大規模な面だけでなく、小規模な平面も一部検出できました。床面を除いた評価では、10 面を検出し、合計約 49㎡ の補間を行いました。ただし、大きな壁面では補間が途切れる箇所が見られました。",
  },
  {
    title: "F1 スコアによる評価",
    text: "全体としては RANSAC が安定した F1 スコアを示しました。SlidingVoxel は許容距離が大きくなるにつれて RANSAC に近づき、小規模平面の検出という点で有効性が確認できました。",
  },
];

const improvements = [
  {
    title: "凸包・凹包による形状再現",
    text: "矩形で補間すると本来存在しない領域まで埋めてしまうため、インライア点群の外形に沿うように凸包・凹包を用いました。Precision は向上しましたが、補間面積が減るため Recall は低下しました。",
  },
  {
    title: "平面拡張による補間不足の改善",
    text: "SlidingVoxel では欠損により同一平面が分断されるため、検出した平面を一定範囲まで拡張し、他の面と交差する位置で打ち切る方法を検討しました。Recall は向上しましたが、小規模面では過剰補間が発生しました。",
  },
  {
    title: "得られた知見",
    text: "過剰補間を防ぐ手法と、欠損を広く埋める手法にはトレードオフがありました。大規模な面には平面拡張、小規模な面には凹包を使うなど、目的に応じた組み合わせが有効だと考えられます。",
  },
];

export default function ResearchPage() {
  return (
    <PageShell maxWidth="max-w-6xl">
      <PageHeader
        label="Research"
        title="平面推定に基づくフォトグラメトリ点群の欠損部補間"
        description="フォトグラメトリは、一般的なカメラ画像から三次元形状を復元できる手軽な手法です。一方で、単色の壁面や天井のように画像上の特徴点が少ない領域では、点群が大きく欠損することがあります。本研究では、室内点群を対象に平面検出アルゴリズムを用いて欠損部を補間し、Ground Truth との比較によって補間効果を定量的に評価しました。"
      />

      <div className="mb-10 flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <span
            key={keyword}
            className="border border-[#241711]/25 bg-[#f8ecd0] px-3 py-1 text-xs font-medium text-[#5a4030] shadow-[2px_2px_0_rgba(36,23,17,0.18)]"
          >
            {keyword}
          </span>
        ))}
      </div>

        <section className="grid gap-4 md:grid-cols-3">
          {overviewCards.map((card) => (
            <RetroCard key={card.title}>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#7a252b]">
                {card.label}
              </p>
              <h2 className="mt-3 font-serif text-xl font-bold text-[#241711]">
                {card.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#5a4030]">
                {card.text}
              </p>
            </RetroCard>
          ))}
        </section>

        <RetroCard className="mt-10 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>Problem</SectionLabel>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-normal">
                なぜ補間が必要なのか
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#5a4030]">
                レーザースキャナによる点群取得は高精度ですが、専用機材が必要でコストも高くなります。
                一方、フォトグラメトリは写真から点群を生成できるため導入しやすい反面、
                特徴点の少ない領域では点が生成されにくくなります。
                とくに白い壁のような単色平面では欠損が目立ち、後続の寸法計測や構造解析の信頼性に影響します。
              </p>
            </div>

            <div className="border-2 border-[#241711] bg-[#241711] p-6 text-[#f8ecd0] shadow-[4px_4px_0_#7a252b]">
              <h3 className="font-serif text-lg font-bold">研究で扱った課題</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#ead9b8]">
                <li>・フォトグラメトリ点群では壁面や天井に欠損が発生しやすい</li>
                <li>・欠損を埋めるだけでなく、過剰に存在しない面を作らない必要がある</li>
                <li>・補間結果を見た目だけでなく、Ground Truth と比較して定量評価する必要がある</li>
              </ul>
            </div>
          </div>
        </RetroCard>

        <section className="mt-10">
          <SectionLabel>Method</SectionLabel>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-normal">
            提案手法の流れ
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {methodFlow.map((step, index) => (
              <div
                key={step}
                className="border-2 border-[#241711]/80 bg-[#f8ecd0] p-5 shadow-[4px_4px_0_rgba(36,23,17,0.22)]"
              >
                <p className="text-sm font-bold text-[#7a252b]">
                  STEP {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#5a4030]">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          {algorithms.map((algorithm) => (
            <RetroCard key={algorithm.name}>
              <h2 className="font-serif text-2xl font-bold text-[#241711]">
                {algorithm.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#5a4030]">
                {algorithm.summary}
              </p>

              <div className="mt-5 grid gap-3">
                <div className="border border-[#241711]/25 bg-[#c8d6c1] p-4">
                  <p className="text-xs font-bold text-[#4f3b32]">
                    強み
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#241711]">
                    {algorithm.strong}
                  </p>
                </div>

                <div className="border border-[#241711]/25 bg-[#ead9b8] p-4">
                  <p className="text-xs font-bold text-[#7a252b]">
                    課題
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#241711]">
                    {algorithm.weak}
                  </p>
                </div>
              </div>
            </RetroCard>
          ))}
        </section>

        <RetroCard className="mt-10 p-6 sm:p-8">
          <SectionLabel>Experiment</SectionLabel>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-normal">
            実験条件
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {experimentFacts.map((fact) => (
              <div
                key={fact.title}
                className="border border-[#241711]/25 bg-[#ead9b8] p-5"
              >
                <p className="text-sm font-bold text-[#7a252b]">
                  {fact.title}
                </p>
                <p className="mt-2 text-base font-semibold text-[#241711]">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-[#5a4030]">
            評価では、補間後の点群と Ground Truth 点群を ICP によって位置合わせし、
            各点が一定距離内に対応点を持つかどうかで Precision、Recall、F1 スコアを算出しました。
            床面はもともと木目により特徴点が多く、また Ground Truth 側にも測量機材周辺の欠損があるため、
            評価時には床面を除外しました。
          </p>
        </RetroCard>

        <section className="mt-10">
          <SectionLabel>Result</SectionLabel>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-normal">
            実験結果と考察
          </h2>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {results.map((result) => (
              <RetroCard key={result.title}>
                <h3 className="font-serif text-xl font-bold text-[#241711]">
                  {result.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5a4030]">
                  {result.text}
                </p>
              </RetroCard>
            ))}
          </div>
        </section>

        <RetroCard className="mt-10 p-6 sm:p-8" tone="dark">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c8d6c1]">
            Improvement
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-normal">
            改良手法の検討
          </h2>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {improvements.map((item) => (
              <article
                key={item.title}
                className="border border-[#f8ecd0]/25 bg-[#f8ecd0]/10 p-5"
              >
                <h3 className="font-serif text-lg font-bold text-[#f8ecd0]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#ead9b8]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </RetroCard>

        <RetroCard className="mt-10 p-6 sm:p-8">
          <SectionLabel>Conclusion</SectionLabel>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-normal">
            まとめ
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-7 text-[#5a4030]">
            <p>
              本研究では、フォトグラメトリによって生成された室内点群の欠損領域に対し、
              平面検出アルゴリズムを応用した補間手法を検討しました。
              RANSAC は大規模平面の安定した補間に有効であり、SlidingVoxel は小規模平面の検出に強みがあることが分かりました。
            </p>
            <p>
              また、SlidingVoxel の課題である過剰補間と補間不足に対して、
              凸包・凹包による形状再現と、平面拡張による網羅性向上を検討しました。
              その結果、補間の正確性と網羅性にはトレードオフがあり、
              目的に応じて手法を選択・組み合わせることが重要であると分かりました。
            </p>
          </div>
        </RetroCard>

        <RetroCard className="mt-10 p-6 sm:p-8" tone="green">
          <h2 className="font-serif text-2xl font-bold tracking-normal">
            今後の課題
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-[#4f3b32]">
            <li>・異なる撮影条件や点群密度を持つデータに対する評価</li>
            <li>・RANSAC や SlidingVoxel のパラメータ最適化</li>
            <li>・大規模平面と小規模平面で補間手法を切り替える処理</li>
            <li>・配管やコンプレッサーなど、円柱形状の検出・補間への拡張</li>
          </ul>
        </RetroCard>
    </PageShell>
  );
}
