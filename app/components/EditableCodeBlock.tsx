"use client";

import { useState } from "react";

interface EditableCodeBlockProps {
  code: string;
  placeholder?: string;
  className?: string;
}

export default function EditableCodeBlock({
  code,
  placeholder = "ここにコードを入力してください...",
  className = "",
}: EditableCodeBlockProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [copied, setCopied] = useState(false);
  
  // 自動閉じタグ機能
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputElement = e.target;
    const value = inputElement.value;
    const cursorPosition = inputElement.selectionStart || 0;
    
    // 直前の文字列をチェック（カーソル位置の前）
    const textBeforeCursor = value.substring(0, cursorPosition);
    const textAfterCursor = value.substring(cursorPosition);
    
    // 開始タグのパターンを検出（例: <div>, <p>, <h1>など）
    const tagPattern = /<(\w+)(\s[^>]*)?>$/;
    const match = textBeforeCursor.match(tagPattern);
    
    if (match) {
      const tagName = match[1];
      // 自己完結タグ（img, br, inputなど）はスキップ
      const selfClosingTags = ['img', 'br', 'input', 'hr', 'meta', 'link', 'area', 'base', 'col', 'embed', 'source', 'track', 'wbr'];
      if (!selfClosingTags.includes(tagName.toLowerCase())) {
        const closingTag = `</${tagName}>`;
        // 閉じタグが既に存在するかチェック（カーソル直後に閉じタグがある場合）
        if (!textAfterCursor.startsWith(closingTag)) {
          const newValue = textBeforeCursor + closingTag + textAfterCursor;
          setUserInput(newValue);
          // カーソル位置を開始タグと閉じタグの間に移動
          setTimeout(() => {
            if (inputElement.setSelectionRange) {
              inputElement.setSelectionRange(cursorPosition, cursorPosition);
            }
          }, 0);
          return;
        }
      }
    }
    
    setUserInput(value);
  };

  // コードを関数定義部分とreturn以降に分割
  const lines = code.split('\n');
  const returnIndex = lines.findIndex(line => line.trim().startsWith('return'));
  
  // 単一行のコード（const宣言など）の処理
  if (lines.length === 1) {
    const singleLine = lines[0];
    const equalsIndex = singleLine.indexOf('=');
    if (equalsIndex > 0 && singleLine.trim().startsWith('const')) {
      const declarationPart = singleLine.substring(0, equalsIndex + 1) + ' ';
      const handleCopy = async () => {
        if (!showAnswer) return;
        try {
          await navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error("Failed to copy:", err);
        }
      };

      return (
        <div className={`relative ${className}`}>
          <div className="rounded-md bg-gray-900 p-4 font-mono text-sm text-gray-100 dark:bg-gray-800">
            {showAnswer ? (
              <code className="whitespace-pre">{code}</code>
            ) : (
              <div className="flex items-center gap-2 flex-wrap">
                <code className="text-gray-100">{declarationPart}</code>
                <input
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  placeholder={placeholder}
                  className="flex-1 min-w-[200px] bg-gray-950 text-gray-300 font-mono text-sm border-0 outline-none focus:ring-0 px-2 py-1 rounded opacity-100"
                  spellCheck={false}
                />
                <code className="text-gray-100">;</code>
              </div>
            )}
          </div>
          <div className="absolute top-2 right-2 flex gap-2">
            {showAnswer && (
              <button
                onClick={handleCopy}
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
                title={copied ? "コピーしました！" : "コピー"}
              >
                {copied ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            )}
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="p-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors text-xs font-medium"
              title={showAnswer ? "コードを隠す" : "正解を見る"}
            >
              {showAnswer ? "隠す" : "正解を見る"}
            </button>
          </div>
        </div>
      );
    }
  }
  
  // 関数定義と変数宣言部分（returnの前まで）
  const declarationPart = returnIndex > 0 
    ? lines.slice(0, returnIndex).join('\n') + '\n'
    : lines[0] + '\n';
  
  const handleCopy = async () => {
    if (!showAnswer) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="rounded-md bg-gray-900 p-4 font-mono text-sm text-gray-100 dark:bg-gray-800">
        {showAnswer ? (
          <code className="whitespace-pre">{code}</code>
        ) : (
          <div>
            <code className="text-gray-100 whitespace-pre">{declarationPart}</code>
            <textarea
              value={userInput}
              onChange={handleInputChange}
              placeholder={placeholder}
              className="w-full mt-2 bg-gray-950 text-gray-300 font-mono text-sm border-0 outline-none resize-none focus:ring-0 p-2 rounded min-h-[100px] opacity-100"
              spellCheck={false}
            />
            <code className="text-gray-500 text-xs block mt-2">※ 正解を見るボタンで解答を確認できます</code>
          </div>
        )}
      </div>
      <div className="absolute top-2 right-2 flex gap-2">
        {showAnswer && (
          <button
            onClick={handleCopy}
            className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
            title={copied ? "コピーしました！" : "コピー"}
          >
            {copied ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        )}
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="p-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors text-xs font-medium"
          title={showAnswer ? "コードを隠す" : "正解を見る"}
        >
          {showAnswer ? "隠す" : "正解を見る"}
        </button>
      </div>
    </div>
  );
}
