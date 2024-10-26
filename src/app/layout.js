import { Poppins, Lato } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-primary",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  title: "WebOMindApps Interview Task",
  description: "WebOMindApps Interview Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${lato.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
