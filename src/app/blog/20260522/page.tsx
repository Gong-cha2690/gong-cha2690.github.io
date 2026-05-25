import Link from "next/link";

export default function BlogPostPage() {
    return (
        <main>
            <Link href="/blog">Blogトップへ戻る</Link>

            <h1>ポートフォリオサイトを作ってみる</h1>
            <p>2026年5月22日</p>
            <p>
                まずはあしたぼサイトの開発でよく聞くNext.js, TypeScript, Reactに対する理解をより深めた。まずはNext.jsの公式ドキュメントを読み、基本的な機能や構造を理解した。
                TypeScriptはJavaScriptに型安全性を加えるための言語であり、Reactはユーザーインターフェースを構築するためのライブラリであることを学んだ。
                公式ドキュメントを通じて、Next.jsのページルーティング等の基本的な機能を理解し、0からのWeb開発経験を積むことを目的として、ポートフォリオサイトの構築に取り組む。
            </p>

        </main>
    );
}