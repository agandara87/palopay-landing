import "./globals.css";

export const metadata = {
  title: "Palopay",
  description: "Palopay landing"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
