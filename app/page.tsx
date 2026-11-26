/*
  M3 Depósitos, landing.
  Secciones: hero (fachada) · #complejo historia de fotos (contenedor, portón, señalética) ·
  #unidades tabla de superficies · #servicios banda Verde Bosque con el cartel D 01 ·
  #contacto ubicación + formulario · footer (cierre + links).
*/
import { ContactForm } from "@/components/ContactForm";
import { Isologotipo } from "@/components/Logo";
import { Cartel, UnitPlan } from "@/components/UnitPlan";
import { Croquis } from "@/components/Croquis";
import { marca, precio, rangoHero, servicios, unidades, type Dato } from "@/content/proyecto";
import { whatsappUrl } from "@/lib/whatsapp";

const ACCION = "Pedir disponibilidad";
const { calle, barrio, ciudad } = marca.ubicacion;
const mapa = `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${calle}, ${barrio}, ${ciudad}`)}`;

/* Un dato provisorio lleva data-assumed, así es fácil encontrarlo para reemplazarlo. */
function D({ d }: { d: Dato }) {
  return d.ph ? <span data-assumed="">{d.valor}</span> : <>{d.valor}</>;
}

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
  const wa = whatsappUrl("operar");
  return (
    <>
      <header className="nav nav--split">
        <div className="wrap nav__bar">
          <a className="skip-link" href="#top">Ir al contenido</a>
          <a className="nav__logo" href="#top" aria-label="M3 Depósitos, inicio">
            <Isologotipo />
          </a>
          <nav className="nav__links" aria-label="Principal">
            <div className="nav__item"><a className="nav__link" href="#complejo">Complejo</a></div>
            <div className="nav__item"><a className="nav__link" href="#unidades">Unidades</a></div>
            <div className="nav__item"><a className="nav__link" href="#servicios">Servicios</a></div>
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
        <section className="hero hero--product" data-enter="" aria-labelledby="hero-h">
          <div className="wrap">
            <div className="hero-text hero__in">
              <div className="hero__head">
                <div>
                  <h1 id="hero-h">Naves y depósitos en Fisherton, Rosario</h1>
                  <p className="hero__lead">
                    Naves, depósitos y oficinas de <D d={rangoHero} /> con acceso propio en {calle}. Cada
                    empresa usa su unidad; el complejo se ocupa del acceso, la vigilancia y la playa de camiones.
                  </p>
                </div>
                <div className="btn-row">
                  <a className="btn btn--primary" href="#contacto">{ACCION}<Flecha /></a>
                  <a className="btn btn--secondary" href="#unidades">Ver las unidades</a>
                </div>
              </div>
              <div className="hero__stage">
                {/* Render de fachada del manual de marca: reemplazar por el render final del proyecto. */}
                <img
                  src="/img/fachada.jpg"
                  alt="Fachada de M3 Depósitos sobre la avenida: tres pisos de oficinas con plantas, el cartel verde con el nombre sobre el ingreso de camiones y utilitarios estacionados"
                  width={1600}
                  height={1103}
                  style={{ ["--ly-pos" as string]: "50% 62%" }}
                  fetchPriority="high"
                  data-source="client"
                  data-subject="la fachada del complejo"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="complejo" data-moment="photo-chapters" aria-labelledby="complejo-h">
          <div className="wrap mo-ph">
            <div className="mo-ph__head">
              <h2 id="complejo-h">El complejo, del ingreso a tu portón</h2>
              <p>Un solo acceso controlado, calles internas para camiones y cada unidad con su número y su portón.</p>
            </div>
            <ol className="mo-ph__list">
              <li className="mo-ph__ch">
                <figure className="mo-ph__pic">
                  <img src="/img/contenedor.jpg" alt="Autoelevador verde levantando un contenedor con la marca M3 Depósitos dentro de una nave de hormigón" width={1800} height={1260} loading="lazy" data-source="client" data-subject="carga dentro de una nave" />
                </figure>
                <h3>Carga y descarga adentro del predio</h3>
                <p>Los camiones entran, maniobran y descargan en las calles internas, sin cortar la calle de enfrente.</p>
              </li>
              <li className="mo-ph__ch">
                <figure className="mo-ph__pic">
                  <img style={{ objectPosition: "50% 80%" }} src="/img/porton.jpg" alt="Portón de chapa verde oscuro con el código D 01 pintado en lima y dos defensas lima a los costados" width={1800} height={1200} loading="lazy" data-source="client" data-subject="el portón de una unidad" />
                </figure>
                <h3>Cada unidad con su portón</h3>
                <p>Entrás con el vehículo hasta tu puerta y cerrás con tu llave. Nadie pasa por tu espacio para llegar al suyo.</p>
              </li>
              <li className="mo-ph__ch">
                <figure className="mo-ph__pic">
                  <img src="/img/senaletica.jpg" alt="Cartel verde colgado de una estantería industrial con el código D 01 y una flecha en diagonal" width={1800} height={1200} loading="lazy" data-source="client" data-subject="la señalética interna" />
                </figure>
                <h3>Todo numerado y señalizado</h3>
                <p>Cada nave, depósito y oficina tiene su código. Un flete o un proveedor llega a tu portón sin preguntar.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="section" id="unidades" aria-labelledby="unidades-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="unidades-h">Unidades y superficies</h2>
              <p>Tres tipos de unidad en el mismo predio, en venta y en alquiler. <D d={precio} />: te mandamos el plano y el valor de las que estén libres.</p>
            </div>
            <ul className="rows rows--spec unidades">
              {unidades.map((u) => (
                <li key={u.id} id={u.id}>
                  <div className="unidades__plan" data-assumed="">
                    <UnitPlan
                      codigo={`${u.codigo} 01`}
                      {...u.plano}
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
                    <div><dt>Superficie</dt><dd><D d={u.superficie} /></dd></div>
                    <div><dt>Características</dt><dd><D d={u.detalle} /></dd></div>
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
                <h2 id="servicios-h">Servicios del complejo</h2>
                <p>Lo que cada empresa tendría que resolver sola en un galpón suelto, acá ya está resuelto y se paga en las expensas.</p>
                <Cartel codigo="D" numero="01" palabra="Servicios" />
              </div>
              <ul className="servicios__list">
                {servicios.map((s) => (
                  <li key={s.titulo} {...(s.ph ? { "data-assumed": "" } : {})}>
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
              <p>Naves, depósitos y oficinas en {barrio}. Te respondemos por email con planos y precios.</p>
            </div>
            <a className="btn btn--primary btn--xl btn--wide" href="#contacto">{ACCION}<Flecha /></a>
          </div>
          <div className="closing__links">
            <div className="grid">
              <div className="span-4 stack-4">
                <a className="nav__logo" href="#top" aria-label="M3 Depósitos, volver arriba"><Isologotipo /></a>
                <p className="footer__lede">Naves, depósitos y oficinas en {barrio}, {ciudad}.</p>
              </div>
              <div className="span-2 start-9 footer__col">
                <h3>Complejo</h3>
                <ul>
                  <li><a href="#complejo">El predio</a></li>
                  <li><a href="#unidades">Unidades</a></li>
                  <li><a href="#servicios">Servicios</a></li>
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
