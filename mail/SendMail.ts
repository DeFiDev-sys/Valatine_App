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
  await sgMail
    .send(msg)
    .then(() => {
      console.log("Mail sent successfully");
    })
    .catch((error) => {
      console.error("SendGrid Error:", error.response?.body || error);
    });
};
