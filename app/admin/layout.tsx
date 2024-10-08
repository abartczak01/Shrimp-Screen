"use client";
import AdminSidebar from "@/components/shared/AdminSidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full flex flex-row">
      <AdminSidebar />
      <section className="flex-1 border-l-4 border-stone-950">
        {children}
      </section>
    </main>
  );
}
