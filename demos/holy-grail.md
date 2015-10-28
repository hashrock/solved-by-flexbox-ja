---
template: holy-grail.html
title: 聖杯レイアウト
excerpt: この古典的な問題には何年にもわたってCSSハッカーが取り組んできましたが、完全な解法は未だかつてありませんでした。Flexboxにより、ついに可能になります。
---

[聖杯レイアウト（Holy Grail Layout）](http://en.wikipedia.org/wiki/Holy_Grail_(web_design)) は、長い間いろいろな解法が提示されてきた、古典的なCSSの問題です。もし聖杯レイアウトの歴史についてご存知でなければ、この[A List Apartの記事](http://alistapart.com/article/holygrail)はとても良い要約であり、よく知られた解法についてのリンクとなっています。

聖杯レイアウトの本質は、ヘッダーとフッター、3つのカラムのあるページです。中央のカラムはメインコンテンツを含み、左右のカラムは広告やナビゲーションのような補助的なコンテンツを含みます。

この問題を解くためのほとんどのCSSの解法は下記のゴールを目指すものです。

- 伸縮する中央のコンテナと、固定幅のサイドバーを持つこと。
- 中央のカラム（メインコンテンツ）はHTMLソースの最初に登場すること。
- すべてのカラムは、どのカラムが一番高いかに関係なく、同じ高さであること。
- 最小限のマークアップしか必要にならないこと。
- コンテンツの量が少なかったとしても、フッターはページの下部に"固定"されること。

不幸にも、これらのゴールの特質と、CSSの元来の制約により、すべてのゴールを満たす古典的な解法はありませんでした。

Flexboxを用いることで、完全な解法がついに可能になります。

## The HTML

```html
<body class="HolyGrail">
  <header>…</header>
  <div class="HolyGrail-body">
    <main class="HolyGrail-content">…</main>
    <nav class="HolyGrail-nav">…</nav>
    <aside class="HolyGrail-ads">…</aside>
  </div>
  <footer>…</footer>
</body>
```

## The CSS

中央のコンテンツを伸縮させ、フッターをページ下部に固定するには、[スティッキーフッター](../sticky-footer/)の例と同じテクニックを使うことで解決できます。唯一の違いは、聖杯レイアウトの中央行（`.HolyGrail-body`）は子を正しく並べる為に`display:flex`が必要になることだけです。

```css
.HolyGrail {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.HolyGrail-body {
  display: flex;
  flex: 1;
}
```

伸縮する中央カラムと固定幅のサイドバーで構成される、3つの同じ高さのカラムのスタイリングは簡単です：

```css
.HolyGrail-content {
  flex: 1;
}

.HolyGrail-nav, .HolyGrail-ads {
  /* カラム幅は12em */
  flex: 0 0 12em;
}

.HolyGrail-nav {
  /* ナビゲーションを左に */
  order: -1;
}
```

<aside class="Notice"><strong>注意:</strong>&nbsp; 上記のCSSはFlexboxのスペックがフル実装されたブラウザーを想定しており、このデモをクロスブラウザで動かすには、少し異なるCSSが必要となります。詳しくは、<a href="https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/holy-grail.css">ソース中のコメント</a> を参照してください。</aside>


### レスポンシブ化する

聖杯レイアウトは、PCブラウザーが主流の時代におけるWebデザインです。しかし、モバイル機器が増えるにつれ、レスポンシブデザインの人気が上昇しており、聖杯レイアウトも流行から外れつつあります。

どのみち、Flexboxなら、モバイルファーストかつモバイルフレンドリーなバージョンの聖杯レイアウトを作ることも簡単です。このgistでは単に中央セクションをデフォルトで`flex-direction:column`にし、より大きなスクリーンでは`flex-direction:row`にします。

以下にレスポンシブかつモバイルファーストな完全な例を示します。ブラウザーをリサイズすることで動作を確認することが出来ます。

```css
.HolyGrail,
.HolyGrail-body {
  display: flex;
  flex-direction: column;
}

.HolyGrail-nav {
  order: -1;
}

@media (min-width: 768px) {
  .HolyGrail-body {
    flex-direction: row;
    flex: 1;
  }
  .HolyGrail-content {
    flex: 1;
  }
  .HolyGrail-nav, .HolyGrail-ads {
    /* 12em is the width of the columns */
    flex: 0 0 12em;
  }
}
```

Github上にある、`HolyGrail`コンポーネントの完全な[ソース](https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/holy-grail.css)を参照してください。
