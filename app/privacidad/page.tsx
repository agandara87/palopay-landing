const site = {
  legalName: "PALOPAY S.A. (completar razón social)",
  supportEmail: "soporte@palopay.com"
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-14">
        <a href="/" className="text-sm underline">← Volver</a>
        <h1 className="mt-4 text-3xl font-semibold">Política de Privacidad</h1>
        <p className="mt-2 text-sm text-slate-600">
          Última actualización: {new Date().toISOString().slice(0, 10)}
        </p>

        <div className="mt-8 space-y-6 text-sm text-slate-700">
          <section>
            <h2 className="font-semibold">1. Responsable</h2>
            <p className="mt-2">
              {site.legalName}. Contacto: {site.supportEmail}.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">2. Datos que recopilamos</h2>
            <p className="mt-2">
              Podemos recopilar datos de identificación y contacto, datos de uso, datos de transacciones,
              información de dispositivo y registros de soporte. Los datos solicitados dependen de la
              funcionalidad que utilices.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">3. Finalidades</h2>
            <p className="mt-2">
              Usamos los datos para prestar el servicio, validar identidad cuando corresponda, prevenir fraude,
              mejorar la experiencia, cumplir obligaciones legales/regulatorias y atender reclamos.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">4. Compartición con terceros</h2>
            <p className="mt-2">
              Podremos compartir datos con proveedores que nos asisten (hosting, verificación, redes de pago),
              siempre bajo acuerdos y medidas de seguridad. También cuando sea requerido por autoridad competente.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">5. Seguridad</h2>
            <p className="mt-2">
              Implementamos medidas razonables para proteger la información. Aun así, ningún sistema es 100% infalible.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">6. Conservación</h2>
            <p className="mt-2">
              Conservamos datos el tiempo necesario para las finalidades indicadas y obligaciones aplicables.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">7. Derechos</h2>
            <p className="mt-2">
              Podés solicitar acceso, actualización o eliminación cuando corresponda, escribiendo a {site.supportEmail}.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">8. Cambios</h2>
            <p className="mt-2">
              Podremos actualizar esta política. Publicaremos la versión vigente en este sitio.
            </p>
          </section>

          <p className="text-xs text-slate-500">
            Nota: borrador base. Ajustar a normativa aplicable (p.ej. Ley 25.326 y reglamentación) y a tu operatoria real.
          </p>
        </div>
      </div>
    </main>
  );
}
