import { Inter } from "next/font/google";
import "@/app/globals.css";
import IsSidebar from "@/components/IsSidebar";
import MySidebar from "@/components/Dashboard/MySidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SALIMS",
  description: "Dashboard App SALIMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MySidebar>{children}</MySidebar>
      </body>
    </html>
  );
}
