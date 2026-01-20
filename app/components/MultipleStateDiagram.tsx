"use client";

export default function MultipleStateDiagram() {
  return (
    <div className="my-6 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-blue-900 dark:text-blue-100">
        📦 複数の状態を管理する方法の比較
      </h3>
      <div className="mx-auto max-w-5xl">
        {/* 方法1: 個別のuseState */}
        <div className="mb-6 rounded-lg border-2 border-green-300 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl">✅</span>
            <h4 className="text-lg font-bold text-green-900 dark:text-green-100">方法1: 個別のuseState（推奨）</h4>
          </div>
          <div className="space-y-3">
            <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
              <div className="rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
                <code className="text-green-800 dark:text-green-200">
                  const [name, setName] = useState("");
                  <br />
                  const [age, setAge] = useState(0);
                  <br />
                  const [email, setEmail] = useState("");
                </code>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg border-2 border-green-400 bg-green-100 p-3 text-center dark:border-green-700 dark:bg-green-900/30">
                <div className="mb-1 text-2xl">👤</div>
                <p className="text-xs font-semibold text-green-900 dark:text-green-100">name</p>
                <p className="mt-1 text-xs text-green-800 dark:text-green-200">独立した状態</p>
              </div>
              <div className="rounded-lg border-2 border-green-400 bg-green-100 p-3 text-center dark:border-green-700 dark:bg-green-900/30">
                <div className="mb-1 text-2xl">🎂</div>
                <p className="text-xs font-semibold text-green-900 dark:text-green-100">age</p>
                <p className="mt-1 text-xs text-green-800 dark:text-green-200">独立した状態</p>
              </div>
              <div className="rounded-lg border-2 border-green-400 bg-green-100 p-3 text-center dark:border-green-700 dark:bg-green-900/30">
                <div className="mb-1 text-2xl">📧</div>
                <p className="text-xs font-semibold text-green-900 dark:text-green-100">email</p>
                <p className="mt-1 text-xs text-green-800 dark:text-green-200">独立した状態</p>
              </div>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-100 p-3 dark:border-green-700 dark:bg-green-900/30">
              <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">✅ メリット:</p>
              <ul className="list-disc space-y-1 pl-5 text-xs text-green-800 dark:text-green-200">
                <li>各状態が独立していて、更新が明確</li>
                <li>一つの状態を更新しても他の状態に影響しない</li>
                <li>コードが読みやすい</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 方法2: オブジェクトのuseState */}
        <div className="rounded-lg border-2 border-orange-300 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl">📦</span>
            <h4 className="text-lg font-bold text-orange-900 dark:text-orange-100">方法2: オブジェクトのuseState</h4>
          </div>
          <div className="space-y-3">
            <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
              <div className="rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
                <code className="text-orange-800 dark:text-orange-200">
                  const [user, setUser] = useState({`{`}
                  <br />
                  &nbsp;&nbsp;name: "",
                  <br />
                  &nbsp;&nbsp;age: 0,
                  <br />
                  &nbsp;&nbsp;email: ""
                  <br />
                  {`}`});
                </code>
              </div>
            </div>
            <div className="rounded-lg border-2 border-orange-400 bg-orange-100 p-4 text-center dark:border-orange-700 dark:bg-orange-900/30">
              <div className="mb-2 text-3xl">📦</div>
              <p className="text-sm font-semibold text-orange-900 dark:text-orange-100">user オブジェクト</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <div className="rounded bg-orange-50 p-2 dark:bg-orange-900/20">
                  <p className="text-xs font-semibold text-orange-900 dark:text-orange-100">name</p>
                </div>
                <div className="rounded bg-orange-50 p-2 dark:bg-orange-900/20">
                  <p className="text-xs font-semibold text-orange-900 dark:text-orange-100">age</p>
                </div>
                <div className="rounded bg-orange-50 p-2 dark:bg-orange-900/20">
                  <p className="text-xs font-semibold text-orange-900 dark:text-orange-100">email</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-orange-200 bg-orange-100 p-3 dark:border-orange-700 dark:bg-orange-900/30">
              <p className="text-sm font-semibold text-orange-900 dark:text-orange-100 mb-2">📝 使用例:</p>
              <ul className="list-disc space-y-1 pl-5 text-xs text-orange-800 dark:text-orange-200">
                <li>関連するデータをまとめて管理したい時</li>
                <li>フォームの入力値をまとめて扱いたい時</li>
                <li>更新時にスプレッド構文（...）を使う必要がある</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

