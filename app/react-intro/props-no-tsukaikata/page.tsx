"use client";

import Link from "next/link";
import CopyableCodeBlock from "@/app/components/CopyableCodeBlock";
import InteractiveGreeting from "@/app/components/InteractiveGreeting";
import InteractiveUserProfile from "@/app/components/InteractiveUserProfile";
import InteractiveProductCard from "@/app/components/InteractiveProductCard";
import InteractiveButtonWithProps from "@/app/components/InteractiveButtonWithProps";
import PropsFlowDiagram from "@/app/components/PropsFlowDiagram";
import PropsPackageDiagram from "@/app/components/PropsPackageDiagram";
import PropsRecipeDiagram from "@/app/components/PropsRecipeDiagram";
import PropsShopDiagram from "@/app/components/PropsShopDiagram";
import Header from "@/app/components/Header";

export default function PropsNoTsukaikataPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />

      {/* Header */}
      <section className="border-b border-gray-200 bg-white px-4 py-8 dark:border-gray-800 dark:bg-gray-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/react-intro"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            レッスン一覧に戻る
          </Link>
          <div className="mb-4 flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              propsの使い方
            </h1>
            <span className="flex-shrink-0 rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              レッスン 5
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            推定学習時間: 20分
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* propsとは */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              propsとは
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                props（プロップス）は、コンポーネント間でデータを渡すための仕組みです。
                親コンポーネントから子コンポーネントに情報を渡すことで、同じコンポーネントでも異なるデータを表示できます。
              </p>

              {/* propsの流れの図解 */}
              <PropsFlowDiagram />

              {/* 家の例え図解 */}
              <PropsPackageDiagram />

              {/* 料理の例え図解 */}
              <PropsRecipeDiagram />

              <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20 mt-6">
                <p className="font-medium text-purple-900 dark:text-purple-100 mb-2">
                  💡 身近な例えで理解しよう
                </p>
                <div className="space-y-3 text-purple-800 dark:text-purple-200 text-sm">
                  <div>
                    <strong>🏠 家と引っ越しの荷物:</strong> コンポーネントは「家の設計図」で、propsは「引っ越しの荷物」です。
                    同じ設計の家でも、中に入れる家具（props）によって、異なる見た目や機能になります。
                  </div>
                  <div>
                    <strong>🍳 レシピと材料:</strong> コンポーネントは「レシピ」で、propsは「材料」です。
                    同じレシピでも、使う材料（props）によって、異なる料理ができあがります。
                  </div>
                  <div>
                    <strong>🏪 お店の商品カード:</strong> コンポーネントは「カードのテンプレート」で、propsは「商品情報」です。
                    同じデザインのカードでも、商品情報（props）が違えば、表示される内容も変わります。
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  📝 propsの特徴
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>読み取り専用:</strong> propsは変更できません（親コンポーネントから渡された値は変えられません）
                  </li>
                  <li>
                    <strong>一方向のデータフロー:</strong> 親コンポーネントから子コンポーネントに一方向でデータが流れます（逆方向には流れません）
                  </li>
                  <li>
                    <strong>再利用性の向上:</strong> propsを使うことで、同じコンポーネントを異なるデータで何度でも使えます
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <p className="font-medium text-green-900 dark:text-green-100 mb-2">
                  ✅ 初心者へのアドバイス
                </p>
                <p className="text-sm text-green-800 dark:text-green-200">
                  最初は難しく感じるかもしれませんが、上記の例え（家、料理、お店）を思い出すと理解しやすくなります。
                  propsは「テンプレートに情報を入れる箱」のようなものだと考えると良いでしょう。
                </p>
              </div>
            </div>
          </section>

          {/* propsの基本的な使い方 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              propsの基本的な使い方
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                propsを使うには、コンポーネントの関数の引数としてpropsを受け取り、JSX内で使用します。
                最初は難しく感じるかもしれませんが、段階的に理解していきましょう。
              </p>

              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
                <p className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">
                  🎯 propsを使う3ステップ
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
                  <li><strong>コンポーネントを定義</strong>する時に、propsを受け取る引数を書く</li>
                  <li><strong>コンポーネント内で</strong>、propsを使って表示内容を決める</li>
                  <li><strong>コンポーネントを使う時</strong>に、propsとして値を渡す</li>
                </ol>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 基本的なpropsの使い方
                </p>
                <CopyableCodeBlock
                  code={`// コンポーネントの定義（propsを受け取る）\nconst Greeting = (props) => {\n  return <h1>こんにちは、{props.name}さん！</h1>; // props.nameでpropsから値を取得\n};\n\n// コンポーネントの使用（propsを渡す）\nconst App = () => {\n  return (\n    <div>\n      <Greeting name="太郎" /> // nameというpropsを渡す\n      <Greeting name="花子" />\n    </div>\n  );\n};`}
                  className="mb-3"
                />
                <div className="space-y-2 text-sm">
                  <p>
                    「Greeting」コンポーネントは「name」というpropsを受け取り、それを使って挨拶を表示します。
                    同じコンポーネントでも、異なるpropsを渡すことで、異なる名前を表示できます。
                  </p>
                  <div className="rounded bg-gray-50 p-3 dark:bg-gray-800 mt-3">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2 text-xs">
                      📖 コードの読み方（初心者向け）:
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <li>
                        <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">const Greeting = (props) =&gt; {"{"}</code>
                        → 「Greeting」という名前のコンポーネントを作成。propsを受け取る準備
                      </li>
                      <li>
                        <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">{"{props.name}"}</code>
                        → propsの中の「name」という値を使う
                      </li>
                      <li>
                        <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">{"<Greeting name=\"太郎\" />"}</code>
                        → Greetingコンポーネントを使う。nameというpropsに「太郎」という値を渡す
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <p className="font-medium text-green-900 dark:text-green-100 mb-2">
                  ✅ ポイント
                </p>
                <ul className="list-disc pl-5 space-y-1 text-green-800 dark:text-green-200 text-sm">
                  <li>
                    propsを受け取るコンポーネントは、関数の引数として<code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">props</code>
                    を定義します
                  </li>
                  <li>
                    propsを使うときは、<code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">props.名前</code>
                    の形式でアクセスします
                  </li>
                  <li>
                    propsを渡すときは、HTMLの属性のように<code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">{"<コンポーネント名 属性名=\"値\" />"}</code>
                    の形式で書きます
                  </li>
                </ul>
              </div>

              {/* 構造化代入を使った書き方 */}
              <div className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
                <h3 className="mb-4 text-lg font-semibold text-orange-900 dark:text-orange-100">
                  🎯 より便利な書き方: 構造化代入
                </h3>

                <p className="mb-4 text-orange-800 dark:text-orange-200">
                  propsを使うときは、構造化代入（分割代入）を使うと、コードがより読みやすくなります。
                </p>

                <div className="space-y-4">
                  {/* 通常の書き方 */}
                  <div className="rounded-lg border border-orange-300 bg-white p-4 dark:border-orange-700 dark:bg-gray-900">
                    <p className="mb-3 font-semibold text-orange-900 dark:text-orange-100">
                      📝 通常の書き方
                    </p>
                    <CopyableCodeBlock
                      code={`const Greeting = (props) => {\n  // props.nameでpropsオブジェクトからnameを取得\n  return <h1>こんにちは、{props.name}さん！</h1>;\n};`}
                      className="mb-3"
                    />
                    <p className="text-xs text-orange-700 dark:text-orange-300">
                      毎回<code className="px-1 py-0.5 rounded bg-orange-100 dark:bg-orange-900/50">props.</code>
                      を書く必要があります
                    </p>
                  </div>

                  {/* 構造化代入を使った書き方 */}
                  <div className="rounded-lg border border-green-300 bg-green-50 p-4 dark:border-green-700 dark:bg-green-900/30">
                    <p className="mb-3 font-semibold text-green-900 dark:text-green-100">
                      ✅ 構造化代入を使った書き方（推奨）
                    </p>
                    <CopyableCodeBlock
                      code={`// 構造化代入を使って、propsから直接nameを取り出す\nconst Greeting = ({ name }) => {\n  // props.を書かずに、直接nameを使える\n  return <h1>こんにちは、{name}さん！</h1>;\n};`}
                      className="mb-3"
                    />
                    <p className="text-xs text-green-700 dark:text-green-300">
                      <code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">props.</code>
                      を書かずに、直接<code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">name</code>
                      を使えます
                    </p>
                  </div>
                </div>
              </div>

              {/* インタラクティブデモ */}
              <InteractiveGreeting />
            </div>
          </section>

          {/* 複数のpropsを渡す */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              複数のpropsを渡す
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                1つのコンポーネントに複数のpropsを渡すこともできます。
                カンマで区切って複数の属性を指定します。
              </p>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 複数のpropsを渡す例
                </p>
                <CopyableCodeBlock
                  code={`// 複数のpropsを受け取るコンポーネント（構造化代入を使用）\nconst UserProfile = ({ name, age, job }) => {\n  return (\n    <div>\n      <h2>{name}</h2> {/* name propsを表示 */}\n      <p>年齢: {age}歳</p> {/* age propsを表示 */}\n      <p>職業: {job}</p> {/* job propsを表示 */}\n    </div>\n  );\n};\n\n// 複数のpropsを渡す\nconst App = () => {\n  return (\n    <div>\n      {/* 文字列は引用符、数値は中括弧で囲む */}\n      <UserProfile name="山田太郎" age={25} job="エンジニア" />\n      <UserProfile name="佐藤花子" age={30} job="デザイナー" />\n    </div>\n  );\n};`}
                  className="mb-3"
                />
                <div className="space-y-2 text-sm">
                <p>
                  数値や真偽値などのJavaScriptの式を渡す場合は、中括弧<code className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800">{"{}"}</code>
                  を使います。文字列の場合は、引用符で囲むか、中括弧で囲むか、どちらでも可能です。
                </p>
                <div className="rounded bg-yellow-50 p-3 dark:bg-yellow-900/20 mt-3">
                  <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-xs">
                    💡 初心者へのヒント:
                  </p>
                  <p className="text-xs text-yellow-800 dark:text-yellow-200">
                    文字列は<code className="px-1 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/50">name="太郎"</code>
                    のように引用符で囲み、数値は<code className="px-1 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/50">age={"{"}25{"}"}</code>
                    のように中括弧で囲むと覚えておきましょう。
                  </p>
                </div>
              </div>
              </div>

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                <p className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                  💡 propsの値の書き方
                </p>
                <ul className="list-disc pl-5 space-y-1 text-blue-800 dark:text-blue-200 text-sm">
                  <li>
                    <strong>文字列:</strong> <code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">name="太郎"</code>
                    または
                    <code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">name={"\"太郎\""}</code>
                  </li>
                  <li>
                    <strong>数値:</strong> <code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">age={25}</code>
                    （中括弧が必要）
                  </li>
                  <li>
                    <strong>真偽値:</strong> <code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">isActive={true}</code>
                    または
                    <code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">isActive</code>
                    （trueの場合は省略可能）
                  </li>
                  <li>
                    <strong>配列:</strong> <code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">items={["a", "b", "c"]}</code>
                  </li>
                  <li>
                    <strong>オブジェクト:</strong> <code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">user={"{"} name: "太郎" {"}"}</code>
                  </li>
                </ul>
              </div>

              {/* インタラクティブデモ */}
              <InteractiveUserProfile />
            </div>
          </section>

          {/* propsを使ったコンポーネントの再利用 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              propsを使ったコンポーネントの再利用
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                propsの最大のメリットは、同じコンポーネントを異なるデータで何度でも使えることです。
                これにより、コードの重複を減らし、保守性を向上させることができます。
              </p>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 商品カードの例
                </p>
                <CopyableCodeBlock
                  code={`// 商品カードコンポーネント（再利用可能な設計）\nconst ProductCard = ({ name, price, description }) => {\n  return (\n    <div className="card">\n      <h3>{name}</h3> {/* 商品名を表示 */}\n      {/* toLocaleString()で数値を3桁区切りに */}\n      <p className="price">¥{price.toLocaleString()}</p>\n      <p>{description}</p> {/* 商品説明を表示 */}\n    </div>\n  );\n};\n\n// 商品リストコンポーネント\nconst ProductList = () => {\n  return (\n    <div>\n      {/* 同じProductCardコンポーネントに異なるpropsを渡す */}\n      <ProductCard \n        name="ノートPC" \n        price={98000} \n        description="高性能なノートパソコン" \n      />\n      <ProductCard \n        name="マウス" \n        price={2500} \n        description="エルゴノミクスデザインのマウス" \n      />\n      <ProductCard \n        name="キーボード" \n        price={8500} \n        description="メカニカルキーボード" \n      />\n    </div>\n  );\n};`}
                  className="mb-3"
                />
                <p className="text-sm">
                  同じ「ProductCard」コンポーネントに異なるpropsを渡すことで、3つの異なる商品カードを表示できます。
                  propsを使わない場合、3つそれぞれのコンポーネントを書く必要があります。
                </p>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <p className="font-medium text-green-900 dark:text-green-100 mb-2">
                  ✅ propsを使うメリット
                </p>
                <ul className="list-disc pl-5 space-y-1 text-green-800 dark:text-green-200 text-sm">
                  <li>
                    <strong>コードの再利用性:</strong> 1つのコンポーネントを様々な場面で使えます
                  </li>
                  <li>
                    <strong>保守性の向上:</strong> コンポーネントの修正が1箇所で済みます
                  </li>
                  <li>
                    <strong>柔軟性:</strong> 異なるデータで同じコンポーネントを使えます
                  </li>
                  <li>
                    <strong>コードの可読性:</strong> コンポーネントの役割が明確になります
                  </li>
                </ul>
              </div>

              {/* お店の例え図解 */}
              <PropsShopDiagram />

              {/* インタラクティブデモ */}
              <InteractiveProductCard />
            </div>
          </section>

          {/* デフォルト値の設定 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              propsのデフォルト値
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                propsにデフォルト値を設定することで、propsが渡されなかった場合でも、コンポーネントが正しく動作するようにできます。
              </p>

              <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
                <p className="font-medium text-purple-900 dark:text-purple-100 mb-2">
                  🎯 デフォルト値の例え
                </p>
                <p className="text-sm text-purple-800 dark:text-purple-200 mb-2">
                  デフォルト値は「お店のメニューに書いてある標準的な注文」のようなものです。
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-purple-800 dark:text-purple-200">
                  <li>
                    <strong>メニューの例:</strong> 「カレーライス（標準: 辛さ普通）」というメニューがあるとします。
                    お客さんが「辛さ」を指定しなければ、標準の「普通」が使われます。
                  </li>
                  <li>
                    <strong>propsの例:</strong> <code className="px-1 py-0.5 rounded bg-purple-100 dark:bg-purple-900/50">text="クリック"</code>
                    というデフォルト値を設定すれば、propsを渡さなくても「クリック」というボタンが表示されます。
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 デフォルト値の設定方法
                </p>
                <CopyableCodeBlock
                  code={`// デフォルト値付きのコンポーネント\n// text="クリック"とcolor="blue"がデフォルト値\nconst Button = ({ text = "クリック", color = "blue" }) => {\n  return (\n    // テンプレートリテラルを使ってクラス名を動的に生成\n    <button className={\`btn btn-\${color}\`}>\n      {text}\n    </button>\n  );\n};\n\n// デフォルト値を使う（propsを渡さない）\nconst App1 = () => {\n  // propsを渡さないので、デフォルト値（"クリック"、"blue"）が使われる\n  return <Button />;\n};\n\n// propsを渡す\nconst App2 = () => {\n  return (\n    <div>\n      {/* デフォルト値を上書きして、異なるテキストと色を指定 */}\n      <Button text="購入する" color="green" />\n      <Button text="削除" color="red" />\n    </div>\n  );\n};`}
                  className="mb-3"
                />
                <div className="space-y-2 text-sm">
                  <p>
                    関数の引数に<code className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800">= 値</code>
                    を書くことで、デフォルト値を設定できます。
                    propsが渡されなかった場合、デフォルト値が使われます。
                  </p>
                  <div className="rounded bg-blue-50 p-3 dark:bg-blue-900/20 mt-3">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-xs">
                      📖 デフォルト値の書き方（初心者向け）:
                    </p>
                    <ul className="space-y-1 text-xs text-blue-800 dark:text-blue-200">
                      <li>
                        <code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">text = "クリック"</code>
                        → 「text」というpropsのデフォルト値を「クリック」に設定
                      </li>
                      <li>
                        <code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">{"<Button />"}</code>
                        → propsを渡さない場合、「クリック」というボタンが表示される
                      </li>
                      <li>
                        <code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">{"<Button text=\"購入する\" />"}</code>
                        → propsを渡した場合、デフォルト値ではなく「購入する」が表示される
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
                <p className="font-medium text-orange-900 dark:text-orange-100 mb-2">
                  ⚠️ 注意点
                </p>
                <ul className="list-disc pl-5 space-y-1 text-orange-800 dark:text-orange-200 text-sm">
                  <li>
                    propsが<code className="px-1 py-0.5 rounded bg-orange-100 dark:bg-orange-900/50">undefined</code>
                    の場合のみ、デフォルト値が使われます
                  </li>
                  <li>
                    <code className="px-1 py-0.5 rounded bg-orange-100 dark:bg-orange-900/50">null</code>
                    や<code className="px-1 py-0.5 rounded bg-orange-100 dark:bg-orange-900/50">false</code>
                    を渡した場合は、デフォルト値は使われません
                  </li>
                </ul>
              </div>

              {/* インタラクティブデモ */}
              <InteractiveButtonWithProps />
            </div>
          </section>

          {/* 例題セクション */}
          <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20 mt-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
              📚 例題
            </h3>
            <p className="text-sm text-green-800 dark:text-green-200 mb-4">
              実際にpropsを使ってコンポーネントを作成してみましょう。
            </p>

            <div className="space-y-4">
              <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  例題1: 挨拶コンポーネント
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  「name」というpropsを受け取り、「こんにちは、[name]さん！」と表示する「Greeting」コンポーネントを作成してください。
                </p>
                <CopyableCodeBlock
                  code={`const Greeting = ({ name }) => {\n  return <h1>こんにちは、{name}さん！</h1>;\n};\n\n// 使用例\nconst App = () => {\n  return (\n    <div>\n      <Greeting name="太郎" />\n      <Greeting name="花子" />\n    </div>\n  );\n};`}
                />
              </div>

              <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  例題2: ユーザープロフィールコンポーネント
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  「name」「age」「job」というpropsを受け取り、ユーザー情報を表示する「UserProfile」コンポーネントを作成してください。
                </p>
                <CopyableCodeBlock
                  code={`const UserProfile = ({ name, age, job }) => {\n  return (\n    <div>\n      <h2>{name}</h2>\n      <p>年齢: {age}歳</p>\n      <p>職業: {job}</p>\n    </div>\n  );\n};\n\n// 使用例\nconst App = () => {\n  return (\n    <div>\n      <UserProfile name="山田太郎" age={25} job="エンジニア" />\n    </div>\n  );\n};`}
                />
              </div>

              <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  例題3: カスタマイズ可能なボタンコンポーネント
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  「text」と「color」というpropsを受け取り、カスタマイズ可能な「Button」コンポーネントを作成してください。
                  「text」のデフォルト値は「クリック」、「color」のデフォルト値は「blue」にしてください。
                </p>
                <CopyableCodeBlock
                  code={`const Button = ({ text = "クリック", color = "blue" }) => {\n  return (\n    <button className={\`btn btn-\${color}\`}>\n      {text}\n    </button>\n  );\n};\n\n// 使用例\nconst App = () => {\n  return (\n    <div>\n      <Button />\n      <Button text="購入する" color="green" />\n      <Button text="削除" color="red" />\n    </div>\n  );\n};`}
                />
              </div>
            </div>
          </div>

          {/* まとめ */}
          <section className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              まとめ
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <p className="font-medium text-green-900 dark:text-green-100 mb-2">
                  🎯 覚えておきたい3つのポイント
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-green-800 dark:text-green-200">
                  <li>
                    <strong>propsは「データを渡す箱」:</strong> 親コンポーネントから子コンポーネントに情報を渡すための仕組みです。
                  </li>
                  <li>
                    <strong>同じコンポーネント、異なるデータ:</strong> propsを使うことで、同じコンポーネントを異なるデータで何度でも使えます（家に例えると、同じ設計の家に異なる家具を入れるようなもの）。
                  </li>
                  <li>
                    <strong>デフォルト値で柔軟性を向上:</strong> デフォルト値を設定することで、propsが渡されなくてもコンポーネントが正しく動作します（メニューの標準注文のようなもの）。
                  </li>
                </ol>
              </div>

              <div className="space-y-3">
                <p>
                  <strong>propsの基本的な使い方:</strong> コンポーネント間でデータを渡すための仕組みです。
                </p>
                <p>
                  <strong>構造化代入:</strong> <code className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800">const Greeting = ({"{ name }"}) =&gt; {"{}"}</code>
                  のように書くと、コードがより読みやすくなります。
                </p>
                <p>
                  <strong>複数のprops:</strong> カンマで区切って複数のpropsを渡すことで、より柔軟なコンポーネントを作成できます。
                </p>
              </div>

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20 mt-4">
                <p className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                  💪 次のステップ
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  propsの基本的な使い方を理解できたら、実際にコードを書いて練習してみましょう。
                  例題に挑戦して、propsを使ったコンポーネントを作成してみてください。
                  最初は難しく感じるかもしれませんが、繰り返し練習することで必ず理解できるようになります！
                </p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="grid grid-cols-3 items-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-800">
            <Link
              href="/react-intro/komponente-sakusei"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 whitespace-nowrap"
            >
              ← 前のレッスン: コンポーネントの作成
            </Link>
            <Link
              href="/react-intro"
              className="justify-self-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 whitespace-nowrap"
            >
              レッスン一覧に戻る
            </Link>
            <Link
              href="/react-intro/ibento-handoring"
              className="justify-self-end rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 whitespace-nowrap"
            >
              次のレッスン: イベントハンドリング →
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-4 py-12 dark:border-gray-800 dark:bg-gray-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center text-sm text-gray-500 dark:text-gray-500">
            <p>
              © 2024 React Learning.
              すべての学習リソースは無料で提供されています。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
