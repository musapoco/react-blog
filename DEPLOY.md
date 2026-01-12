# Cloudflare Pages デプロイガイド

このプロジェクトを Cloudflare Pages でデプロイする手順です。

## デプロイ方法

### 方法 1: Cloudflare Dashboard（推奨）

1. **Git リポジトリにプッシュ**

   - このプロジェクトを GitHub/GitLab/Bitbucket にプッシュ

2. **Cloudflare Dashboard で設定**

   - [Cloudflare Dashboard](https://dash.cloudflare.com/)にログイン
   - 「Workers & Pages」→「Create application」→「Pages」→「Connect to Git」を選択
   - リポジトリを選択

3. **ビルド設定**

   - **Framework preset**: None（または Next.js を選択した場合は上書き）
   - **Build command**: `npm run build:cloudflare`
   - **Build output directory**: `.vercel/output/static`（または空欄のまま）
   - **Root directory**: `/`（デフォルト）
   - **Deploy command**: （空欄のまま、または削除）

   ⚠️ **重要**: `@cloudflare/next-on-pages`は非推奨になりましたが、現在は動作します。
   将来的には OpenNext adapter への移行を検討してください。

4. **環境変数（必要な場合）**

   - 「Settings」→「Environment variables」から設定

5. **デプロイ**
   - 「Save and Deploy」をクリック

### 方法 2: Wrangler CLI

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

- `npm run build:cloudflare`: Next.js をビルドし、Cloudflare Pages 用に変換します

## 注意事項

- Node.js のバージョン: Cloudflare Pages は Node.js 18.x 以上を推奨
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
- Cloudflare Dashboard のビルドログを確認
