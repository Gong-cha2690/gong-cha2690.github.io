# 技術学習メモ

このファイルは、このポートフォリオ制作を通して TypeScript、React、Next.js、Node.js 周辺を学ぶためのメモです。

## まず理解したい全体像

このプロジェクトは Next.js で作っています。Next.js は React を土台にしたフレームワークです。

大まかな関係はこうです。

```txt
Node.js
  JavaScript / TypeScript をPC上で動かすための実行環境

React
  画面を部品ごとに作るためのライブラリ

Next.js
  Reactを使って、ページ分け・ビルド・公開をしやすくするフレームワーク

TypeScript
  JavaScriptに型をつけて、ミスを見つけやすくする言語
```

## このプロジェクトでの重要ファイル

```txt
src/app/page.tsx
  トップページ

src/app/layout.tsx
  全ページ共通の土台

src/app/globals.css
  全ページ共通のCSS

src/app/blog/page.tsx
  Blog一覧ページ

src/app/blog/[slug]/page.tsx
  Blog記事の詳細ページ。slugごとに同じテンプレートで表示する

src/lib/posts.ts
  Blog記事データと記事取得関数

src/app/components/RetroLayout.tsx
  下層ページ共通のレトロ風レイアウトコンポーネント

src/app/components/SmoothSnap.tsx
  トップページのスクロール演出用コンポーネント

next.config.ts
  Next.jsの設定

package.json
  使用ライブラリやコマンドの設定
```

## Reactで学ぶこと

Reactでは、画面を「コンポーネント」という部品に分けて作ります。

例:

```tsx
export default function Home() {
  return (
    <main>
      <h1>ごんちゃのポートフォリオ</h1>
    </main>
  );
}
```

ここでのポイント:

```txt
function Home()
  Homeというコンポーネントを作っている

return (...)
  画面に表示したいHTMLっぽいものを返している

export default
  このファイルの代表として外に渡している
```

## JSX / TSX

`.tsx` ファイルでは、TypeScriptの中にHTMLのような書き方ができます。

```tsx
<h1 className="text-3xl">タイトル</h1>
```

注意点:

```txt
HTMLの class
  Reactでは className と書く

JavaScriptの値を表示する
  { } を使う
```

例:

```tsx
const title = "研究";

<h1>{title}</h1>
```

## 配列と map

トップページやBlog一覧では、配列を使って同じ形の表示を繰り返しています。

例:

```tsx
const posts = [
  {
    slug: "20260522",
    date: "2026-05-22",
    title: "ポートフォリオサイトを作った",
  },
];
```

これを画面に出すときは `map` を使います。

```tsx
{posts.map((post) => (
  <Link key={post.slug} href={`/blog/${post.slug}`}>
    {post.title}
  </Link>
))}
```

ここでのポイント:

```txt
posts.map(...)
  postsの中身を1つずつ取り出して表示する

post
  取り出した1件分の記事データ

key
  Reactが一覧を管理するために必要な目印

href
  クリックしたときに移動するURL

`/blog/${post.slug}`
  slugから記事ページのURLを作っている
```

## TypeScriptで学ぶこと

TypeScriptは「この値は文字列」「この値は数値」のように型を扱います。

例:

```tsx
type SmoothSnapProps = {
  children: React.ReactNode;
  className?: string;
};
```

意味:

```txt
type SmoothSnapProps
  SmoothSnapコンポーネントが受け取るpropsの形

children: React.ReactNode
  中に入るReact要素

className?: string
  classNameは文字列。? があるので省略可能
```

## React Hooks

[src/app/components/SmoothSnap.tsx](src/app/components/SmoothSnap.tsx) では React Hooks を使っています。

主に使っているもの:

```txt
useState
  画面の状態を管理する

useRef
  再描画しても残したい値を持つ

useEffect
  画面表示後にイベント登録などを行う
```

例:

```tsx
const [pageIndex, setPageIndex] = useState(0);
```

意味:

```txt
pageIndex
  今どの画面を表示しているか

setPageIndex
  pageIndexを変更する関数

useState(0)
  最初は0番目の画面から始める
```

## Next.jsのページ構造

Next.jsでは、`src/app` の中のフォルダ構造がURLになります。

```txt
src/app/page.tsx
  /

src/app/about/page.tsx
  /about

src/app/research/page.tsx
  /research

src/app/blog/page.tsx
  /blog

src/app/blog/[slug]/page.tsx
  /blog/20260522 など
```

つまり、新しいページを作りたいときは:

```txt
src/app/ページ名/page.tsx
```

