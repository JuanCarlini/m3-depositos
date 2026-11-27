/*
  M3 Depósitos, landing.
  Secciones: hero (fachada) · #complejo historia de fotos (oficinas, acceso, calle interna) ·
  #unidades tabla de superficies · #servicios infraestructura sobre Verde Bosque con el cartel D 01 ·
  #contacto ubicación + formulario · footer (cierre + links).
*/
import { ContactForm } from "@/components/ContactForm";
import { Isologotipo } from "@/components/Logo";
import { Cartel, UnitPlan } from "@/components/UnitPlan";
import { Croquis } from "@/components/Croquis";
import { marca, precio, resumen, servicios, unidades } from "@/content/proyecto";
import { whatsappUrl } from "@/lib/whatsapp";

const ACCION = "Pedir disponibilidad";
const { calle, barrio, ciudad } = marca.ubicacion;
const mapa = `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${calle}, ${barrio}, ${ciudad}`)}`;

function Flecha() {
  return (
    // La flecha diagonal de la señalética del manual (↘), dibujada.
    <svg className="m-arrow m3-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M2 2l8 8" />
      <path className="m-arrow__head" d="M10 3.5V10H3.5" />
    </svg>
  );
}

export default function Home() {
  const wa = whatsappUrl();
  return (
    <>
      <header className="nav">
        <div className="wrap nav__bar">
          <a className="skip-link" href="#top">Ir al contenido</a>
          <a className="nav__logo" href="#top" aria-label="M3 Depósitos, inicio">
            <Isologotipo />
          </a>
          <nav className="nav__links" aria-label="Principal">
            <div className="nav__item"><a className="nav__link" href="#complejo">Complejo</a></div>
            <div className="nav__item"><a className="nav__link" href="#unidades">Unidades</a></div>
            <div className="nav__item"><a className="nav__link" href="#servicios">Infraestructura</a></div>
            <div className="nav__item"><a className="nav__link" href="#contacto">Ubicación</a></div>
          </nav>
          <div className="nav__actions">
            <a className="btn btn--primary" href="#contacto">{ACCION}</a>
          </div>
          <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menú">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <main id="top">
        {/* Hero: el render ocupa toda la pantalla; el título va sobre el cielo y la bajada con
            los botones en un panel Verde Bosque translúcido para que se lea sobre el edificio. */}
        <section className="hero hero--full" aria-labelledby="hero-h">
          <img
            className="hero__bg"
            src="/img/fachada.jpg"
            alt="Fachada de M3 Depósitos sobre la avenida: planta baja vidriada con locales y vehículos, oficinas arriba, terraza verde y el nombre en letras blancas sobre el techo"
            width={2000}
            height={1738}
            fetchPriority="high"
            data-source="client"
            data-subject="la fachada del complejo"
          />
          <div className="wrap">
            <div className="hero-text hero__in">
              <h1 id="hero-h">Naves, oficinas y locales comerciales en Fisherton, Rosario</h1>
              <div className="hero__panel">
                <p className="hero__lead">
                  {resumen.navesM2} de naves en {resumen.navesCantidad} de {resumen.navesRango}, más locales
                  comerciales y oficinas, en {calle}. Almacenamiento, comercio y trabajo en un mismo desarrollo.
                </p>
                <div className="btn-row">
                  <a className="btn btn--primary" href="#contacto">{ACCION}<Flecha /></a>
                  <a className="btn btn--secondary" href="#unidades">Ver las unidades</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="complejo" data-moment="photo-chapters" aria-labelledby="complejo-h">
          <div className="wrap mo-ph">
            <div className="mo-ph__head">
              <h2 id="complejo-h">El desarrollo, de la avenida a la nave</h2>
              <p>Al frente, locales y oficinas con terraza verde; detrás, la calle interna que lleva a cada nave.</p>
            </div>
            <ol className="mo-ph__list">
              <li className="mo-ph__ch">
                <figure className="mo-ph__pic">
                  <img style={{ objectPosition: "50% 75%" }} src="/img/ingreso-oficinas.jpg" alt="Frente vidriado de M3 Depósitos en perspectiva, con el nombre sobre la terraza verde, plantas y vereda de adoquines" width={1290} height={860} loading="lazy" data-source="client" data-subject="las oficinas del frente" />
                </figure>
                <h3>Oficinas con terraza verde</h3>
                <p>Módulos de hasta 50 m² en la planta alta, con áreas comunes, servicios y una terraza verde accesible.</p>
              </li>
              <li className="mo-ph__ch">
                <figure className="mo-ph__pic">
                  <img style={{ objectPosition: "50% 60%" }} src="/img/acceso.jpg" alt="Ingreso de vehículos bajo el edificio de oficinas, con barrera, garita y locales vidriados a cada lado" width={1720} height={1147} loading="lazy" data-source="client" data-subject="el acceso al predio" />
                </figure>
                <h3>Locales y acceso sobre el frente</h3>
                <p>Locales con office, sanitarios y doble altura a los lados del ingreso que lleva a la calle interna.</p>
              </li>
              <li className="mo-ph__ch">
                <figure className="mo-ph__pic">
                  <img src="/img/calle-interna.jpg" alt="Calle interna de hormigón entre dos filas de naves con portones numerados y un camión estacionado" width={1720} height={1147} loading="lazy" data-source="client" data-subject="la calle interna y las naves" />
                </figure>
                <h3>Naves sobre la calle interna</h3>
                <p>15 naves con portón numerado, piso de hormigón llaneado para alto tránsito y cerramientos con panel <span translate="no">Cover</span>.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="section" id="unidades" aria-labelledby="unidades-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="unidades-h">Unidades y superficies</h2>
              <p>{resumen.navesM2} de naves, {resumen.localesM2} de locales comerciales y {resumen.oficinasM2} de oficinas en un mismo desarrollo. {precio}: te mandamos el plano y el valor de las unidades libres.</p>
            </div>
            <ul className="rows rows--spec unidades">
              {unidades.map((u) => (
                <li key={u.id} id={u.id}>
                  <div className="unidades__plan" {...(u.plano.ph ? { "data-assumed": "" } : {})}>
                    <UnitPlan
                      codigo={`${u.codigo} 01`}
                      frente={u.plano.frente}
                      fondo={u.plano.fondo}
                      porton={u.plano.porton}
                      label={`Planta esquemática de ${u.nombre.toLowerCase()}: ${u.plano.frente} m de frente por ${u.plano.fondo} m de fondo`}
                    />
                  </div>
                  <div className="unidades__body">
                    <h3>{u.nombre}</h3>
                    <p>{u.descripcion}</p>
                    <a className="link unidades__cta" href="#contacto" data-unidad={u.nombre}>
                      Pedir planos de {u.nombre.toLowerCase()}
                    </a>
                  </div>
                  <dl className="unidades__data">
                    <div><dt>Superficie</dt><dd>{u.superficie}</dd></div>
                    <div><dt>Características</dt><dd>{u.detalle}</dd></div>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section ground-inverse" id="servicios" aria-labelledby="servicios-h">
          <div className="wrap">
            <div className="servicios">
              <div className="section-head servicios__head">
                <h2 id="servicios-h">Infraestructura del complejo</h2>
                <p>Servicios y terminaciones que tienen las naves de todo el desarrollo.</p>
                <Cartel codigo="N" numero="01" palabra="Naves" />
              </div>
              <ul className="servicios__list">
                {servicios.map((s) => (
                  <li key={s.titulo}>
                    <h3>{s.titulo}</h3>
                    <p>{s.texto}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="contacto" aria-labelledby="contacto-h">
          <div className="wrap">
            {/* En el teléfono el formulario va pegado al título; la ubicación queda debajo (m3.css). */}
            <div className="grid grid--top consulta">
              <div className="span-5 consulta__info">
                <div className="section-head consulta__head">
                  <h2 id="contacto-h">Disponibilidad y precios</h2>
                  <p>Dejanos tus datos y te mandamos las unidades libres, con plano, superficie y precio.</p>
                </div>
                <div className="consulta__lugar">
                <address className="consulta__address">
                  {calle}
                  <br />
                  {barrio}, {ciudad}
                </address>
                <p><a className="link" href={mapa} target="_blank" rel="noopener">Ver la zona</a></p>
                <Croquis calleA="Wilde" calleB="Mendoza" />
                </div>
              </div>
              <div className="span-6 start-7 consulta__formcol">
                <ContactForm boton={ACCION} whatsapp={wa} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer closing" id="contact" aria-labelledby="close-h">
        <div className="wrap">
          <div className="closing__cta close--type">
            <div className="section-head">
              <h2 id="close-h">Unidades libres en {calle}</h2>
              <p>Naves, locales y oficinas en {barrio}. Te respondemos por email con planos y precios.</p>
            </div>
            <a className="btn btn--primary btn--xl btn--wide" href="#contacto">{ACCION}<Flecha /></a>
          </div>
          <div className="closing__links">
            <div className="grid">
              <div className="span-4 stack-4">
                <a className="nav__logo" href="#top" aria-label="M3 Depósitos, volver arriba"><Isologotipo /></a>
                <p className="footer__lede">Naves, locales y oficinas en {barrio}, {ciudad}.</p>
              </div>
              <div className="span-2 start-9 footer__col">
                <h3>Complejo</h3>
                <ul>
                  <li><a href="#complejo">El predio</a></li>
                  <li><a href="#unidades">Unidades</a></li>
                  <li><a href="#servicios">Infraestructura</a></li>
                </ul>
              </div>
              <div className="span-2 start-11 footer__col">
                <h3>Contacto</h3>
                <ul>
                  <li><a href="#contacto">Consulta</a></li>
                  <li><a href={mapa} target="_blank" rel="noopener">Ver la zona</a></li>
                </ul>
              </div>
            </div>
            <div className="footer__legal">
              <span className="footer__copy">© 2026 M3 Depósitos <a href="/privacidad/">Privacidad</a></span>
            </div>
          </div>
        </div>
      </footer>

      <nav className="actionbar" aria-label="Acción rápida">
        <a className="btn btn--primary" href="#contacto">{ACCION}</a>
      </nav>
    </>
  );
}
