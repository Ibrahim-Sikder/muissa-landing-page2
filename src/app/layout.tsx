

import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Toaster } from "sonner";
import Providers from "@/lib/Theme/Probiders";


const hindiSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muissa Consulting | Home",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico.svg",
    shortcut: "/favicon.ico.svg",
    apple: "/favicon.ico.svg",
  },
  verification: {
    google: "Yx4A-4On_CHg-sggHL-sdmyUL2Kiw7cOSno1em-fshQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll="0">
      <Providers>
        <body className={hindiSiliguri.className}>
          <Toaster position="top-center" richColors />
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </body>
      </Providers>
    </html>
  );
}