を作ります。

ただし、Blog記事のように同じ形のページをたくさん作りたい場合は、毎回 `page.tsx` を増やすより、動的ルーティングを使う方が管理しやすいです。

## 今回やった大きな変更

今回の変更では、主に2つの整理をしました。

```txt
1. レイアウトの共通化
2. Blog記事ページの動的ルーティング化
```

これによって、ページごとに同じ見た目のコードを何度も書かなくてよくなり、Blog記事も1つのテンプレートで表示できるようになりました。

## レイアウトのコンポーネント化

トップページのデザインは、レトロな紙面風の背景、太い線、影、えんじ色のアクセントが特徴です。

最初は各ページがそれぞれ別々に `bg-slate-50` や `rounded-3xl` などを持っていました。これだと、全体の見た目を変えたいときに複数ファイルを直す必要があります。

そこで [src/app/components/RetroLayout.tsx](src/app/components/RetroLayout.tsx) を作り、共通の見た目をコンポーネント化しました。

主なコンポーネント:

```txt
PageShell
  ページ全体の背景、紙っぽいテクスチャ、横幅、余白、「トップへ戻る」リンクをまとめる

PageHeader
  各ページのラベル、タイトル、説明文を同じ見た目で表示する

RetroCard
  太い枠線、紙色、影を持つカードを作る

SectionLabel
  小さな英字ラベルやセクション名を同じ見た目で表示する
```

例えば Blog一覧ページでは、こう使っています。

```tsx
<PageShell>
  <PageHeader
    label="Blog"
    title="日々の日記と学習ログ"
    description="..."
  />

  <section>
    <SectionLabel>記事一覧</SectionLabel>
    ...
  </section>
</PageShell>
```

この形にしたメリット:

```txt
下層ページの見た目をトップページに揃えやすい
同じTailwindクラスを何度も書かなくてよい
背景色やカードの影を変えたいときに修正箇所が少ない
About / Blog / Projects / Contact / Research の構造が読みやすい
```

## Blog構成の変更

以前は、記事ごとにこのようなファイルを作る想定でした。

```txt
src/app/blog/page.tsx
  /blog

src/app/blog/20260522/page.tsx
  /blog/20260522
```

この方法でも動きますが、記事が増えるたびに `src/app/blog/日付/page.tsx` を作る必要があります。

そこで、今はこういう構成に変更しました。

```txt
src/app/blog/page.tsx
  Blog一覧ページ

src/app/blog/[slug]/page.tsx
  Blog詳細ページのテンプレート

src/lib/posts.ts
  Blog記事データと取得関数
```

`[slug]` は Next.js の Dynamic Routes です。

```txt
/blog/20260522
  slug = "20260522"

/blog/nextjs-layout
  slug = "nextjs-layout"
```

つまり、URLの一部を変数のように扱えます。

## posts.ts の役割

[src/lib/posts.ts](src/lib/posts.ts) には、記事データと取得用の関数を置いています。

記事データの型:

```ts
export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  description: string;
  body: string[];
};
```

意味:

```txt
slug
  URLに使う文字列。/blog/20260522 の 20260522 にあたる

date
  記事の日付

title
  記事タイトル

description
  一覧や記事冒頭に出す短い説明

body
  記事本文。今は段落ごとの文字列配列
```

取得関数:

```ts
getAllPosts()
  一覧ページ用。すべての記事を日付順で返す

getPostBySlug(slug)
  詳細ページ用。slugに一致する記事を1件返す

getAllPostSlugs()
  generateStaticParams用。静的生成するslug一覧を返す
```

重要なのは、ページ側が直接 `posts` 配列を触らず、関数経由で記事を取得していることです。

これにより、将来 MDX に移行しても、ページ側を大きく変えずに済みます。

## Blog一覧ページ

[src/app/blog/page.tsx](src/app/blog/page.tsx) は記事一覧ページです。

今はこのように記事一覧を取得しています。

```tsx
const posts = getAllPosts();
```

そして `map` で一覧表示します。

```tsx
{posts.map((post) => (
  <Link key={post.slug} href={`/blog/${post.slug}`}>
    ...
  </Link>
))}
```

ポイント:

```txt
post.slug
  Reactのkeyにも、URLにも使っている

href={`/blog/${post.slug}`}
  slugから記事詳細ページへのリンクを作っている
```

## Blog詳細ページ

[src/app/blog/[slug]/page.tsx](src/app/blog/[slug]/page.tsx) は、すべての記事詳細ページで共通して使うテンプレートです。

