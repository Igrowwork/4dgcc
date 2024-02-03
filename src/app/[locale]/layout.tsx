import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { inter } from "@/app/fonts";
import { unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider, useMessages } from "next-intl"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fourth Dimension General Contracting LLC: Expert construction services for your projects in Abu Dhabi, UAE",
  keywords: [ 'construction services in riyadh', 'construction services', 'Fourth dimension construction', 'construction projects', 'building construction services','electrical construction', 'mechanical construction', 'oil and gas field facilities & services', 'water desalination and treatment', 'sewerage treatment station', 'cuilding projects contracting', 'steel structure contracting'],
  description: "Choose us for lasting construction excellence. Trust our expertise to bring your vision to life.",
};


const locales = ['en', 'ar'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {

  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={cn("overflow-x-hidden", inter.className)}>
        <NextIntlClientProvider messages={messages}>
          <Navbar language={locale} />
          {children}
          <Footer language={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
