"use server";

import sgMail from "@sendgrid/mail";
import { MailTemplate } from "@/mail/MailTemplate";
import { Style } from "@/types/customTypes";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

type MailData = {
  receiverName: string;
  senderName: string;
  message: string;
  receiverEmail: string;
  senderEmail: string;
  style: Style;
};

export const sendMail = async ({
  receiverName,
  senderName,
  message,
  receiverEmail,
  senderEmail,
  style,
}: MailData) => {
  const msg = {
    to: receiverEmail,
    from: process.env.SENDGRID_VERIFIED_SENDER!,
    replyTo: senderEmail,
    subject: "Happy Valentine's Day",
    html: MailTemplate({ receiverName, senderName, message, style }),
  };

  try {
    await sgMail.send(msg);
    console.log("Mail sent successfully");
    return { success: true };
  } catch (error: any) {
    console.error("SendGrid Error:", error.response?.body || error);
    return {
      success: false,
      error:
        error.response?.body?.errors?.[0]?.message ||
        "Failed to send email. Please check your connection.",
    };
  }
};
