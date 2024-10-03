import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/components/shared/Topbar";
import { Mukta } from "@next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Shrimp Screen",
  description: "Movie theater app",
};

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["200", "400", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`text-stone-950 bg-pearl ${mukta.className}`}>
          <Topbar />
          <section className="main-container">
            <div className="w-full max-w-6xl">{children}</div>
          </section>
        </body>
      </html>
    </ClerkProvider>
  );
}
