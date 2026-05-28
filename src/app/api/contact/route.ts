import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "خدمة البريد غير مُعدّة. تواصل معنا عبر واتساب." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name?.trim() || name.trim().length < 2) {
      return NextResponse.json({ error: "الاسم مطلوب (حرفان على الأقل)" }, { status: 400 });
    }

    if (!email?.trim() || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json({ error: "بريد إلكتروني غير صالح" }, { status: 400 });
    }

    if (!message?.trim() || message.trim().length < 10) {
      return NextResponse.json(
        { error: "تفاصيل المشروع مطلوبة (10 أحرف على الأقل)" },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "TheKey Tech <onboarding@resend.dev>";

    if (!toEmail) {
      return NextResponse.json(
        { error: "عنوان البريد المستلم غير مُعدّ" },
        { status: 503 }
      );
    }

    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedEmail = email.trim().slice(0, 254);
    const sanitizedMessage = message.trim().slice(0, 5000);

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: sanitizedEmail,
      subject: `طلب تواصل جديد من ${sanitizedName} — ذكي تك`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4460EF;">طلب تواصل جديد</h2>
          <p><strong>الاسم:</strong> ${escapeHtml(sanitizedName)}</p>
          <p><strong>البريد:</strong> ${escapeHtml(sanitizedEmail)}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>تفاصيل المشروع:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(sanitizedMessage)}</p>
        </div>
      `,
      text: `طلب تواصل جديد\n\nالاسم: ${sanitizedName}\nالبريد: ${sanitizedEmail}\n\nتفاصيل المشروع:\n${sanitizedMessage}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "فشل إرسال الرسالة. حاول مرة أخرى لاحقاً." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "تم الإرسال بنجاح" });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "حدث خطأ غير متوقع. حاول مرة أخرى." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
