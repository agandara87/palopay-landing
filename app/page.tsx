import "./globals.css";

export const metadata = {
  title: "Palopay | Wallet para gig economy",
  description:
    "Gestioná liquidaciones, ahorrá, invertí, cobrá y pagá desde un solo lugar."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-slate-900">{children}</body>
    </html>
  );
}
