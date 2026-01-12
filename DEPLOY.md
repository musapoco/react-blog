# Cloudflare Pages デプロイガイド

このプロジェクトは OpenNextアダプターを使用して Cloudflare Pages にデプロイします。

## デプロイ方法

### 方法 1: Cloudflare Dashboard（推奨）

1. **Git リポジトリにプッシュ**

   - このプロジェクトを GitHub/GitLab/Bitbucket にプッシュ

2. **Cloudflare Dashboard で設定**

   - [Cloudflare Dashboard](https://dash.cloudflare.com/)にログイン
   - 「Workers & Pages」→「Create application」→「Pages」→「Connect to Git」を選択
   - リポジトリを選択

3. **ビルド設定**

   - **Framework preset**: None
   - **Build command**: `npm run build:cloudflare`
   - **Build output directory**: `.open-next/cloudflare`
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
npx wrangler pages deploy .open-next/cloudflare --project-name=your-project-name
```

## ビルドコマンドの説明

- `npm run build:cloudflare`: OpenNextアダプターを使用して Next.js アプリを Cloudflare Pages 用にビルドします

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

- ビルド出力ディレクトリが正しいか確認（`.open-next/cloudflare`）
- Cloudflare Dashboard のビルドログを確認
- 互換性フラグが正しく設定されているか確認

## OpenNextアダプターについて

このプロジェクトは `@opennextjs/cloudflare` を使用しています。これは `@cloudflare/next-on-pages` の後継として推奨されています。

- **設定ファイル**: `open-next.config.ts`
- **ビルド出力**: `.open-next/cloudflare`
