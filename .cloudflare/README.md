# Cloudflare Pages デプロイ手順

このNext.jsアプリケーションをCloudflare Pagesでデプロイする手順です。

## 前提条件

- Cloudflareアカウント
- GitHub/GitLab/Bitbucketアカウント（Gitリポジトリが必要）

## デプロイ手順

### 方法1: Cloudflare Dashboardからデプロイ

1. [Cloudflare Dashboard](https://dash.cloudflare.com/)にログイン
2. 「Pages」セクションを選択
3. 「プロジェクトを作成」をクリック
4. Gitリポジトリを接続
5. ビルド設定を以下のように設定：
   - **フレームワークプリセット**: Next.js
   - **ビルドコマンド**: `npm run build:cloudflare`
   - **ビルド出力ディレクトリ**: `.vercel/output/static`
   - **ルートディレクトリ**: `/`（プロジェクトルート）

### 方法2: Wrangler CLIを使用

1. Wranglerをインストール（未インストールの場合）:
   ```bash
   npm install -g wrangler
   ```

2. Cloudflareにログイン:
   ```bash
   wrangler login
   ```

3. ビルドとデプロイ:
   ```bash
   npm run build:cloudflare
   npx wrangler pages deploy .vercel/output/static
   ```

## 注意事項

- Cloudflare Pagesでは、Next.jsの一部の機能が制限される場合があります
- Edge Runtimeを使用する場合は、互換性を確認してください
- 環境変数が必要な場合は、Cloudflare Dashboardの「設定」→「環境変数」から設定できます