重要な部分:

```tsx
type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};
```

Next.js 16 の App Router では、`params` は Promise として渡されます。

そのため、ページ内ではこう書きます。

```tsx
const { slug } = await params;
const post = getPostBySlug(slug);
```

存在しない記事だった場合:

```tsx
if (!post) {
  notFound();
}
```

`notFound()` を呼ぶと、Next.js の 404 ページに移動します。

## generateStaticParams

このプロジェクトは GitHub Pages に公開するため、`next.config.ts` で `output: "export"` を使っています。

GitHub Pages は静的ファイルを公開する場所なので、動的なURLもビルド時にあらかじめ作っておく必要があります。

そのために `[slug]/page.tsx` で `generateStaticParams()` を使っています。

```tsx
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({
    slug,
  }));
}
```

これにより、例えば `posts.ts` に `slug: "20260522"` の記事があれば、ビルド時に `/blog/20260522` が静的ページとして生成されます。

さらに:

```tsx
export const dynamicParams = false;
```

も入れています。

これは:

```txt
generateStaticParams() で作られていないslugにはアクセスさせない
存在しないslugは404にする
```

という意味です。

GitHub Pages / static export では、サーバーで後からページを作ることができないため、この設定にしておくと問題が出にくいです。

## Blog記事の追加方法

今の構成で新しいBlog記事を追加するときは、`page.tsx` を増やしません。

[src/lib/posts.ts](src/lib/posts.ts) の `posts` 配列に、記事オブジェクトを1つ追加します。

例:

```ts
{
  slug: "20260525",
  date: "2026-05-25",
  title: "Dynamic Routesを学んだ",
  description: "Next.js App Router の [slug] と generateStaticParams を整理した記録です。",
  body: [
    "今日は Next.js の Dynamic Routes を学んだ。",
    "slug を使うことで、1つのテンプレートから複数の記事ページを作れることが分かった。",
  ],
}
```

追加後に確認すること:

```bash
pnpm lint
pnpm build
```

`pnpm build` の結果に、追加した記事のパスが出ていればOKです。

例:

```txt
● /blog/[slug]
  ├ /blog/20260522
  └ /blog/20260525
```

## 将来 MDX に移行する場合

今は記事本文を `posts.ts` の `body: string[]` に直接書いています。

将来的には、記事ごとに `.mdx` ファイルを作る構成にできます。

イメージ:

```txt
content/blog/20260522.mdx
content/blog/20260525.mdx
```

MDXに移行するとき、主に変える場所:

```txt
src/lib/posts.ts
  posts配列をやめて、content/blog/*.mdx を読み込む処理にする

src/app/blog/[slug]/page.tsx
  post.body の表示部分を、MDX本文の表示に変える
```

逆に、できるだけ変えずに済ませたい場所:

```txt
src/app/blog/page.tsx
  getAllPosts() を呼ぶだけにしておけば、大きく変えなくてよい

generateStaticParams()
  getAllPostSlugs() を呼ぶ形のままなら、大きく変えなくてよい
```

このため、今の段階で `getAllPosts()` や `getPostBySlug()` のような関数を作っておくことには意味があります。

## Link

Next.jsではページ移動に `Link` を使います。

```tsx
import Link from "next/link";

<Link href="/research">研究を見る</Link>
```

普通の `<a>` よりも、Next.js内のページ移動に向いています。

## Node.js / pnpm

このプロジェクトでは、Node.js上で Next.js を動かしています。

よく使うコマンド:

```bash
pnpm dev
```

ローカル開発サーバーを起動します。

```bash
pnpm lint
```

コードの書き方に問題がないか確認します。

```bash
pnpm build
```

公開用にビルドできるか確認します。

## push と deploy の関係

このプロジェクトでは、`git push` と `deploy` は同じ意味ではありません。

ただし、今の設定では `push` をきっかけに自動で `deploy` が始まるようになっています。

流れはこうです。

```txt
自分のPCでコードを書く
  ↓
git add / git commit
  ↓
git push
  ↓
GitHubにコードが送られる
  ↓
GitHub Actionsが自動で動く
  ↓
pnpm install
  ↓
pnpm build
  ↓
outフォルダが作られる
  ↓
GitHub Pagesに公開される
```

つまり:

```txt
push
  GitHubにコードを送ること

deploy
  実際にWebサイトとして公開すること
```

です。

今は `.github/workflows/deploy.yml` によって、`push` のあとに `deploy` が自動で続くようになっています。

## このプロジェクトはVercelではなくGitHub Pages

