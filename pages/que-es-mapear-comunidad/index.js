import Navbar from '../../components/navigation/navbar';
import Head from 'next/head';
import { FooterSection } from '../../components/footer-section';
import BackHomeButton from '../../components/buttons/BackHomeButton';

export default function WhatIsPage() {
    return (
        <div className="flex flex-col">
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/svg+xml"
                    href="../SVG/072-location.svg"
                />
                <title>Mapear Comunidad</title>
            </Head>
            <header>
                <Navbar />
            </header>

            <main className="mt-40 mx-16 text-justify font-muli">
                <span className="text-bold text-2xl">
                    ¿Qué es Mapear Comunidad?
                </span>
                <br />
                <br />
                <p>
                    Mapear comunidad es una iniciativa que articula acciones
                    vinculadas a la cartografía social, a partir de la
                    geolocalización de Instituciones Públicas, Organizaciones de
                    la Sociedad Civil, Organizaciones Comunitarias, Programas y
                    Proyectos Sociales, Líneas de Extensión Universitaria, Redes
                    Interinstitucionales, y confecciona mapas temáticos de
                    manera participativa.
                </p>
                <br />
                <p>
                    Esta propuesta comprende diferentes acciones de Extensión
                    Universitaria llevados a cabo por un equipo
                    interdisciplinario con referentes de la Facultad de Trabajo
                    Social, la Facultad de Ciencias Económicas, la Facultad de
                    Ciencias de la Educación de la Universidad Nacional de Entre
                    Ríos y de la Secretaría de Participación y Gestión
                    Comunitaria de la Municipalidad de Paraná. A su vez, este
                    equipo trabaja en articulación con diferentes actores
                    territoriales.
                </p>
                <br />
                <p>
                    Los datos relevados y la información que se produce se
                    presenta en mapas que se encuentran disponibles para su
                    descarga y utilización. La información es insumo de valor
                    para la toma de decisiones de organizaciones públicas y
                    sociales, sobre territorios específicos.
                </p>
                <br />
                <p>
                    <em className="text-lg">Mapear en emergencia</em> es una
                    acción de extensión en emergencia que surge durante el
                    Aislamiento Social, Preventivo y Obligatorio (Decreto 361/20
                    del Gobierno de Entre Ríos) a tenor de la nueva enfermedad
                    Coronavirus (COVID- 19). Desde la Secretaría de
                    Participación y Gestión Comunitaria se impulsó llevar
                    adelante una mesa de coordinación social en la emergencia.
                    Dicha mesa tuvo como objetivo aportar a la socialización de
                    información y generación de acuerdos que permitan dar
                    respuestas integrales a las necesidades de la población en
                    esta coyuntura excepcional. En este sentido, la Secretaría
                    de Participación y Gestión comunitaria a través de la
                    Dirección de Soporte a la Participación (Sala de Situación),
                    venía realizando un trabajo de georeferenciación de
                    contactos útiles en la Emergencia Sanitaria.
                </p>
                <br />
                <p>
                    En el marco de esta acción, se construyó un mapa que
                    presenta información geolocalizada de escuelas, comedores y
                    merenderos, iglesias, líneas de extensión de la Facultad de
                    Trabajo Social, un recursero de Organismos Públicos,
                    efectores de salud, áreas programáticas de salud, comisarías
                    y jurisdicciones de comisarías de la ciudad de Paraná. Es
                    una herramienta de gestión para el Municipio de la ciudad de
                    Paraná, la Facultad de Trabajo Social, y para la Comunidad
                    en general que contribuye a la toma de decisiones oportunas
                    en el contexto de emergencia sanitaria.
                </p>

                <br />
                <p>
                    La acción de extensión{' '}
                    <em className="text-lg">Mapear Redes</em> da continuidad a
                    lo iniciado con la acción antes mencionada y se propone
                    abordar junto al Gobierno Municipal de Paraná y las Redes
                    Interinstitucionales de nuestra ciudad, la re-construcción
                    de sus conformaciones, los objetivos, los actores que las
                    conforman, y junto a ellos poder plasmar esta información en
                    un segundo mapa. Así, generar una herramienta de
                    geolocalización que contenga los intereses generales y
                    particulares de las redes territoriales en el marco de la
                    pandemia y futuros escenarios. Es una herramienta que
                    acompaña a los procesos de planificación y de reconocimiento
                    de trayectorias diversas.
                </p>

                <br />
                <p>
                    Mapear Comunidad es un proceso que continúa y sigue
                    creciendo con el aporte de toda la Comunidad y quienes viven
                    el territorio.
                </p>
            </main>

            <BackHomeButton />

            <FooterSection />
        </div>
    );
}
