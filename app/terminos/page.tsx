const site = {
  brand: "Palopay",
  legalName: "PALOPAY S.A. (completar razón social)",
  cuit: "XX-XXXXXXXX-X",
  legalAddress: "Domicilio legal (completar), CABA, Argentina",
  supportEmail: "soporte@palopay.com",
  supportPhone: "+54 11 0000-0000"
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-14">
        <a href="/" className="text-sm underline">← Volver</a>
        <h1 className="mt-4 text-3xl font-semibold">Términos y Condiciones</h1>
        <p className="mt-2 text-sm text-slate-600">
          Última actualización: {new Date().toISOString().slice(0, 10)}
        </p>

        <div className="mt-8 space-y-6 text-sm text-slate-700">
          <section>
            <h2 className="font-semibold">1. Identificación del proveedor</h2>
            <p className="mt-2">
              {site.legalName} (CUIT {site.cuit}), domicilio legal {site.legalAddress}.
              Contacto: {site.supportEmail} / {site.supportPhone}.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">2. Alcance del servicio</h2>
            <p className="mt-2">
              Palopay es una plataforma/wallet orientada a trabajadores de la gig economy para
              gestionar liquidaciones, ordenar fondos, realizar pagos y cobros, y acceder a herramientas
              de ahorro o inversión según disponibilidad. El servicio puede requerir alta, validaciones
              y aceptación de condiciones.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">3. Registro, elegibilidad y verificación</h2>
            <p className="mt-2">
              Para usar Palopay podés necesitar verificación de identidad y/o información adicional.
              Podremos solicitar documentación para cumplir políticas de seguridad, prevención de fraude
              y/o requerimientos regulatorios aplicables.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">4. Comisiones, precios y transparencia</h2>
            <p className="mt-2">
              Las comisiones, precios y/o cargos (si aplican) serán informados de forma clara previo a su
              aplicación y podrán consultarse en la app o comunicaciones oficiales. Palopay podrá actualizar
              comisiones notificando por canales disponibles.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">5. Operaciones, plazos y disponibilidad</h2>
            <p className="mt-2">
              Los plazos de acreditación y disponibilidad dependen del tipo de operación, redes y terceros.
              Palopay no garantiza disponibilidad continua e ininterrumpida y puede realizar mantenimientos.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">6. Seguridad y responsabilidades del usuario</h2>
            <p className="mt-2">
              Sos responsable de mantener la confidencialidad de tus credenciales y de reportar accesos no
              autorizados. No compartas claves. Podremos implementar medidas de seguridad adicionales.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">7. Atención al usuario y reclamos</h2>
            <p className="mt-2">
              Podés iniciar reclamos en <a className="underline" href="/reclamos">/reclamos</a> o por
              email/telefonía. Te asignaremos un número de seguimiento cuando corresponda.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">8. Limitación de responsabilidad</h2>
            <p className="mt-2">
              Palopay no brinda asesoramiento financiero, legal o impositivo. Las decisiones de uso,
              ahorro o inversión son del usuario. En la medida permitida por la ley, Palopay no será
              responsable por daños indirectos, interrupciones o fallas atribuibles a terceros/redes.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">9. Cambios en estos Términos</h2>
            <p className="mt-2">
              Podremos modificar estos términos y notificarlo por los canales disponibles. El uso continuo
              luego de cambios puede implicar aceptación de los mismos.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">10. Ley aplicable y jurisdicción</h2>
            <p className="mt-2">
              Estos términos se rigen por las leyes de la República Argentina. Jurisdicción: (completar).
            </p>
          </section>

          <p className="text-xs text-slate-500">
            Nota: este texto es un borrador base. Ajustar a tu operatoria real y validarlo con asesoramiento legal/compliance.
          </p>
        </div>
      </div>
    </main>
  );
}

