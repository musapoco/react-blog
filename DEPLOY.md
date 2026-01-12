# Cloudflare Pages デプロイガイド

このプロジェクトをCloudflare Pagesでデプロイする手順です。

## デプロイ方法

### 方法1: Cloudflare Dashboard（推奨）

1. **Gitリポジトリにプッシュ**
   - このプロジェクトをGitHub/GitLab/Bitbucketにプッシュ

2. **Cloudflare Dashboardで設定**
   - [Cloudflare Dashboard](https://dash.cloudflare.com/)にログイン
   - 「Workers & Pages」→「Create application」→「Pages」→「Connect to Git」を選択
   - リポジトリを選択

3. **ビルド設定**
   - **Framework preset**: Next.js（自動検出される場合があります）
   - **Build command**: `npm run build:cloudflare`
   - **Build output directory**: `.vercel/output/static`
   - **Root directory**: `/`（デフォルト）

4. **環境変数（必要な場合）**
   - 「Settings」→「Environment variables」から設定

5. **デプロイ**
   - 「Save and Deploy」をクリック

### 方法2: Wrangler CLI

```bash
# Wranglerをインストール（初回のみ）
npm install -g wrangler

# Cloudflareにログイン
wrangler login

# ビルド
npm run build:cloudflare

# デプロイ
npx wrangler pages deploy .vercel/output/static
```

## ビルドコマンドの説明

- `npm run build:cloudflare`: Next.jsをビルドし、Cloudflare Pages用に変換します

## 注意事項

- Node.jsのバージョン: Cloudflare PagesはNode.js 18.x以上を推奨
- ビルド時間: 初回ビルドは数分かかる場合があります
- 環境変数: 機密情報は環境変数として設定してください

## トラブルシューティング

### ビルドエラーが発生する場合

1. ローカルでビルドをテスト:
   ```bash
   npm run build:cloudflare
   ```

2. 依存関係を再インストール:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### デプロイ後、ページが表示されない場合

- ビルド出力ディレクトリが正しいか確認（`.vercel/output/static`）
- Cloudflare Dashboardのビルドログを確認

