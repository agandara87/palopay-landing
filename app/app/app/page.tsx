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
      "Proveedor de Servicios de Pago (PSP) – información pública y canales de atención.",
    registryText: "Registro PSP (BCRA): (completar estado / número si aplica)",
    registryUrl:
      "https://www.bcra.gob.ar/registro-de-proveedores-de-servicios-de-pago/"
  },
  complianceBullets: [
    "Transparencia de comisiones y condiciones de uso.",
    "Canales de atención y gestión de reclamos con trazabilidad.",
    "Buenas prácticas de seguridad y protección de datos.",
    "Controles razonables para prevenir fraude y uso indebido."
  ],
  productBullets: [
    "Liquidaciones claras: entendé qué cobraste, cuándo y por qué.",
    "Bolsillos: separá ahorro, gastos y objetivos en segundos.",
    "Inversión simple: poné a trabajar tu saldo (según disponibilidad).",
    "Pagos y cobros: transferencias y pagos cotidianos desde la app."
  ],
  faq: [
    {
      q: "¿Palopay es un banco?",
      a: "No. Palopay es una plataforma/wallet enfocada en trabajadores independientes. (Ajustar a tu modelo)."
    },
    {
      q: "¿Qué significa el foco en la norma PSP del BCRA?",
      a: "Publicamos información del proveedor, condiciones, canales de atención y reclamos, y seguimos buenas prácticas alineadas a exigencias aplicables para PSP. (No reemplaza asesoramiento legal)."
    },
    {
      q: "¿Cómo se gestionan reclamos?",
      a: "Escribís a soporte; registramos el caso, te damos número de seguimiento y actualizaciones por email. (Ajustar plazos internos)."
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

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="font-semibold tracking-tight">{site.brand}</div>
          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            <a href="#producto" className="hover:text-slate-900">
              Producto
            </a>
            <a href="#psp" className="hover:text-slate-900">
              Norma PSP
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </nav>
          <a
            href={`mailto:${site.ctaEmail}`}
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Pedir acceso
          </a>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>Wallet para gig economy</Badge>
                <Badge>Transparencia PSP</Badge>
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                {site.tagline}
              </h1>
              <p className="mt-4 text-lg text-slate-600">{site.subtagline}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {site.productBullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${site.ctaEmail}`}
                  className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
                >
                  Quiero probar Palopay
                </a>
                <a
                  href="#psp"
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium hover:bg-slate-50"
                >
                  Ver enfoque PSP
                </a>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm">
                <div className="font-semibold">Información del proveedor</div>
                <div className="mt-2 text-slate-600">
                  {site.legalName} — CUIT {site.cuit}
                  <br />
                  Domicilio legal: {site.legalAddress}
                  <br />
                  Atención:{" "}
                  <a className="underline" href={`mailto:${site.supportEmail}`}>
                    {site.supportEmail}
                  </a>{" "}
                  ·{" "}
                  <a className="underline" href={`tel:${site.supportPhone}`}>
                    {site.supportPhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold text-slate-500">
                ¿Para quién es?
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                Trabajadores independientes y plataformas
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Ideal si cobrás por turnos, entregas, viajes o tareas. Palopay
                ordena tus ingresos y te ayuda a convertir liquidaciones en
                estabilidad financiera.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl bg-slate-50 p-4 text-sm">
                  <div className="font-semibold">Liquidaciones</div>
                  <div className="mt-1 text-slate-600">
                    Historial, detalle y estado: “qué cobré” y “qué me falta”.
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm">
                  <div className="font-semibold">Ahorro e inversión</div>
                  <div className="mt-1 text-slate-600">
                    Objetivos, bolsillos y opciones simples para hacer crecer tu
                    saldo.
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm">
                  <div className="font-semibold">Cobros y pagos</div>
                  <div className="mt-1 text-slate-600">
                    Pagá servicios, transferí y administrá tu día a día desde la
                    app.
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 p-4 text-xs text-slate-600">
                Nota: funcionalidades sujetas a disponibilidad del producto,
                onboarding y validaciones de seguridad.
              </div>
            </div>
          </div>
        </section>

        <section id="producto">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <SectionTitle
              kicker="PRODUCTO"
              title="Una wallet pensada para ingresos variables"
              subtitle="Tu plata entra en liquidaciones; Palopay la convierte en control, ahorro y previsibilidad."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <Card
                title="Control de liquidaciones"
                text="Consolidá ingresos por plataforma, día y concepto. Alertas si falta algo."
              />
              <Card
                title="Bolsillos inteligentes"
                text="Separá automáticamente para gastos fijos, ahorro y objetivos."
              />
              <Card
                title="Pagos y transferencias"
                text="Mové tu dinero cuando lo necesitás con trazabilidad y soporte."
              />
            </div>
          </div>
        </section>

        <section id="psp" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <SectionTitle
              kicker="NORMA PSP / BCRA"
              title="Transparencia, atención y buenas prácticas"
              subtitle="Proveedor identificado, condiciones claras, canales de reclamo y seguridad."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-base font-semibold">Información PSP</div>
                <p className="mt-2 text-sm text-slate-600">
                  {site.psp.statusText}
                </p>
                <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
                  <div className="font-medium">{site.psp.registryText}</div>
                  <div className="mt-1">
                    Referencia pública:{" "}
                    <a
                      className="underline"
                      href={site.psp.registryUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Registro PSP (BCRA)
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-base font-semibold">Compromisos visibles</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {site.complianceBullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-base font-semibold">
                Atención al usuario y reclamos
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Soporte:{" "}
                <a className="underline" href={`mailto:${site.supportEmail}`}>
                  {site.supportEmail}
                </a>{" "}
                ·{" "}
                <a className="underline" href={`tel:${site.supportPhone}`}>
                  {site.supportPhone}
                </a>
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Para reclamos: indicá nombre, email, detalle de la operación y
                fecha/hora. Te respondemos con un número de seguimiento.
              </p>
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <SectionTitle
              kicker="FAQ"
              title="Preguntas frecuentes"
              subtitle="Texto simple, directo y alineado a compliance."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {site.faq.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="font-semibold">{item.q}</div>
                  <p className="mt-2 text-sm text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-10">
              <div className="text-sm text-white/70">Acceso anticipado</div>
              <div className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                Sumate y empezá a ordenar tus liquidaciones
              </div>
              <p className="mt-3 text-sm text-white/70 md:text-base">
                Contanos qué plataforma usás y te escribimos con el onboarding.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${site.ctaEmail}?subject=Quiero%20acceso%20a%20Palopay&body=Hola,%20quiero%20probar%20Palopay.%20Plataforma:%20____%20Pa%C3%ADs:%20____`}
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                >
                  Pedir acceso
                </a>
                <a
                  href={`mailto:${site.supportEmail}`}
                  className="rounded-xl border border-white/25 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  Hablar con soporte
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="font-semibold">{site.brand}</div>
              <p className="mt-2 text-sm text-slate-600">
                Wallet para trabajadores de la gig economy: liquidaciones,
                ahorro, inversión, cobros y pagos.
              </p>
            </div>
            <div>
              <div className="font-semibold">Legales</div>
              <p className="mt-2 text-sm text-slate-600">
                {site.legalName}
                <br />
                CUIT {site.cuit}
                <br />
                {site.legalAddress}
              </p>
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
                <a
                  className="underline"
                  href={site.psp.registryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Registro PSP (BCRA)
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8 text-xs text-slate-500">
            © {new Date().getFullYear()} {site.legalName}. La información
            publicada es referencial y puede actualizarse.
          </div>
        </div>
      </footer>
    </div>
  );
}
