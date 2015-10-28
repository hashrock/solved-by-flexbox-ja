---
template: default.html
title: inputアドオン
excerpt: 最大幅で伸縮可能なinputとbuttonの組み合わせを作ることは、CSSの歴史の中でも最も不可能なことでした。Flexboxを使えば、これ以上無いくらいに簡単です。
---

inputのサイズをCSSで調整する手法が原因となり、inputの前後に要素を追加しつつ、inputフィールドを流動的にして余ったスペースを占有させることはほとんど不可能でした。

それを実現させるには、inputの実際の幅を取得するか、`display:table-cell`のようにそれ自身にいろいろな問題（特に、クロスブラウザーでアドオン内部に何かを絶対配置するのが難しい）を抱えている手法しかありません。

Flexboxならそれらの問題はありませんし、コードは自明にシンプルです。加えて、inputフィールドとinputアドオンを同じ高さにすることが出来ます。

<div class="Grid Grid--guttersLg Grid--full med-Grid--fit">
  <div class="Grid-cell">
    <h2>Add-on Prepended</h2>
    <div class="InputAddOn">
      <span class="InputAddOn-item">Amount</span>
      <input class="InputAddOn-field">
    </div>
    <div class="InputAddOn">
      <button class="InputAddOn-item"><span class="icon icon-search"></span></button>
      <input class="InputAddOn-field">
    </div>
  </div>
  <div class="Grid-cell">
    <h2>Add-on Appended</h2>
    <div class="InputAddOn">
      <input class="InputAddOn-field">
      <button class="InputAddOn-item">Go</button>
    </div>
    <div class="InputAddOn">
      <input class="InputAddOn-field">
      <button class="InputAddOn-item"><span class="icon icon-star"></span></button>
    </div>
  </div>
</div>

## Appended and Prepended Add-ons

<div class="Grid Grid--guttersLg Grid--full med-Grid--fit">
  <div class="Grid-cell">
    <div class="InputAddOn">
      <span class="InputAddOn-item"><span class="icon icon-envelope"></span></span>
      <input class="InputAddOn-field" placeholder="Example One">
      <button class="InputAddOn-item">Send</button>
    </div>
  </div>
  <div class="Grid-cell">
    <div class="InputAddOn">
      <span class="InputAddOn-item"><span class="icon icon-lock"></span></span>
      <input class="InputAddOn-field" placeholder="Example One">
      <button class="InputAddOn-item">Encrypt</button>
    </div>
  </div>
</div>

## The HTML

```html
<!-- 前に追加 -->
<div class="InputAddOn">
  <input class="InputAddOn-field">
  <button class="InputAddOn-item">…</button>
</div>

<!-- 後に追加 -->
<div class="InputAddOn">
  <span class="InputAddOn-item">…</span>
  <input class="InputAddOn-field">
</div>

<!-- 両方 -->
<div class="InputAddOn">
  <span class="InputAddOn-item">…</span>
  <input class="InputAddOn-field">
  <button class="InputAddOn-item">…</button>
</div>
```

## CSS

```css
.InputAddOn {
  display: flex;
}

.InputAddOn-field {
  flex: 1;
  /* field styles */
}

.InputAddOn-item {
  /* item styles */
}

```

このデモで利用されている`InputAddOn`コンポーネントの完全な[ソース](https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/input-add-on.css) はGithubにあります。
