# 開発フローガイド

このプロジェクトの効率的な開発フローです。

## 基本的な開発フロー

### 1. ローカル開発環境の起動

```bash
npm run dev
```

- ブラウザで `http://localhost:3000` にアクセス
- ファイルを編集すると自動的にホットリロードされます
- 開発中は常にこのコマンドを実行しておきます

### 2. コードの編集

- `app/` ディレクトリ内のファイルを編集
- TypeScriptとTailwind CSSを使用
- ESLintが自動的にコードをチェックします

### 3. ビルド前の確認

本番環境にデプロイする前に、ローカルでビルドを確認：

```bash
# 通常のビルド
npm run build

# Cloudflare Pages用のビルド
npm run build:cloudflare
```

### 4. Gitでのバージョン管理

```bash
# 変更を確認
git status

# 変更をステージング
git add .

# コミット（意味のあるメッセージを付ける）
git commit -m "機能説明: 具体的な変更内容"

# リモートにプッシュ
git push
```

### 5. デプロイ

- GitHubにプッシュすると、Cloudflare Pagesが自動的にデプロイを開始します
- Cloudflare Dashboardでデプロイ状況を確認できます

## 効率的な開発のコツ

### ブランチ戦略（推奨）

```bash
# 新しい機能を開発する場合
git checkout -b feature/機能名

# 開発が完了したら
git add .
git commit -m "機能説明"
git push origin feature/機能名

# mainブランチにマージ（GitHubのPull Requestを使用）
```

### 頻繁にコミット

- 小さな変更ごとにコミットする
- 1つのコミット = 1つの変更内容にする
- 意味のあるコミットメッセージを書く

例：
- ✅ `git commit -m "ホームページにヒーローセクションを追加"`
- ✅ `git commit -m "背景画像のパスを修正"`
- ❌ `git commit -m "修正"`

### ローカルでテスト

- デプロイ前に必ずローカルで動作確認
- `npm run build:cloudflare` でビルドエラーを確認
- ブラウザで実際に表示を確認

### 開発サーバーとビルドの使い分け

- **開発中**: `npm run dev` を使用（高速、ホットリロード）
- **デプロイ前**: `npm run build:cloudflare` で確認（本番環境と同じビルド）

## デバッグのコツ

### ブラウザの開発者ツール

- **F12** で開発者ツールを開く
- **Console** タブでエラーを確認
- **Network** タブでリソースの読み込み状況を確認

### コンソールログ

```typescript
// デバッグ用のログ
console.log("デバッグ情報", variable);

// 本番環境では自動的に削除されます（Next.jsの最適化）
```

### TypeScriptのエラー

- エディタ（VS Codeなど）でTypeScriptのエラーを確認
- ビルド前にエラーを解決しておく

## よく使うコマンド一覧

```bash
# 開発サーバー起動
npm run dev

# 通常のビルド
npm run build

# Cloudflare用のビルド
npm run build:cloudflare

# リンターの実行
npm run lint

# Git操作
git status              # 変更状況を確認
git add .               # 全ての変更をステージング
git commit -m "メッセージ"  # コミット
git push                # プッシュ

# パッケージのインストール
npm install             # 依存関係をインストール
npm install パッケージ名   # 新しいパッケージを追加
```

## トラブルシューティング

### 開発サーバーが起動しない

```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### ビルドエラーが発生する

1. TypeScriptのエラーを確認
2. `npm run lint` でリンターエラーを確認
3. エディタのエラー表示を確認

### デプロイが失敗する

1. Cloudflare Dashboardのビルドログを確認
2. ローカルで `npm run build:cloudflare` を実行してエラーを確認
3. `wrangler.toml` の設定を確認

## ベストプラクティス

1. **小さく、頻繁にコミット**
   - 1つの機能や修正ごとにコミット
   - 大きな変更は複数のコミットに分割

2. **意味のあるコミットメッセージ**
   - 何を変更したかが分かるメッセージ
   - なぜ変更したか（必要に応じて）

3. **デプロイ前の確認**
   - ローカルでビルドが通ることを確認
   - ブラウザで動作を確認

4. **エラーの早期発見**
   - エディタのエラー表示を確認
   - 開発サーバーのコンソールを確認

5. **ドキュメントの更新**
   - 重要な変更はドキュメントに反映
   - コメントを適切に書く


