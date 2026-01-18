import { NextRequest, NextResponse } from "next/server";

// Cloudflare PagesでEdge Runtimeを使用
export const runtime = 'edge';

// メールアドレスのバリデーション
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // バリデーション
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "すべての項目を入力してください" },
        { status: 400 }
      );
    }

    // メールアドレスの形式チェック
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "有効なメールアドレスを入力してください" },
        { status: 400 }
      );
    }

    // Resend APIキーの確認
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      // 開発環境ではコンソールに出力して続行
      console.log("=== お問い合わせ受信（メール送信スキップ）===");
      console.log("お名前:", name);
      console.log("メールアドレス:", email);
      console.log("お問い合わせ内容:", subject);
      console.log("メッセージ:", message);
      console.log("受信日時:", new Date().toLocaleString("ja-JP"));
      console.log("================================");

      return NextResponse.json(
        { message: "お問い合わせを受け付けました（メール送信は設定が必要です）" },
        { status: 200 }
      );
    }

    // 管理者メールアドレス（環境変数から取得、デフォルト値なし）
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) {
      console.error("ADMIN_EMAILが設定されていません");
      return NextResponse.json(
        { error: "サーバー設定エラーが発生しました" },
        { status: 500 }
      );
    }

    // 送信元メールアドレス（Resendで検証済みのドメイン）
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    // HTMLメール本文
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #1f2937;
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background-color: #f9fafb;
              padding: 30px;
              border: 1px solid #e5e7eb;
              border-top: none;
              border-radius: 0 0 8px 8px;
            }
            .field {
              margin-bottom: 20px;
            }
            .field-label {
              font-weight: bold;
              color: #374151;
              margin-bottom: 5px;
              display: block;
            }
            .field-value {
              color: #111827;
              padding: 10px;
              background-color: white;
              border-radius: 4px;
              border: 1px solid #d1d5db;
            }
            .message-box {
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              font-size: 12px;
              color: #6b7280;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">お問い合わせが届きました</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="field-label">お名前</span>
              <div class="field-value">${escapeHtml(name)}</div>
            </div>
            <div class="field">
              <span class="field-label">メールアドレス</span>
              <div class="field-value">${escapeHtml(email)}</div>
            </div>
            <div class="field">
              <span class="field-label">お問い合わせ内容</span>
              <div class="field-value">${escapeHtml(subject)}</div>
            </div>
            <div class="field">
              <span class="field-label">メッセージ</span>
              <div class="field-value message-box">${escapeHtml(message)}</div>
            </div>
            <div class="field">
              <span class="field-label">受信日時</span>
              <div class="field-value">${new Date().toLocaleString("ja-JP", { 
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
              })}</div>
            </div>
          </div>
          <div class="footer">
            <p>このメールは React Learning のお問い合わせフォームから送信されました。</p>
            <p>返信する場合は、このメールに直接返信してください（返信先: ${escapeHtml(email)}）</p>
          </div>
        </body>
      </html>
    `;

    // テキストメール本文
    const textContent = `
お問い合わせが届きました

お名前: ${name}
メールアドレス: ${email}
お問い合わせ内容: ${subject}

メッセージ:
${message}

受信日時: ${new Date().toLocaleString("ja-JP")}

---
このメールは React Learning のお問い合わせフォームから送信されました。
返信する場合は、このメールに直接返信してください。
    `;

    // Fetch APIを使ってResend REST APIを直接呼び出す（Edge Runtime対応）
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: adminEmail,
        reply_to: email,
        subject: `【お問い合わせ】${subject}`,
        html: htmlContent,
        text: textContent,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => ({}));
      console.error("Resend APIエラー:", errorData);
      return NextResponse.json(
        { error: "メール送信に失敗しました" },
        { status: 500 }
      );
    }

    const data = await resendResponse.json();
    console.log("メール送信成功:", data);

    return NextResponse.json(
      { message: "お問い合わせを受け付けました。ありがとうございます。" },
      { status: 200 }
    );
  } catch (error) {
    console.error("APIエラー:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}

// HTMLエスケープ関数
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
