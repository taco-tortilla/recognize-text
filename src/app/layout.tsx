import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "web ocr",
  description: "OCR web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
