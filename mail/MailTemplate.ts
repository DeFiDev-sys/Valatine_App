import { Style } from "@/types/customTypes";

const getHexColor = (twClass: string) => {
  const colors: Record<string, string> = {
    // Text colors
    "text-pink-900": "#500724",
    "text-gray-800": "#1f2937",
    "text-gray-900": "#111827",
    // Accent colors
    "text-red-500": "#ef4444",
    "text-purple-600": "#9333ea",
    "text-gray-600": "#4b5563",
  };
  return colors[twClass] || "#333333";
};

const getGradient = (twGradient: string) => {
  const gradients: Record<string, string> = {
    "from-pink-100 via-pink-200 to-red-200":
      "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #ffcdd2 100%)",
    "from-purple-100 via-pink-50 to-rose-100":
      "linear-gradient(135deg, #f3e5f5 0%, #fff1f2 50%, #ffe4e6 100%)",
    "from-gray-50 via-white to-gray-100":
      "linear-gradient(135deg, #f9fafb 0%, #ffffff 50%, #f3f4f6 100%)",
  };
  return (
    gradients[twGradient] || "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
  );
};

export const MailTemplate = ({
  receiverName,
  senderName,
  message,
  style,
}: {
  receiverName: string;
  senderName: string;
  message: string;
  style: Style;
}) => {
  const textColor = getHexColor(style.textColor);
  const accentColor = getHexColor(style.accentColor);
  const bgGradient = getGradient(style.bgGradient);

  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Valentine's Day!</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f7fa;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 40px auto;
            background-color: white;
            border-radius: 24px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.1);
            overflow: hidden;
            border: 1px solid #eeeeee;
        }
        .header {
            background: ${bgGradient};
            padding: 50px 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 36px;
            font-weight: 800;
            color: ${textColor};
            letter-spacing: 1px;
            text-shadow: 0 2px 4px rgba(255,255,255,0.3);
        }
        .content {
            padding: 40px 40px;
            text-align: center;
        }
        .message-box {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 16px;
        }
        .message-text {
            font-size: 22px;
            line-height: 1.6;
            color: ${textColor};
            margin-bottom: 24px;
            white-space: pre-wrap;
            font-family: 'Dancing Script', cursive, Georgia, serif;
        }
        .signature {
            font-size: 26px;
            font-weight: 700;
            color: ${accentColor};
            margin-top: 10px;
            font-family: 'Dancing Script', cursive, Georgia, serif;
        }
        .footer {
            background-color: #f9fafb;
            padding: 24px 30px;
            text-align: center;
            border-top: 1px solid #f3f4f6;
        }
        .footer p {
            margin: 0;
            font-size: 14px;
            color: #9ca3af;
        }
        .heart-icon {
            font-size: 54px;
            margin-bottom: 16px;
            display: block;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header" style="background: ${bgGradient};">
            <span class="heart-icon">${style.icon}</span>
            <h1 style="color: ${textColor}; margin: 0; font-size: 36px; font-family: sans-serif;">Happy Valentine's Day!</h1>
        </div>
        <div class="content" style="padding: 40px; text-align: center;">
            <div class="message-box">
                <p style="color: ${textColor}; font-size: 22px; margin-bottom: 20px; font-family: serif;">Hi ${receiverName},</p>
                <p class="message-text" style="color: ${textColor}; font-size: 22px; line-height: 1.6; margin-bottom: 30px; font-family: serif;">${message}</p>
                <p style="color: ${textColor}; font-size: 20px; margin-bottom: 10px; opacity: 0.8; font-family: serif;">With all my love,</p>
                <p class="signature" style="color: ${accentColor}; font-size: 28px; font-weight: 700; margin: 0; font-family: serif;">${senderName}</p>
            </div>
        </div>
        <div class="footer" style="background-color: #f9fafb; padding: 24px 30px; border-top: 1px solid #f3f4f6; text-align: center;">
            <p style="margin: 0; font-size: 14px; color: #9ca3af;">Sent with love from ValApp · Valentine's 2026</p>
        </div>
    </div>
</body>
</html>
    `;
};
