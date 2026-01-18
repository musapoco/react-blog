export interface PracticeProblem {
  id: number;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  challengeCode: string;
  solutionCode: string;
  explanation?: string;
}

export const practiceProblems: PracticeProblem[] = [
  {
    id: 1,
    title: "JSXで見出しと段落を表示",
    description: "見出しと段落を使った簡単なJSXコンポーネントを作成してください。見出しには「こんにちは」、段落には「Reactを学習中です」と表示してください。",
    difficulty: "beginner",
    challengeCode: `// Welcomeコンポーネントを作成してください
// h1タグで見出し、pタグで段落を表示してください
const Welcome = () => {
  // ここにコードを書いてください
};`,
    solutionCode: `const Welcome = () => {
  return (
    <div>
      <h1>こんにちは</h1>
      <p>Reactを学習中です</p>
    </div>
  );
};`,
    explanation: "JSXでは、複数の要素を返す場合は1つの親要素（この場合はdiv）で囲む必要があります。h1は見出し、pは段落を表します。",
  },
  {
    id: 2,
    title: "JSXでクラス名を指定",
    description: "div要素にクラス名「container」と「highlight」を指定するコンポーネントを作成してください。JSXでは「class」ではなく「className」を使います。",
    difficulty: "beginner",
    challengeCode: `// StyledBoxコンポーネントを作成してください
// div要素にclassName属性を使ってクラス名を指定してください
const StyledBox = () => {
  // ここにコードを書いてください
};`,
    solutionCode: `const StyledBox = () => {
  return (
    <div className="container highlight">
      スタイル付きのボックス
    </div>
  );
};`,
    explanation: "JSXでは、HTMLの「class」属性の代わりに「className」を使用します。複数のクラス名はスペースで区切って指定できます。",
  },
  {
    id: 3,
    title: "JSXで画像を表示",
    description: "img要素を使って画像を表示するコンポーネントを作成してください。画像のURLは「https://example.com/image.jpg」、代替テキストは「サンプル画像」にしてください。",
    difficulty: "beginner",
    challengeCode: `// ImageDisplayコンポーネントを作成してください
// img要素を使って画像を表示してください
const ImageDisplay = () => {
  // ここにコードを書いてください
};`,
    solutionCode: `const ImageDisplay = () => {
  return (
    <img 
      src="https://example.com/image.jpg" 
      alt="サンプル画像" 
    />
  );
};`,
    explanation: "JSXでは、img要素は自己終了タグ（<img />）として記述します。src属性で画像のURL、alt属性で代替テキストを指定します。",
  },
  {
    id: 4,
    title: "JSXで複数の要素を返す",
    description: "h1とpの2つの要素を返すコンポーネントを作成してください。h1には「タイトル」、pには「本文」と表示してください。複数の要素を返す場合は、Fragment（<>...</>）またはdivで囲む必要があります。",
    difficulty: "beginner",
    challengeCode: `// Articleコンポーネントを作成してください
// h1とpの2つの要素を返してください
const Article = () => {
  // ここにコードを書いてください
};`,
    solutionCode: `const Article = () => {
  return (
    <>
      <h1>タイトル</h1>
      <p>本文</p>
    </>
  );
};

// または、divを使う方法
// const Article = () => {
//   return (
//     <div>
//       <h1>タイトル</h1>
//       <p>本文</p>
//     </div>
//   );
// };`,
    explanation: "JSXでは、複数の要素を返す場合は1つの親要素が必要です。Fragment（<>...</>）を使うと、追加のDOM要素を作らずに複数の要素を返せます。divで囲む方法も使えます。",
  },
  {
    id: 5,
    title: "JSXで変数を表示",
    description: "変数nameに「太郎」という値を代入し、その変数をJSX内で表示するコンポーネントを作成してください。「こんにちは、{name}さん」と表示してください。",
    difficulty: "beginner",
    challengeCode: `// Greetingコンポーネントを作成してください
// 変数nameを定義し、JSX内で{}を使って表示してください
const Greeting = () => {
  // ここにコードを書いてください
};`,
    solutionCode: `const Greeting = () => {
  const name = "太郎";
  
  return (
    <p>こんにちは、{name}さん</p>
  );
};`,
    explanation: "JSX内でJavaScriptの変数や式を表示するには、波括弧{}で囲みます。これにより、動的な値を表示できます。",
  },
  {
    id: 6,
    title: "簡単なボタンコンポーネント",
    description: "「クリックしてください」というテキストを表示するボタンコンポーネントを作成してください。",
    difficulty: "beginner",
    challengeCode: `// Buttonコンポーネントを作成してください
const Button = () => {
  // ここにコードを書いてください
};`,
    solutionCode: `const Button = () => {
  return <button>クリックしてください</button>;
};`,
    explanation: "シンプルな関数コンポーネントで、button要素を返すだけです。",
  },
  {
    id: 7,
    title: "カウンターコンポーネント",
    description: "ボタンをクリックするとカウントが1ずつ増えるカウンターコンポーネントを作成してください。初期値は0とします。",
    difficulty: "beginner",
    challengeCode: `import { useState } from 'react';

// Counterコンポーネントを作成してください
const Counter = () => {
  // useStateを使ってカウント数を管理してください
  // ボタンクリックでカウントを増やす処理を追加してください
};`,
    solutionCode: `import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};`,
    explanation: "useStateでcountの状態を管理し、ボタンクリック時にsetCountで状態を更新します。",
  },
  {
    id: 8,
    title: "名前入力フォーム",
    description: "名前を入力すると「こんにちは、[名前]さん」と表示されるコンポーネントを作成してください。",
    difficulty: "beginner",
    challengeCode: `import { useState } from 'react';

// NameInputコンポーネントを作成してください
const NameInput = () => {
  // 名前を状態として管理してください
  // onChangeイベントで入力値を更新してください
};`,
    solutionCode: `import { useState } from 'react';

const NameInput = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={handleChange} 
        placeholder="名前を入力"
      />
      {name && <p>こんにちは、{name}さん</p>}
    </div>
  );
};`,
    explanation: "useStateでnameの状態を管理し、onChangeイベントでe.target.valueを取得して状態を更新します。",
  },
  {
    id: 9,
    title: "プロパティを受け取るコンポーネント",
    description: "nameというプロパティを受け取り、「こんにちは、[name]さん」と表示するGreetingコンポーネントを作成してください。",
    difficulty: "beginner",
    challengeCode: `// Greetingコンポーネントを作成してください
// propsからnameを受け取って表示してください
const Greeting = (props) => {
  // ここにコードを書いてください
};`,
    solutionCode: `const Greeting = (props) => {
  return <h1>こんにちは、{props.name}さん</h1>;
};

// 使用例
<Greeting name="太郎" />
<Greeting name="花子" />`,
    explanation: "コンポーネントのpropsオブジェクトからnameプロパティを取得して表示します。",
  },
  {
    id: 10,
    title: "条件付きレンダリング",
    description: "isLoggedInという状態があり、trueのときは「ログイン中」、falseのときは「ログアウト中」と表示するコンポーネントを作成してください。",
    difficulty: "beginner",
    challengeCode: `import { useState } from 'react';

// LoginStatusコンポーネントを作成してください
const LoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // isLoggedInの値に応じて条件分岐で表示を変えてください
  // ボタンをクリックするとisLoggedInを切り替えてください
};`,
    solutionCode: `import { useState } from 'react';

const LoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? <p>ログイン中</p> : <p>ログアウト中</p>}
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'ログアウト' : 'ログイン'}
      </button>
    </div>
  );
};`,
    explanation: "三項演算子（条件 ? trueの場合 : falseの場合）を使って、isLoggedInの値に応じて表示を切り替えます。",
  },
  {
    id: 11,
    title: "リストの表示",
    description: "商品名の配列を受け取り、それぞれをリスト項目として表示するコンポーネントを作成してください。",
    difficulty: "beginner",
    challengeCode: `// ProductListコンポーネントを作成してください
// productsという配列のプロパティを受け取り、各商品を<li>要素で表示してください
const ProductList = ({ products }) => {
  // ここにコードを書いてください
};

// 使用例
const items = ['リンゴ', 'バナナ', 'オレンジ'];
<ProductList products={items} />`,
    solutionCode: `const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
  );
};

// 使用例
const items = ['リンゴ', 'バナナ', 'オレンジ'];
<ProductList products={items} />`,
    explanation: "mapメソッドを使って配列の各要素をJSX要素に変換します。keyプロパティには一意の値（indexなど）を指定します。",
  },
  {
    id: 12,
    title: "複数の状態管理",
    description: "名前、メール、年齢の3つのフィールドを持つフォームコンポーネントを作成してください。各フィールドの値を個別に状態として管理してください。",
    difficulty: "intermediate",
    challengeCode: `import { useState } from 'react';

// UserFormコンポーネントを作成してください
const UserForm = () => {
  // 名前、メール、年齢をそれぞれ状態として管理してください
  // 各入力フィールドのonChangeで対応する状態を更新してください
  // 送信ボタンをクリックすると、入力値をアラートで表示してください
};`,
    solutionCode: `import { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`名前: \${name}\\nメール: \${email}\\n年齢: \${age}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          名前:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </label>
      </div>
      <div>
        <label>
          メール:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
      </div>
      <div>
        <label>
          年齢:
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
          />
        </label>
      </div>
      <button type="submit">送信</button>
    </form>
  );
};`,
    explanation: "複数の状態を個別のuseStateで管理します。各入力フィールドに対応する状態と更新関数を使用します。e.preventDefault()でフォームのデフォルト送信を防ぎます。",
  },
  {
    id: 13,
    title: "トグルスイッチ",
    description: "ダークモードのON/OFFを切り替えるトグルスイッチコンポーネントを作成してください。ONのときは背景が暗く、OFFのときは明るく表示してください。",
    difficulty: "intermediate",
    challengeCode: `import { useState } from 'react';

