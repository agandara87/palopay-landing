const site = {
  supportEmail: "soporte@palopay.com",
  supportPhone: "+54 11 0000-0000"
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-14">
        <a href="/" className="text-sm underline">← Volver</a>
        <h1 className="mt-4 text-3xl font-semibold">Atención al usuario y reclamos</h1>
        <p className="mt-2 text-sm text-slate-600">
          Canales oficiales y guía para iniciar un reclamo con trazabilidad.
        </p>

        <div className="mt-8 space-y-6 text-sm text-slate-700">
          <section>
            <h2 className="font-semibold">Canales de atención</h2>
            <p className="mt-2">
              Email: <a className="underline" href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a><br />
              Teléfono: <a className="underline" href={`tel:${site.supportPhone}`}>{site.supportPhone}</a>
            </p>
          </section>

          <section>
            <h2 className="font-semibold">Cómo iniciar un reclamo</h2>
            <ol className="mt-2 list-decimal pl-5 space-y-2">
              <li>Escribinos por email con asunto: “Reclamo Palopay”.</li>
              <li>Incluí tu nombre, email/telefono, fecha y detalle de la operación.</li>
              <li>Si aplica, adjuntá capturas o comprobantes.</li>
              <li>Te responderemos con un número de seguimiento.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-semibold">Información útil para acelerar</h2>
            <ul className="mt-2 list-disc pl-5 space-y-2">
              <li>ID de operación / referencia</li>
              <li>Monto y moneda</li>
              <li>Fecha y hora aproximada</li>
              <li>Cuenta/alias/cvu involucrado (si aplica)</li>
            </ul>
          </section>

          <p className="text-xs text-slate-500">
            Nota: ajustar tiempos de respuesta y proceso interno según tu operación real.
          </p>
        </div>
      </div>
    </main>
  );
}
