---
template: default.html
title: より良く、よりシンプルなグリッドシステム
excerpt: Flexboxはグリッドシステムに求められる機能のほとんどを実現してくれます。サイズや並べ方の調整もたった１つか２つのプロパティを設定するだけです。
---

大抵の現代的なグリッドシステムは `float` または `inline-block` の2つのレイアウト手法のうち、どちらか1つを採用しています。しかしそれらの手法はどちらもレイアウトを実現する意図で使うものではないため、結果として重大な問題や制約を引きおこします。

floatは、レイアウトに関する多くの問題を抱えているために、「クリア」を行なう必要があります。御存知の通り、要素をクリアすると、ページ内の無関係のパーツの下に強制移動させられることがあります（例えばこの [Bootstrap issue](https://github.com/twbs/bootstrap/issues/295#issuecomment-2282969)を参照してください）。加えて、floatをクリアするといつもbeforeとafter擬似要素が必要になり、別の用途に使うことの妨げとなります。

インラインブロックレイアウトは[inline-block アイテム間のホワイトスペース](http://css-tricks.com/fighting-the-space-between-inline-block-elements/)問題に取り組むのに必要ですが、それらの [解決方法](http://davidwalsh.name/remove-whitespace-inline-block) は [ハックに満ちていて](https://github.com/suitcss/components-grid/blob/master/lib/grid.css#L30) 、 [厄介](https://twitter.com/thierrykoblentz/status/305152267374428160)です。

Flexboxはそれらの問題を排除するだけでなく、新たな可能性の世界を開きます。

## Flexboxグリッドシステムの機能

グリッドシステムは、たいてい無数のサイズオプションを搭載していますが、しかし大多数のケースではせいぜい2〜3の要素を並べたいだけでしょう。これを考慮すると、なぜすべてのセルにサイズクラスを付加することが必須になってしまうのでしょう？

下記のリストは、私の考える理想のグリッドシステムの基準です。幸運にも、Flexboxはこれらの特徴を無料で提供しています。

- デフォルトで、行内のそれぞれのグリッドセルは、同じ幅と高さを持つこと。基本的にそれらすべてのサイズはデフォルトで適合していること。
- より細やかな調整のため、それぞれのセルにサイズクラスを追加できること。クラスがなければ、セルは単にいつも通り利用可能なスペースを分配すること。
- レスポンシブグリッドの為、メディアクエリ特有のクラスをセルに設定できること。
- 個別のセルは上、中央、下に垂直位置を整列させることができること。
- グリッド内のすべてのセルを同じサイズ、メディア、整列値にしたい場合は、単にコンテナにシングルクラスを付加するだけでよく、不要な繰り返しを避けられること。
- グリッドは必要な限り深くネストできること。

### 基本的なグリッド

下記のグリッドセルは幅を指定しておらず、単に等間隔で並び、行全体にフィットするよう拡張します。また、デフォルトで高さも等しくなります。

<div class="Grid Grid--gutters u-textCenter">
  <div class="Grid-cell">
    <div class="Demo">1/2</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">1/2</div>
  </div>
</div>

<div class="Grid Grid--gutters u-textCenter">
  <div class="Grid-cell">
    <div class="Demo">1/3</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">1/3</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">1/3</div>
  </div>
</div>

<div class="Grid Grid--gutters u-textCenter">
  <div class="Grid-cell">
    <div class="Demo">1/4</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">1/4</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">1/4</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">1/4</div>
  </div>
</div>

<div class="Grid Grid--gutters Grid--flexCells">
  <div class="Grid-cell">
    <div class="Demo">
      コンテンツがスペースを埋めていないにもかかわらず、高さ最大
    </div>
  </div>

  <div class="Grid-cell">
    <div class="Demo">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis velit non gravida venenatis. Praesent consequat lectus purus, ut scelerisque velit condimentum eu. Maecenas sagittis ante ut turpis varius interdum. Quisque tellus ipsum, eleifend non ipsum id, suscipit ultricies neque.
    </div>
  </div>
</div>

### 個別のサイズ調整

等幅をお望みでなければ、それぞれのセルにサイズクラスを付加できます。サイズクラスなしのセルは通常、単に残っているスペースを分配します。

"auto"と書いてあるセルにはサイズクラス指定がありません。

<div class="Grid Grid--gutters u-textCenter">
  <div class="Grid-cell u-1of2">
    <div class="Demo">1/2</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">auto</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">auto</div>
  </div>
</div>

<div class="Grid Grid--gutters u-textCenter">
  <div class="Grid-cell">
    <div class="Demo">auto</div>
  </div>
  <div class="Grid-cell u-1of3">
    <div class="Demo">1/3</div>
  </div>
</div>

<div class="Grid Grid--gutters u-textCenter">
  <div class="Grid-cell u-1of4">
    <div class="Demo">1/4</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">auto</div>
  </div>
  <div class="Grid-cell u-1of3">
    <div class="Demo">1/3</div>
  </div>
</div>

### レスポンシブ

レスポンシブグリッドはメディアクラスをグリッドセルまたはコンテナに追加することで動作します。メディア値が満たされた時、それにしたがってグリッドは自動的に調整されます。

以下のセルはデフォルトで最大幅となり、`48em`にフィットするよう拡大されます。動作を見るためにブラウザーをリサイズしてみてください。

<div class="Grid Grid--gutters Grid--full large-Grid--fit u-textCenter">
  <div class="Grid-cell">
    <div class="Demo">Full / Halves</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">Full / Halves</div>
  </div>
</div>
<div class="Grid Grid--gutters Grid--full large-Grid--fit u-textCenter">
  <div class="Grid-cell">
    <div class="Demo">Full / Thirds</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">Full / Thirds</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">Full / Thirds</div>
  </div>
</div>

### Grid-ception

グリッドコンポーネントは、他のグリッドコンポーネント内部に無限にネスト可能です。

<div class="Grid Grid--gutters Grid--flexCells u-textCenter">
  <div class="Grid-cell">
    <div class="Demo">
      <div class="Grid Grid--gutters u-textCenter">
        <div class="Grid-cell u-1of3">
          <div class="Demo">1/3</div>
        </div>
        <div class="Grid-cell">
          <div class="Demo">
            <div class="Grid Grid--gutters u-textCenter">
              <div class="Grid-cell">
                <div class="Demo">1/2</div>
              </div>
              <div class="Grid-cell">
                <div class="Demo">1/2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="Grid-cell u-1of3">
    <div class="Demo">1/3</div>
  </div>
</div>

## 整列機能

### 上ぞろえのグリッドセル

<div class="Grid Grid--gutters Grid--top">
  <div class="Grid-cell">
    <div class="Demo">
      このセルは上ぞろえになります。
    </div>
  </div>
  <div class="Grid-cell u-1of2">
    <div class="Demo">
      Pellentesque sagittis vel erat ac laoreet. Phasellus ac aliquet enim, eu aliquet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar porta leo, eu ultricies nunc sollicitudin vitae. Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh.
    </div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">
      このセルは上ぞろえになります。
    </div>
  </div>
</div>

### 下ぞろえのグリッドセル

<div class="Grid Grid--gutters Grid--bottom">
  <div class="Grid-cell">
    <div class="Demo">
      このセルは下ぞろえになります。
    </div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">
      Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in.
    </div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">
      このセルは下ぞろえになります。
    </div>
  </div>
</div>

### 垂直中央ぞろえのグリッドセル

<div class="Grid Grid--gutters Grid--center">
  <div class="Grid-cell">
    <div class="Demo">
      このセルは、右のセルと一緒に垂直中央ぞろえになります。
    </div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">
      Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in. Sed est ligula, ornare ac nisi adipiscing, iaculis facilisis tellus. Nullam vel facilisis libero. Duis semper lobortis elit, vitae dictum erat.</div>
  </div>
</div>

### 混合縦位置整列

<div class="Grid Grid--gutters">
  <div class="Grid-cell Grid-cell--top">
    <div class="Demo">
      このセルは上ぞろえになります。
    </div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">
      Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in. Sed est ligula, ornare ac nisi adipiscing, iaculis facilisis tellus.</div>
  </div>
  <div class="Grid-cell Grid-cell--center">
    <div class="Demo">
      このセルは中央ぞろえになります。
    </div>
  </div>
  <div class="Grid-cell Grid-cell--bottom">
    <div class="Demo">
      このセルは下ぞろえになります。
    </div>
  </div>
</div>

## The HTML

```html
<div class="Grid">
  <div class="Grid-cell">…</div>
  <div class="Grid-cell">…</div>
  <div class="Grid-cell">…</div>
</div>
```

## The CSS

### 基本的なグリッドシステム

```css
.Grid {
  display: flex;
}

.Grid-cell {
  flex: 1;
}
```

### グリッドスタイル修飾子

```css
/* 隙間あり */
.Grid--gutters {
  margin: -1em 0 0 -1em;
}
.Grid--gutters > .Grid-cell {
  padding: 1em 0 0 1em;
}

/* 行ぞろえ */
.Grid--top {
  align-items: flex-start;
}
.Grid--bottom {
  align-items: flex-end;
}
.Grid--center {
  align-items: center;
}

/* セルごとに整列 */
.Grid-cell--top {
  align-self: flex-start;
}
.Grid-cell--bottom {
  align-self: flex-end;
}
.Grid-cell--center {
  align-self: center;
}
```

### レスポンシブ修飾子（モバイルファーストアプローチ）

```css
/* すべてのメディアに対応するベースクラス */
.Grid--fit > .Grid-cell {
  flex: 1;
}
.Grid--full > .Grid-cell {
  flex: 0 0 100%;
}
.Grid--1of2 > .Grid-cell {
  flex: 0 0 50%
}
.Grid--1of3 > .Grid-cell {
  flex: 0 0 33.3333%
}
.Grid--1of4 > .Grid-cell {
  flex: 0 0 25%
}

/* 小〜中サイズのスクリーン */
@media (min-width: 24em) {
  .small-Grid--fit > .Grid-cell {
    flex: 1;
  }
  .small-Grid--full > .Grid-cell {
    flex: 0 0 100%;
  }
  .small-Grid--1of2 > .Grid-cell {
    flex: 0 0 50%
  }
  .small-Grid--1of3 > .Grid-cell {
    flex: 0 0 33.3333%
  }
  .small-Grid--1of4 > .Grid-cell {
    flex: 0 0 25%
  }
}

/* 大スクリーン */
@media (min-width: 48em) {
  .large-Grid--fit > .Grid-cell {
    flex: 1;
  }
  .large-Grid--full > .Grid-cell {
    flex: 0 0 100%;
  }
  .large-Grid--1of2 > .Grid-cell {
    flex: 0 0 50%
  }
  .large-Grid--1of3 > .Grid-cell {
    flex: 0 0 33.3333%
  }
  .large-Grid--1of4 > .Grid-cell {
    flex: 0 0 25%
  }
}
```

グリッドコンポーネントがデモでどのように使われているか、Githubの[ソース](https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/grid.css) 全体を見る。
