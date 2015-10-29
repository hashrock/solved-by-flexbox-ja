---
template: default.html
title: メディアオブジェクト
excerpt: オーバーフロー、clearfixまたはブロック整形文脈のハックについて心配する必要のない、固定もしくは様々なサイズのメディアオブジェクトを作成します。
---

[メディアオブジェクト](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code)は、オブジェクト指向CSS(OOCSS)の典型です。そのシンプルさと便利さは多くのCSS開発者（筆者自身を含む）をOOCSSの方法論に転向させました。

しかし、ほとんどのCSSレイアウトのテクニックと同様に、メディアオブジェクトはその目的を果たすためにトリックやハックに頼っています。

メディアオブジェクトの本体は、[ブロック整形文脈](http://www.stubbornella.org/content/2013/07/31/re-visiting-the-secret-power-of-block-fomatting-context/)もしくは、左マージン/パディングを画像の幅と等しくするかのどちらかの方法で、画像の下にテキストが覆われてしまうのを防止しなければなりません。また、`overflow:hidden`または擬似要素のどちらかを使って、メディアオブジェクトの本体をclearfixしなければなりません。

Flexboxでは、これらの問題は解決されています。加えて、Flexboxはメディアオブジェクトがどのような形状だったとしても、垂直方向に整列させることができます。また、ソース中の順番を変更することなく、図を右側に並べることができます。

## 簡単な例

<div class="Grid Grid--guttersLg Grid--full large-Grid--fit">
  <div class="Grid-cell">
    <div class="Demo Demo--spaced">
      <div class="Media">
        <img class="Media-figure Image" src="{{ site.baseUrl }}images/kitten.jpg" alt="Kitten">
        <div class="Media-body">
          <h3 class="Media-title">普通のメディアオブジェクト</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nisl quis massa vulputate adipiscing. Vivamus sit amet risus ligula. Nunc eu pulvinar augue.</p>
        </div>
      </div>
    </div>
    <div class="Demo Demo--spaced">
      <div class="Media">
        <img class="Media-figure Image" src="{{ site.baseUrl }}images/kitten.jpg" alt="Kitten">
        <div class="Media-body">
          <h3 class="Media-title">普通のメディアオブジェクト</h3>
          <p>Donec imperdiet sem leo, id rutrum risus aliquam vitae. Cras tincidunt porta mauris, vel feugiat mauris accumsan eget.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="Grid-cell">
    <div class="Demo Demo--spaced">
      <div class="Media Media--reverse">
        <img class="Media-figure Image" src="{{ site.baseUrl }}images/kitten.jpg" alt="Kitten">
        <div class="Media-body">
          <h3 class="Media-title">反転させたメディアオブジェクト</h3>
          <p>Phasellus vel felis purus. Aliquam consequat pellentesque dui, non mollis erat dictum sit amet. Curabitur non quam dictum, consectetur arcu in, vehicula justo. Donec tortor massa, eleifend nec viverra in, aliquet at eros. Mauris laoreet condimentum mauris, non tempor massa fermentum ut. Integer gravida pharetra cursus. Nunc in suscipit nunc.</p>
        </div>
      </div>
    </div>
  </div>
</div>

## 画像不使用

<div class="Grid Grid--guttersLg Grid--full large-Grid--fit">
  <div class="Grid-cell">
    <div class="Demo Demo--spaced">
      <div class="Media">
        <figure class="Media-figure"><span class="icon-comments icon-big"></span></figure>
        <div class="Media-body">
          <h3 class="Media-title">アイコンを利用</h3>
          <p>Donec imperdiet sem leo, id rutrum risus aliquam vitae. Vestibulum ac turpis non lacus dignissim dignissim eu sed dui.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="Grid-cell">
    <div class="Demo Demo--spaced">
      <div class="Media Media--center">
        <figure class="Media-figure"><span class="icon-info-sign icon-big"></span></figure>
        <div class="Media-body">
          <h3 class="Media-title">図を垂直にセンタリング</h3>
          <p>Nunc nec fermentum dolor. Duis at iaculis turpis. Sed rutrum elit ac egestas dapibus. Duis nec consequat enim.</p>
        </div>
      </div>
    </div>
  </div>
</div>

## ネストしたメディアオブジェクト

<div class="Grid Grid--guttersLg Grid--full large-Grid--fit">
  <div class="Grid-cell">
    <div class="Demo Demo--spaced">
      <div class="Media">
        <img class="Media-figure Image" src="{{ site.baseUrl }}images/kitten.jpg" alt="Kitten">
        <div class="Media-body">
          <h3 class="Media-title">メディアオブジェクトのタイトル</h3>
          <p>Phasellus vel felis purus. Aliquam consequat pellentesque dui, non mollis erat dictum sit amet. Curabitur non quam dictum, consectetur arcu in, vehicula justo.</p>
          <div class="Demo Demo--spaced u-smaller">
            <div class="Media">
              <figure class="Media-figure">
                <img class="Image Image--tiny" src="{{ site.baseUrl }}images/kitten.jpg" alt="Kitten">
              </figure>
              <p class="Media-body">
                Mauris porta arcu id magna adipiscing lacinia at congue lacus. Vivamus blandit quam quis tincidunt egestas. Etiam posuere lectus sed sapien malesuada molestie.
              </p>
            </div>
          </div>
          <div class="Demo Demo--spaced u-smaller">
            <div class="Media">
              <figure class="Media-figure">
                <img class="Image Image--tiny" src="{{ site.baseUrl }}images/kitten.jpg" alt="Kitten">
              </figure>
              <div class="Media-body">
                <p>Vestibulum ac turpis non lacus dignissim dignissim eu sed dui. Proin a ligula sit amet massa malesuada mattis eu a ante. Nunc porttitor sed quam quis sollicitudin. Vestibulum ac turpis non lacus dignissim dignissim eu sed dui.</p>
                <div class="Media Media--center">
                  <span class="Media-figure icon-thumbs-up-alt"></span>
                  <p class="Media-body">Rutrum risus aliquam vitae.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="Grid-cell">
    <div class="Demo Demo--spaced">
      <div class="Media">
        <img class="Media-figure Image" src="{{ site.baseUrl }}images/kitten.jpg" alt="Kitten">
        <div class="Media-body">
          <h3 class="Media-title">メディアオブジェクトのタイトル</h3>
          <p>Phasellus vel felis purus. Aliquam consequat pellentesque dui, non mollis erat dictum sit amet. Curabitur non quam dictum, consectetur arcu in, vehicula justo. Donec tortor massa, eleifend nec viverra in, aliquet at eros. Mauris laoreet condimentum mauris, non tempor massa fermentum ut.</p>
          <div class="Media Media--center u-smaller">
            <span class="Media-figure icon-thumbs-up-alt"></span>
            <p class="Media-body">Donec imperdiet sem leo, id rutrum risus aliquam vitae.</p>
          </div>
          <div class="Demo Demo--spaced u-smaller">
            <div class="Media">
              <figure class="Media-figure">
                <img class="Image Image--tiny" src="{{ site.baseUrl }}images/kitten.jpg" alt="Kitten">
              </figure>
              <p class="Media-body">
                Mauris porta arcu id magna adipiscing lacinia at congue lacus. Vivamus blandit quam quis tincidunt egestas. Etiam posuere lectus sed sapien malesuada molestie. Aliquam vitae pharetra dolor. Nullam non mattis nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## HTML

```html
<div class="Media">
  <img class="Media-figure" src="" alt="">
  <p class="Media-body">&hellip;</p>
</div>
```

## CSS

```css
.Media {
  display: flex;
  align-items: flex-start;
}

.Media-figure {
  margin-right: 1em;
}

.Media-body {
  flex: 1;
}
```

この例で利用している`Media`コンポーネントの完全な[ソース](https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/media.css)はGithubにあります。
