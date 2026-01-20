"use client";

export default function MultipleUseEffectDiagram() {
  return (
    <div className="my-6 rounded-lg border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-orange-900 dark:text-orange-100">
        📚 複数のuseEffectを使い分ける理由
      </h3>
      <div className="mx-auto max-w-4xl">
        {/* 悪い例 */}
        <div className="mb-8 rounded-lg border-2 border-red-300 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl">❌</span>
            <h4 className="text-lg font-bold text-red-900 dark:text-red-100">悪い例：1つのuseEffectに全部書く</h4>
          </div>
          <div className="space-y-3">
            <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
              <div className="rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
                <code className="text-red-800 dark:text-red-200">
                  useEffect(() ={`>`} {`{`}
                  <br />
                  &nbsp;&nbsp;// タイトル更新
                  <br />
                  &nbsp;&nbsp;document.title = "カウント: " + count;
                  <br />
                  <br />
                  &nbsp;&nbsp;// ローカルストレージ保存
                  <br />
                  &nbsp;&nbsp;localStorage.setItem("count", String(count));
                  <br />
                  <br />
                  &nbsp;&nbsp;// ログ送信
                  <br />
                  &nbsp;&nbsp;sendLog(count);
                  <br />
                  {`}`}, [count]);
                </code>
              </div>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-100 p-3 dark:border-red-700 dark:bg-red-900/30">
              <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ 問題点:</p>
              <ul className="list-disc space-y-1 pl-5 text-xs text-red-800 dark:text-red-200">
                <li>何をしているuseEffectなのか一目で分からない</li>
                <li>テストが難しい（1つずつテストできない）</li>
                <li>バグの原因を特定しにくい</li>
                <li>再利用が難しい</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 良い例 */}
        <div className="rounded-lg border-2 border-green-300 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl">✅</span>
            <h4 className="text-lg font-bold text-green-900 dark:text-green-100">良い例：役割ごとに分割</h4>
          </div>
          <div className="space-y-4">
            {/* useEffect 1 */}
            <div className="rounded-lg border-l-4 border-blue-500 bg-white p-4 dark:bg-gray-900">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-lg">📝</span>
                <h5 className="font-semibold text-gray-900 dark:text-white">タイトル更新用</h5>
              </div>
              <div className="rounded bg-gray-50 p-2 font-mono text-xs dark:bg-gray-800">
                <code className="text-green-800 dark:text-green-200">
                  useEffect(() ={`>`} {`{`}
                  <br />
                  &nbsp;&nbsp;document.title = "カウント: " + count;
                  <br />
                  {`}`}, [count]);
                </code>
              </div>
            </div>

            {/* useEffect 2 */}
            <div className="rounded-lg border-l-4 border-purple-500 bg-white p-4 dark:bg-gray-900">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-lg">💾</span>
                <h5 className="font-semibold text-gray-900 dark:text-white">ローカルストレージ保存用</h5>
              </div>
              <div className="rounded bg-gray-50 p-2 font-mono text-xs dark:bg-gray-800">
                <code className="text-green-800 dark:text-green-200">
                  useEffect(() ={`>`} {`{`}
                  <br />
                  &nbsp;&nbsp;localStorage.setItem("count", String(count));
                  <br />
                  {`}`}, [count]);
                </code>
              </div>
            </div>

            {/* useEffect 3 */}
            <div className="rounded-lg border-l-4 border-orange-500 bg-white p-4 dark:bg-gray-900">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-lg">📊</span>
                <h5 className="font-semibold text-gray-900 dark:text-white">ログ送信用</h5>
              </div>
              <div className="rounded bg-gray-50 p-2 font-mono text-xs dark:bg-gray-800">
                <code className="text-green-800 dark:text-green-200">
                  useEffect(() ={`>`} {`{`}
                  <br />
                  &nbsp;&nbsp;sendLog(count);
                  <br />
                  {`}`}, [count]);
                </code>
              </div>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-100 p-3 dark:border-green-700 dark:bg-green-900/30">
              <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">✅ メリット:</p>
              <ul className="list-disc space-y-1 pl-5 text-xs text-green-800 dark:text-green-200">
                <li>一つ一つのuseEffectが「何のための処理か」明確</li>
                <li>メンテナンス性が向上</li>
                <li>個別にテストできる</li>
                <li>必要に応じて無効化しやすい</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 視覚的な比較 */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-lg border-2 border-red-300 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <h4 className="mb-3 text-center font-semibold text-red-900 dark:text-red-100">❌ 悪い例</h4>
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-32 w-32 rounded-lg bg-red-200 dark:bg-red-900/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">📦</span>
                </div>
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-red-800 dark:text-red-200">
              全部詰め込んだ大きな箱<br />
              （何が入っているか分からない）
            </p>
          </div>

          <div className="rounded-lg border-2 border-green-300 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
            <h4 className="mb-3 text-center font-semibold text-green-900 dark:text-green-100">✅ 良い例</h4>
            <div className="flex justify-center gap-2">
              <div className="relative">
                <div className="h-16 w-16 rounded-lg bg-blue-200 dark:bg-blue-900/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
              </div>
              <div className="relative">
                <div className="h-16 w-16 rounded-lg bg-purple-200 dark:bg-purple-900/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">💾</span>
                </div>
              </div>
              <div className="relative">
                <div className="h-16 w-16 rounded-lg bg-orange-200 dark:bg-orange-900/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-green-800 dark:text-green-200">
              役割ごとに整理された箱<br />
              （何が入っているか一目瞭然）
            </p>
          </div>
        </div>

        {/* 例え話 */}
        <div className="mt-6 rounded-lg border border-orange-300 bg-orange-100 p-4 dark:border-orange-700 dark:bg-orange-900/30">
          <h4 className="mb-3 font-semibold text-orange-900 dark:text-orange-100">📚 身近な例えで理解しよう：引き出しの整理の例</h4>
          <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
            <p>
              <strong>❌ 悪い例:</strong> 全部を1つの引き出しに詰め込むと、何がどこにあるか分からなくなります。
              「鉛筆を取り出したい」だけなのに、引き出し全体を開けて探さなければなりません。
            </p>
            <p>
              <strong>✅ 良い例:</strong> 文房具用、書類用、工具用と引き出しを分けると、必要なものをすぐに見つけられます。
              それぞれの引き出しに「何が入っているか」が明確で、整理整頓されています。
            </p>
            <p>
              <strong>💡 useEffectも同じ:</strong> 1つのuseEffectに全部書くのではなく、役割ごとに分けることで、
              コードが読みやすくなり、バグの原因も特定しやすくなります。
              まるで「整理された引き出し」のような、美しいコードになります！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

