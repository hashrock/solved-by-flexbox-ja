---
template: default.html
title: スティッキーフッター
excerpt: ページのコンテンツが少ない時に、ページの下部にフッターを固定することは、常にトリッキーでした。また、フッターの高さが不明な場合、基本的にそれは不可能でした。もうそんなことはありませんが。
---

<div class="Demo Demo--spaced">

このページのコンテンツを隠すために、以下のボタンをクリックしてください。十分にページを埋めるほどのコンテンツがない場合でも、ウィンドウの下部にフッターが固定されることに注目してください。

<button id="collapse-trigger" class="Button"><span class="icon-refresh u-spaceRS"></span> コンテンツをトグルする</button>

</div>

<div id="collapsable-content">

「十分なコンテンツがないページの下部に、フッターを固定する」という問題には、おおよそ全てのWeb開発者がキャリアの中で取り組んだことでしょう。大体の部分において、それは解決済みの問題です。すでに[存在する解決方法](http://ryanfait.com/resources/footer-stick-to-bottom-of-page/)の全ては、明白な欠点を抱えています &mdash; フッターの高さが不明ならば動作しないのです。

Flexboxはこの種の問題に完璧にフィットします。Flexboxは水平方向のコンテンツレイアウトでよく知られていますが、実際のところ、垂直方向のレイアウトに関する問題に対しても同様に役立ちます。垂直なセクションをflexコンテナの中に包み込み、どのセクションを伸縮させるかを選ぶ、たったそれだけでいいのです。それらのセクションは、コンテナ内のスペースを自動的に全て占有します。

下記の例では、コンテナはwindowの高さに設定されており、コンテンツエリアは必要に応じて拡張するように設定されています。*（注意：水平方向の場合は自動的に拡張しましたが、それと異なり、垂直方向の場合はコンテナに高さを指定する必要があります。）*

## HTML

```xml
<body class="Site">
  <header>…</header>
  <main class="Site-content">…</main>
  <footer>…</footer>
</body>
```

## CSS

```css
.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.Site-content {
  flex: 1;
}
```

デモで利用している`Site`コンポーネントの完全な[ソース](https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/site.css)はGithubにあります。

<aside class="Notice"><strong>注意：</strong>&nbsp; 上記のCSSはFlexboxのスペックがフル実装されたブラウザーを想定しており、このデモをクロスブラウザで動かすには、少し異なるCSSが必要となります。詳しくは、<a href="https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/site.css">ソース中のコメント</a> を参照してください。

</div>

<script class="js-allow-before-footer">
  (function() {
    var collapseTrigger = document.getElementById("collapse-trigger");
    var collapseableContent = document.getElementById("collapsable-content");
    var isCollapsed = false;
    collapseTrigger.addEventListener("click", function() {
      if (isCollapsed) {
        collapseableContent.classList.remove("u-hidden");
      } else {
        collapseableContent.classList.add("u-hidden");
      }
      isCollapsed = !isCollapsed;
    }, false);
  }());
</script>
