# 💝 My Valentine - Digital Postcard Creator

A premium, modern web application designed to help you spread love. Create and send beautiful, personalized Valentine's Day postcards to your special someone with just a few clicks.

![My Valentine OG Image](./public/og-image.png)

## ✨ Features

- **Personalized Postcards**: Enter your message, sender, and receiver details.
- **Dynamic Themes**: Choose from three premium, animated styles:
  - 🥰 **Cute**: Vibrant pinks and hearts.
  - ✨ **Elegant**: Minimalist purple and rose tones.
  - 🤍 **Minimal**: Clean, modern aesthetics.
- **Smart Emailing**: Sends personalized HTML emails directly to recipients using **SendGrid**.
- **Premium UI**: Built with **Framer Motion** for smooth, delightful interactions and transitions.
- **Mobile First**: Fully responsive design that looks stunning on any device.
- **SEO Optimized**: Custom metadata and high-quality Open Graph images for perfect social sharing.

## 🚀 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescript.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://motion.dev/)
- **Email Service**: [SendGrid](https://sendgrid.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or later
- A SendGrid Account (for email delivery)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/my-valentine.git
   cd my-valentine/client
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the `client` directory and add your SendGrid credentials:

   ```env
   SENDGRID_API_KEY='your_sendgrid_api_key'
   SENDGRID_VERIFIED_SENDER='your_verified_sender_email@example.com'
   ```

4. **Run the development server**:

   ```bash
   pnpm run dev
   ```

5. **Open the app**:
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal).

## 💌 Sending Emails

To enable the email feature, ensure:

1. You have a valid **SendGrid API Key**.
2. The `SENDGRID_VERIFIED_SENDER` matches a verified identity in your [SendGrid Sender Authentication](https://app.sendgrid.com/settings/sender_auth) settings.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by Juwon
