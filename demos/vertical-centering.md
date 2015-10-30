---
template: default.html
title: 垂直センタリング
excerpt: CSSハッカーは何年もの間、この古典的な問題に挑戦し続けてきましたが、その全てを解決する歴史的な手法はまだ存在しませんでした。Flexboxなら、ついに可能になります。

---

要素を垂直にセンタリングするいい方法がCSSに存在しないことは、CSSというもの全体の評価にとって汚点であり続けていました。

何が問題をより悪化させたかというと、垂直センタリングを実現するテクニックはあまり知られておらず非直感的で、`vertical-align:middle`のような最良と思える選択肢は、必要な時には動作したことがないように思われます（※訳注：vertical-alignはブロック要素には適用できないという制約があり、インライン要素とテーブルセルでのみ動作します）。

現在の[垂直センタリングの選択肢](http://css-tricks.com/centering-in-the-unknown/)には、`display:table-cell`にネガティブマージンを設定するようなものから、縦幅最大の擬似要素を用いた滑稽なハックまで存在します。それらのテクニックが仕事を完了させることはありますが、すべてのシチュエーションで動作するとは限りません。仮に、センタリングしたい要素が不明なサイズであり、親要素に対してのただひとつの子要素ではないとしたらどうでしょう？仮に擬似要素ハックを使うことが出来たとして、他の用途に擬似要素を使う必要が出てきたらどうでしょう？

Flexboxならそんな心配はもうありません。`align-items`、`align-self`や`justify-content`を使って、とても気楽にどんなものでも、垂直にも水平にも整列させることが出来ます。

<div class="Demo Demo--spaced u-ieMinHeightBugFix">
  <div class="Aligner">
    <div class="Aligner-item Aligner-item--fixed">
      <div class="Demo">
        <h3>これはセンタリングされています！</h3>
        <p contenteditable="true">このボックスは垂直・水平方向にセンタリングされています。このボックスの中のテキストがボックスの高さや幅を変更しようとも、ボックスは中央に位置し続けます。さあ、クリックしてこのテキストを編集してみましょう。</p>
      </div>
    </div>
  </div>
</div>

すでに存在する垂直方向の整列テクニックとは異なり、Flexboxを使えば、垂直方向の整列が可能かどうかに兄弟要素が影響することはありません。

<div class="Demo Demo--spaced u-ieMinHeightBugFix">
  <div class="Aligner">
    <div class="Aligner-item Aligner-item--top">
      <div class="Demo"><strong>Top</strong></div>
    </div>
    <div class="Aligner-item">
      <div class="Demo"><strong>Centered</strong></div>
    </div>
    <div class="Aligner-item Aligner-item--bottom">
      <div class="Demo"><strong>Bottom</strong></div>
    </div>
  </div>
</div>

## HTML

```html
<div class="Aligner">
  <div class="Aligner-item Aligner-item--top">…</div>
  <div class="Aligner-item">…</div>
  <div class="Aligner-item Aligner-item--bottom">…</div>
</div>
```

## CSS

```css
.Aligner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.Aligner-item {
  max-width: 50%;
}

.Aligner-item--top {
  align-self: flex-start;
}

.Aligner-item--bottom {
  align-self: flex-end;
}
```

このデモで使用されている`Aligner`コンポーネントの完全な[ソース](https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/aligner.css)はGitHubにあります。

<aside class="Notice"><strong>注意：</strong>&nbsp; 上記のCSSはFlexboxのスペックがフル実装されたブラウザーを想定しており、このデモをクロスブラウザで動かすには、少し異なるCSSが必要となります。詳しくは、<a href="https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/utils/compat.css">ソース中のコメント</a> を参照してください。
