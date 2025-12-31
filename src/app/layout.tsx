import "./globals.css";
import { Metadata } from "next";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Tatami - Modern Rent Payments in Qatar",
  description:
    "Tatami provides a seamless rent payment/collection platform for renters and landlords in Qatar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="light">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