Next.jsの公開方法としては、Vercelを使う方法がよく紹介されます。

VercelはNext.jsを作っている会社のサービスなので、Next.jsとの相性がとても良いです。サーバー側の処理、API、画像最適化なども扱いやすいです。

一方で、このプロジェクトは今のところ GitHub Pages に公開する構成です。

理由は、`next.config.ts` にこの設定があるからです。

```ts
const nextConfig = {
  output: "export",
};
```

`output: "export"` は、Next.jsのサイトを静的ファイルとして書き出す設定です。

静的ファイルとは、ざっくり言うと:

```txt
HTML
CSS
JavaScript
画像
```

だけで表示できるファイルのことです。

GitHub Pagesは、基本的にこのような静的ファイルを公開する場所です。

## GitHub Actionsがしていること

`.github/workflows/deploy.yml` が、自動公開の手順書です。

重要な部分はここです。

```yml
on:
  push:
    branches:
      - main
```

これは:

```txt
mainブランチにpushされたら、この処理を動かす
```

という意味です。

次に、依存関係を入れます。

```yml
run: pnpm install --frozen-lockfile
```

これは GitHub の中に用意された仮想環境で、必要なライブラリをインストールしています。

次に、ビルドします。

```yml
run: pnpm build
```

このとき、`next.config.ts` の `output: "export"` によって、公開用の `out` フォルダが作られます。

最後に、その `out` フォルダを GitHub Pages に渡します。

```yml
uses: actions/upload-pages-artifact@v4
with:
  path: out
```

```yml
uses: actions/deploy-pages@v4
```

つまり、GitHub Actionsは:

```txt
GitHub上で自動的にコマンドを実行してくれる仕組み
```

です。

## Vercelを使う場合との違い

今の構成:

```txt
Next.js
  ↓
next build
  ↓
outフォルダ
  ↓
GitHub Actions
  ↓
GitHub Pages
```

Vercelを使う場合:

```txt
Next.js
  ↓
GitHubにpush
  ↓
Vercelが自動でビルド
  ↓
Vercel上で公開
```

Vercelの方がNext.jsの機能を広く使いやすいです。

ただし、このポートフォリオのように:

```txt
自己紹介ページ
研究ページ
Blogの静的な記事
作品紹介
連絡先
```

を公開するだけなら、GitHub Pagesでも十分です。

今の自分の理解としては:

```txt
Vercel
  Next.jsの機能をフルに使いやすい公開サービス

GitHub Pages
  静的に書き出したサイトを無料で公開しやすい場所

GitHub Actions
  push後にビルドや公開作業を自動化する仕組み
```

です。

## 今の公開構成で気をつけること

GitHub Pages構成では、サーバーが必要な機能は使いにくいです。

たとえば:

```txt
サーバー側で毎回データを取得する処理
ログイン機能
フォーム送信をサーバーで受け取る処理
API Routeを本格的に使う構成
```

などは、GitHub Pagesだけでは難しくなります。

一方で、今のポートフォリオでは:

```txt
ページを作る
文章を書く
画像を置く
リンクを貼る
静的なBlog記事を増やす
```

が中心なので、GitHub Pagesで進めて問題ありません。

## 今後の学習順

1. `src/app/page.tsx` を読んで、Reactのコンポーネントに慣れる
2. `pageCards.map(...)` を見て、配列とmapを理解する
3. `src/app/components/RetroLayout.tsx` を見て、共通レイアウトの考え方を理解する
4. `src/app/blog/page.tsx` と `src/app/blog/[slug]/page.tsx` を見て、一覧から詳細ページへ移動する仕組みを理解する
5. `src/lib/posts.ts` を見て、データと画面を分ける考え方を理解する
6. `SmoothSnap.tsx` を見て、`useState`、`useRef`、`useEffect` を少しずつ理解する
7. `pnpm lint` と `pnpm build` を実行して、エラーの読み方に慣れる

## 自分で説明できるようにしたいこと

```txt
Reactのコンポーネントとは何か
TypeScriptのtypeとは何か
propsとは何か
mapで一覧表示するとはどういうことか
Next.jsでページを追加する方法
Next.jsのDynamic Routesとは何か
generateStaticParamsが何をしているか
共通レイアウトコンポーネントを作る理由
Linkでページ遷移する方法
pnpm dev / lint / build の違い
```

まずは全部を完璧に理解しなくて大丈夫です。  
このサイトを少しずつ直しながら、「このコードは何のためにあるのか」を自分の言葉で説明できるようにしていきます。
