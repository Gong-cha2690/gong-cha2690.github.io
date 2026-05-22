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
