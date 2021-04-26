import Navbar from '../../components/navigation/navbar';
import { FooterSection } from '../../components/footer-section';
import styles from './fuentes-de-informacion.module.scss';
import Card from '../../components/card/card';

export default function FuentesDeInformacionPage() {
    return (
        <div>
            <Navbar />

            <main className="flex flex-col">
                <div className="flex-grow p-4">
                    <div className={`${styles.container__title} my-4`}>
                        <h2>Fuentes de información</h2>
                    </div>
                    <p>
                        Con el objetivo de “mapear” atendiendo a los intereses y
                        necesidades del territorio, se utilizaron fuentes
                        primarias. Las mismas fueron obtenidas en reuniones,
                        encuentros con propuestas de dinámicas de trabajo en
                        equipos y entrevistas con diversos actores que trabajan
                        en diferentes espacios de la ciudad de Paraná. Asimismo,
                        se relevaron fuentes secundarias a partir de la
                        información pública de organismos estatales y entidades
                        privadas, que se detallan a continuación:
                    </p>


                    <Card title="Datos Argentina" outLink="https://datos.gob.ar/" />

                    <div className={`${styles.sources}`}>
                        <span>Datos Argentina</span>
                        <br />
                        <a href="https://datos.gob.ar/" target="_blank">
                            {' '}
                            https://datos.gob.ar/
                        </a>
                    </div>
                    <div className={`${styles.sources}`}>
                        <span>Mapa Educativo Nacional</span>
                        <br />
                        <a href="http://mapa.educacion.gob.ar/" target="_blank">
                            {' '}
                            http://mapa.educacion.gob.ar/
                        </a>
                    </div>
                    <div className={`${styles.sources}`}>
                        <span> Ministerio de Salud de Entre Ríos</span>
                        <br />
                        <a
                            href="http://www.entrerios.gov.ar/msalud/?page_id=34871"
                            target="_blank"
                        >
                            {' '}
                            http://www.entrerios.gov.ar/msalud/?page_id=34871
                        </a>
                    </div>
                    <div className={`${styles.sources}`}>
                        <span>Policía de Entre Ríos</span>
                        <br />
                        <a
                            href="http://www.policiadeentrerios.gob.ar/"
                            target="_blank"
                        >
                            {' '}
                            http://www.policiadeentrerios.gob.ar/
                        </a>
                    </div>
                    <div className={`${styles.sources}`}>
                        <span>
                            Secretaría de Extensión de la Facultad de Trabajo
                            Social - UNER
                        </span>
                        <br />
                        <a href="http://www.fts.uner.edu.ar/" target="_blank">
                            {' '}
                            http://www.fts.uner.edu.ar/
                        </a>
                    </div>
                    <div className={`${styles.sources}`}>
                        <span>
                            Guía de Recursos Básicos - Acción de Extensión en
                            Emergencia -FTS
                        </span>
                        <br />
                        <a href="https://bit.ly/2V8Yy1E" target="_blank">
                            {' '}
                            https://bit.ly/2V8Yy1E
                        </a>
                    </div>
                    <div className={`${styles.sources}`}>
                        <span>
                            CAPAS - Cartografías para la Atención en Salud -
                            HESM
                        </span>
                        <br />
                        <a
                            href="http://www.hesm.gob.ar/articulo.php?art=7f100b7b36092fb9b06dfb4fac360931"
                            target="_blank"
                        >
                            {' '}
                            http://www.hesm.gob.ar/articulo.php?art=7f100b7b36092fb9b06dfb4fac360931
                        </a>
                    </div>

                    <div className={`${styles.sources}`}>
                        <span>Base de datos Banco de Alimentos Paraná</span>
                        <br />
                        <a
                            href="https://www.facebook.com/bancodealimentospna/"
                            target="_blank"
                        >
                            {' '}
                            https://www.facebook.com/bancodealimentospna/
                        </a>
                    </div>
                    <div className={`${styles.sources}`}>
                        <span>Arzobispado de Paraná</span>
                        <br />
                        <a
                            href=" http://www.arzparan.org.ar/parroquias/"
                            target="_blank"
                        >
                            {' '}
                            http://www.arzparan.org.ar/parroquias/
                        </a>
                    </div>
                </div>

                <FooterSection />
            </main>
        </div>
    );
}