// DarkModeToggleコンポーネントを作成してください
const DarkModeToggle = () => {
  // ダークモードのON/OFFを状態として管理してください
  // 状態に応じて背景色とテキスト色を変更してください
  // トグルボタンをクリックすると状態を切り替えてください
};`,
    solutionCode: `import { useState } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div 
      style={{
        backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
        color: isDark ? '#ffffff' : '#000000',
        padding: '20px',
        minHeight: '200px',
        borderRadius: '8px',
      }}
    >
      <p>ダークモード: {isDark ? 'ON' : 'OFF'}</p>
      <button onClick={toggleDarkMode}>
        {isDark ? 'ライトモードに切替' : 'ダークモードに切替'}
      </button>
    </div>
  );
};`,
    explanation: "isDarkという状態でダークモードのON/OFFを管理し、その値に応じてスタイルを条件付きで適用します。",
  },
  {
    id: 14,
    title: "カウントダウンタイマー",
    description: "開始ボタンをクリックすると10秒からカウントダウンを開始するタイマーコンポーネントを作成してください。0になったら停止してください。",
    difficulty: "intermediate",
    challengeCode: `import { useState, useEffect } from 'react';

// CountdownTimerコンポーネントを作成してください
const CountdownTimer = () => {
  // カウントダウンの秒数を状態として管理してください
  // useEffectを使って1秒ごとにカウントダウンを減らしてください
  // 0になったら停止してください
  // 開始ボタンでカウントダウンを開始してください
};`,
    solutionCode: `import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [count, setCount] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (count === 0) {
      setIsRunning(false);
    }
  }, [isRunning, count]);

  const start = () => {
    setCount(10);
    setIsRunning(true);
  };

  return (
    <div>
      <p>残り時間: {count}秒</p>
      <button onClick={start} disabled={isRunning}>
        {isRunning ? 'カウントダウン中...' : '開始'}
      </button>
    </div>
  );
};`,
    explanation: "useEffectを使ってタイマーを実装します。依存配列にisRunningとcountを指定し、条件に応じてタイマーを設定・クリーンアップします。",
  },
  {
    id: 15,
    title: "Todoアプリ",
    description: "Todo項目を追加・削除できるTodoアプリを作成してください。入力フィールドにテキストを入力して追加ボタンをクリックするとリストに追加され、各項目の削除ボタンで削除できます。",
    difficulty: "advanced",
    challengeCode: `import { useState } from 'react';

// TodoAppコンポーネントを作成してください
const TodoApp = () => {
  // Todo項目の配列を状態として管理してください
  // 入力フィールドの値を状態として管理してください
  // 追加ボタンでTodoを追加してください
  // 各Todo項目に削除ボタンを追加してください
};`,
    solutionCode: `import { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <div>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Todoを入力"
        />
        <button onClick={addTodo}>追加</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};`,
    explanation: "配列の状態管理と、スプレッド演算子（...）を使った配列の追加、filterメソッドを使った削除を組み合わせて実装します。各Todoには一意のIDを付与します。",
  },
];

