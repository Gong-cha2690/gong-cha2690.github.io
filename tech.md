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

src/app/blog/20260522/page.tsx
  Blog記事ページ

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
    date: "2026-05-22",
    title: "ポートフォリオサイトを作った",
    href: "/blog/20260522",
  },
];
```

これを画面に出すときは `map` を使います。

```tsx
{posts.map((post) => (
  <Link key={post.href} href={post.href}>
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

src/app/blog/20260522/page.tsx
  /blog/20260522
```

つまり、新しいページを作りたいときは:

```txt
src/app/ページ名/page.tsx
```

を作ります。

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
3. `src/app/blog/page.tsx` を見て、一覧から詳細ページへ移動する仕組みを理解する
4. `SmoothSnap.tsx` を見て、`useState`、`useRef`、`useEffect` を少しずつ理解する
5. `pnpm lint` と `pnpm build` を実行して、エラーの読み方に慣れる

## 自分で説明できるようにしたいこと

```txt
Reactのコンポーネントとは何か
TypeScriptのtypeとは何か
propsとは何か
mapで一覧表示するとはどういうことか
Next.jsでページを追加する方法
Linkでページ遷移する方法
pnpm dev / lint / build の違い
```

まずは全部を完璧に理解しなくて大丈夫です。  
このサイトを少しずつ直しながら、「このコードは何のためにあるのか」を自分の言葉で説明できるようにしていきます。
