const site = {
  brand: "Palopay",
  tagline: "La wallet para trabajadores de la gig economy.",
  subtagline:
    "Gestioná liquidaciones, ahorrá, invertí, cobrá y pagá desde un solo lugar.",
  ctaEmail: "hola@palopay.com",
  supportEmail: "soporte@palopay.com",
  supportPhone: "+54 11 0000-0000",
  legalName: "PALOPAY S.A. (completar razón social)",
  cuit: "XX-XXXXXXXX-X",
  legalAddress: "Domicilio legal (completar), CABA, Argentina",
  psp: {
    statusText:
      "Información pública del proveedor y canales de atención conforme buenas prácticas y exigencias aplicables a PSP.",
    registryText: "Registro PSP (BCRA): (completar estado / número si aplica)",
    registryUrl:
      "https://www.bcra.gob.ar/registro-de-proveedores-de-servicios-de-pago/"
  },
  productBullets: [
    "Liquidaciones claras: entendé qué cobraste, cuándo y por qué.",
    "Bolsillos: separá ahorro, gastos y objetivos en segundos.",
    "Ahorro e inversión: opciones simples para hacer crecer tu saldo (según disponibilidad).",
    "Pagos y cobros: transferencias y pagos cotidianos desde la app."
  ],
  complianceBullets: [
    "Transparencia de comisiones y condiciones de uso.",
    "Canales de atención y gestión de reclamos con trazabilidad.",
    "Buenas prácticas de seguridad y protección de datos.",
    "Controles razonables para prevenir fraude y uso indebido."
  ],
  faq: [
    {
      q: "¿Palopay es un banco?",
      a: "No. Palopay es una plataforma/wallet enfocada en trabajadores de la gig economy. No ofrece asesoramiento financiero. (Ajustar a tu operatoria real)."
    },
    {
      q: "¿Qué significa el foco en norma PSP del BCRA?",
      a: "Que publicamos información del proveedor, condiciones y comisiones, canales de atención y reclamos, y adoptamos buenas prácticas alineadas a exigencias aplicables. (No reemplaza asesoramiento legal)."
    },
    {
      q: "¿Cómo hago un reclamo?",
      a: "Podés iniciar un reclamo desde la página de Reclamos. Te asignamos un número de seguimiento. (Ajustar plazos internos)."
    }
  ]
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-base font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}

function SectionTitle({
  kicker,
  title,
  subtitle
}: {
  kicker: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-xs font-semibold tracking-wide text-slate-500">
        {kicker}
      </div>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-sm text-slate-600 md:text-base">{subtitle}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-semibold">{site.brand}</div>
            <p className="mt-2 text-sm text-slate-600">
              Wallet para trabajadores de la gig economy: liquidaciones, ahorro,
              inversión, cobros y pagos.
            </p>
          </div>
          <div>
            <div className="font-semibold">Legales</div>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li>
                <a className="underline" href="/terminos">Términos y Condiciones</a>
              </li>
              <li>
                <a className="underline" href="/privacidad">Política de Privacidad</a>
              </li>
              <li>
                <a className="underline" href="/reclamos">Atención y Reclamos</a>
              </li>
              <li>
                <a
                  className="underline"
                  href={site.psp.registryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Registro PSP (BCRA)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contacto</div>
            <p className="mt-2 text-sm text-slate-600">
              <a className="underline" href={`mailto:${site.supportEmail}`}>
                {site.supportEmail}
              </a>
              <br />
              <a className="underline" href={`tel:${site.supportPhone}`}>
                {site.supportPhone}
              </a>
              <br />
              <span className="text-xs">
                {site.legalName} · CUIT {site.cuit}
              </span>
            </p>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} {site.legalName}. La información publicada
          es referencial y puede actualizarse.
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="font-semibold tracking-tight">{site.brand}</div>
          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            <a href="#producto" className="hover:text-slate-900">Producto</a>
            <a href="#psp" className="hover:text-slate-900">Norma PSP</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
            <a href="/reclamos" className="hover:te
