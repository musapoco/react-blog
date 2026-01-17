# Resend メール送信の設定方法

お問い合わせフォームからメールを送信するためのResendの設定手順です。

## 1. Resendアカウントの作成

1. [Resend](https://resend.com/)にアクセス
2. アカウントを作成（無料プランあり）
3. ダッシュボードにログイン

## 2. APIキーの取得

1. Resendダッシュボードの「API Keys」セクションに移動
2. 「Create API Key」をクリック
3. APIキーに名前を付けて作成
4. 表示されたAPIキーをコピー（表示されるのは一度だけなので注意）

## 3. 環境変数の設定

### ローカル環境（開発用）

プロジェクトのルートディレクトリに `.env.local` ファイルを作成：

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
ADMIN_EMAIL=your-email@example.com
RESEND_FROM_EMAIL=onboarding@resend.dev
```

### 本番環境（Cloudflare Pages）

1. Cloudflare Dashboardにログイン
2. プロジェクトの「Settings」→「Environment variables」に移動
3. 以下の環境変数を追加：
   - `RESEND_API_KEY`: ResendのAPIキー
   - `ADMIN_EMAIL`: お問い合わせを受け取るメールアドレス
   - `RESEND_FROM_EMAIL`: 送信元メールアドレス（オプション）

## 4. 送信元メールアドレスの設定

### 開発・テスト用（初期設定）

`RESEND_FROM_EMAIL` を設定しない場合、デフォルトの `onboarding@resend.dev` が使用されます。
これは開発・テスト専用です。

### 本番環境用（推奨）

1. Resendダッシュボードの「Domains」セクションに移動
2. 「Add Domain」をクリック
3. 独自ドメインを追加（例: `example.com`）
4. DNS設定を追加（Resendが提供するDNSレコードを設定）
5. 検証が完了したら、`RESEND_FROM_EMAIL` を `noreply@yourdomain.com` のように設定

## 5. 動作確認

1. `.env.local` ファイルを作成して環境変数を設定
2. 開発サーバーを起動: `npm run dev`
3. お問い合わせフォームから送信
4. 設定した `ADMIN_EMAIL` にメールが届くことを確認

## トラブルシューティング

### メールが届かない

- `RESEND_API_KEY` が正しく設定されているか確認
- `ADMIN_EMAIL` が正しく設定されているか確認
- Resendダッシュボードの「Logs」で送信履歴を確認
- ブラウザのコンソールやサーバーのログでエラーを確認

### APIキーエラー

- APIキーが有効期限内か確認
- APIキーにスコープ（権限）があるか確認

### 送信元ドメインエラー

- 独自ドメインを使用する場合は、DNS設定が正しく完了しているか確認
- 開発環境では `onboarding@resend.dev` を使用

## 参考リンク

- [Resend公式ドキュメント](https://resend.com/docs)
- [Resend APIリファレンス](https://resend.com/docs/api-reference)
