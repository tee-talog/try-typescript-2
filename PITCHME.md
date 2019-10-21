# TypeScript 入門 〜その他の型〜

---

### アジェンダ
* 実行方法
* 前回の復習
* 他にどんな型があるのか
* 他にどんな言語機能があるのか
* ハンズオン
---

# 実行方法

---

### 初期設定
```sh:Terminal
npx tsc --init
```

<small>`src/try/try1.ts`</small>

```ts
const add = (a: number, b: number): number => a + b
console.log(add(1, 2)) // => 3
```

<small>諸事情により、実際のソースではブロックでスコープを切っている。</small>

```sh:Terminal
# コンパイル
npx tsc -p .

# 実行 (node で普通に実行するだけ)
node dist/try/try1.js
# => 3
```

いちいちコンパイル → 実行は大変。

今回はコンパイルせずに直接実行できる ts-node を利用する。


```sh:Terminal
# 直接実行
npm start src/try/try1.ts
 # => 3
```

---

# 前回の復習

---

### 型の書き方
「型アノテーション」というもので型定義する。

```ts
// 変数に型付けする場合
// 変数名: 型 = 値
const str: string = 'Hello World'

// 関数に型付けする場合
// (引数: 引数の型): 戻り値の型 => { 処理内容 }
const add = (a: number, b: number): number => a + b
```

型推論があり、型が自明の場合は明示的な型アノテーションの記述を省略できる。

---

### 型の種類
* プリミティブ型
    * string（文字列）
    * number（数値）
    * boolean（真偽値）
    * null
    * undefined
    * リテラル型
* 配列型
* オブジェクト型
* 関数型
* any

---

### 独特な型
* `null`, `undefined` 型
	* TypeScript では、`null`, `undefined` は 1 つの型となっている。いわゆる **null safety**。
* リテラル型
	* `"1"` 型、`334` 型、`true` 型 など。
* any 型
	* **嘘**（※ネタです）
	* どの型でも受け入れる。

---

### 言語機能
* ジェネリクス
	* 型を引数として取り、内部でそれを利用する構文。
* クラス
	* 説明略。
* キャスト
	* 別の型として扱えるようにする構文。
* typeof 演算子
	* JavaScript の使い方ができるとともに、型名を書く場所で使用すると、その変数の型が返ってくる。
* Union Types
	* 「○○型または☓☓型」という型。
* 省略可能なプロパティ
	* Union Types と似ているが、こちらは定義しなくてもいいプロパティを表すときのみ使用できる。
*  デコレータ
	* 簡単に言うと、クラスやメソッドなどに適用できる関数。

---

### 型の種類（再掲）
* プリミティブ型
    * string（文字列）
    * number（数値）
    * boolean（真偽値）
    * null
    * undefined
    * リテラル型
* 配列型
* オブジェクト型
* 関数型
* any

---

# 他にどんな型があるのか

---

### プリミティブ型
* string（文字列）
* number（数値）
* boolean（真偽値）
* null
* undefined
* リテラル型
* symbol
* bigint

---

### symbol, bigint
JavaScript に割と最近入った人たち。

注意点として、ネイティブでこれらが実装されていないと使えません。

`symbol` は ES2015、`bigint` は ES2020 で実装。

---

### 非プリミティブ型
* 配列型
* オブジェクト型
	* オブジェクトリテラル
	* object
	* {}
	* weak type
* 関数型
* any
* タプル型
* void
* never
* unknown

---

### オブジェクトリテラル
前回説明したやつ。

---

### `object`
プリミティブ型以外。

---

### `{}`
プリミティブ型を**含む**、プロパティアクセス可能な値。

つまり null, undeifned 以外。

---

### weak type
省略可能なプロパティのみで構成されたオブジェクトリテラル型。

代入するオブジェクトは、省略可能なプロパティのうちいずれか 1 つを持っている必要がある。

---

### タプル型
複数の値を 1 つの値として扱えるようにした型。

配列の各要素に対して、それぞれ型をつけられる。

