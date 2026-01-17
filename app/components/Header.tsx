"use client";

import Link from "next/link";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900">
              <span className="text-sm font-bold">R</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              React Learning
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              ログイン
            </button>
            <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
              始める
            </button>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
