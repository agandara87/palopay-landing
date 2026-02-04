export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-slate-900">
      <div className="max-w-xl text-center px-6">
        <h1 className="text-4xl font-semibold mb-4">
          Palopay
        </h1>

        <p className="text-lg text-slate-600 mb-6">
          La wallet para trabajadores de la gig economy.
        </p>

        <p className="text-sm text-slate-600 mb-8">
          Gestioná liquidaciones, ahorrá, invertí, cobrá y pagá desde un solo lugar.
        </p>

        <a
          href="mailto:hola@palopay.com"
          className="inline-block rounded-xl bg-black px-6 py-3 text-white text-sm font-medium"
        >
          Pedir acceso
        </a>

        <div className="mt-10 text-xs text-slate-500">
          PALOPAY S.A. · Proveedor de Servicios de Pago (PSP) ·
          <br />
          Información y atención según normativa BCRA
        </div>
      </div>
    </main>
  );
}