TypeScript や JavaScript にはタプルはないが、配列で似たようなことができる（配列の分割代入など）。

---

### void
なにもないことを表す型。

要するに、戻り値のない関数の戻り値の型。

---

### never
到達しないことを表す型。

いずれかの case にマッチする switch 文の default や、必ず throw される関数の戻り値（として指定できる）。

---

### unknown
型安全な any。

どんな型でも代入できるが、どんな型かわからないと、どんな操作もできない。
数値計算もできなければプロパティアクセスも出来ない。

`JSON.parse()` の戻り値で使ってほしい。

---

# 他にどんな言語機能があるのか

---

### 今回やる
* 型ガード
* readonly
* as const
* intersection types
* Enum
* Optional Chaining
* Nullish Coalescing

### 今回やらない
* keyof
* プロパティアクセス型
* Mapped Types
* Conditional Types

---

### 型ガード
型を絞り込むための関数が作れる。

これを使用して if 文等で絞り込みを行うと、typeof で分岐したときと同じように型が絞り込まれる。

---

### readonly

---

### as const

---

### intersection types

---

### Enum

---

### Optional Chaining
参考
https://qiita.com/uhyo/items/6cd88c0ea4dc6289387a

---

### Nullish Coalescing

---











### ハンズオン
実際に JavaScript に型をつけてみる。

---

### 問題
* Q1. 基本的な型の付け方
* Q2. nullable な型の付け方（Union Types）
* Q3. 配列の型の付け方（ジェネリクス）
* Q4. クラスの作り方
* Q5. オブジェクトの型付け
* Q6. 型の絞り込み

<small>物足りない方はこちら！</small>
<small>https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a</small>
<small>今回説明した内容以外にもいろいろ書いてある。</small>

---

### まとめ
いかがでしたか？（様式美）

最初は `any` を多用しても大丈夫。徐々に型システムに慣れていけば問題ないと考えている（もちろんデメリットが許容できれば）。

---

TypeScript を導入するが、引き続き JavaScript を書くこともできるように設定する予定。

わからない場合は JavaScript で書くのも手。

TypeScript の型はかなり複雑なこともできるため、いろいろ試してみるといいかもしれない。

---

#### 例
* 型で階乗
    * https://nekko1119.hatenablog.com/entry/2019/04/24/010641
* ポーカーの役判定
    * https://qiita.com/suin/items/a68116a6c0ac81ea7ca7
* 足し算・掛け算・乗算を 1 つの型でやる
    * https://qiita.com/kgtkr/items/4fd2665db692bbf93a15

+++

### 余談 1：他の言語にあるやつ
* enum ある
* interface ある（type とほぼ同義）
* constructor 引数をフィールドに直接定義・代入するやつある（Kotlin とか）
* オーバーライドある
* オーバーロードある
    * 演算子オーバーロードはない

+++

### 余談 2：JavaScript に戻れなくなりそう
書き心地という点では戻れなくなる人が多数いる（らしい）。
ただ、ちょっとしたスクリプトを書くときは JavaScript で書くこともある。

+++

また、TypeScript に移行したプロジェクトにおいて、「やっぱり JavaScript に戻したい！」というニーズもある（らしい）。

そんなときでも、コンパイル後のソースを見れば分かる通り、かなりきれいな JavaScript コードが生成される。

JavaScript に戻したいときでも、コンパイラオプションをしっかり調整すれば、JavaScript に戻すのもかなり楽に行える。

---

# よい TypeScript ライフを！

+++

### 参考
* TypeScriptの型入門
  * https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a
* 初心者のためのTypeScript入門
  * https://www.tuyano.com/index2?id=12926003
* TypeScript + Vue.js の始め方
  * https://blog.asial.co.jp/2019/05/07/TypeScript_%2B_Vue_js_%E3%81%AE%E5%A7%8B%E3%82%81%E6%96%B9
* TypeScriptのMethod Decoratorを解説する。
  * https://qiita.com/ukiuni@github/items/8753c762abd7af831afe
