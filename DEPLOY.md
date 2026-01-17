# Cloudflare Pages デプロイガイド

このプロジェクトは `@cloudflare/next-on-pages` を使用して Cloudflare Pages にデプロイします。

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
   - **Build output directory**: `.vercel/output`
   - **Root directory**: `/`（デフォルト）

4. **互換性フラグの設定（重要）**

   - 「Settings」→「Runtime」→「Compatibility flags」を開く
   - `nodejs_compat` または `nodejs_compat_populate_process_env` を追加
   - 「Save」をクリック
   - ⚠️ **重要**: Next.js 16.x を使用している場合、このフラグは推奨です

5. **環境変数（必要な場合）**

   - 「Settings」→「Environment variables」から設定

6. **デプロイ**
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
npx wrangler pages deploy .vercel/output --project-name=react-blog
```

## ビルドコマンドの説明

- `npm run build:cloudflare`: `@cloudflare/next-on-pages` を使用して Next.js アプリを Cloudflare Pages 用にビルドします
- ビルド出力は `.vercel/output` ディレクトリに生成されます

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

- ビルド出力ディレクトリが正しいか確認（`.vercel/output`）
- Cloudflare Dashboard のビルドログを確認
- 互換性フラグが正しく設定されているか確認
- GitHub連携が正しく機能しているか確認（Builds → Manage under Git Repository）
- ブラウザキャッシュやCloudflare CDNキャッシュをクリア

## @cloudflare/next-on-pages について

このプロジェクトは `@cloudflare/next-on-pages` を使用してNext.jsアプリをCloudflare Pagesで実行します。

- **設定ファイル**: `wrangler.toml`
- **ビルド出力**: `.vercel/output`
- **互換性フラグ**: `nodejs_compat` が必要
