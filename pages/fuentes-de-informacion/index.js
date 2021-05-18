import Navbar from '../../components/navigation/navbar';
import { FooterSection } from '../../components/footer-section';
import styles from './fuentes-de-informacion.module.scss';
import Card from '../../components/card/card';
import BackHomeButton from '../../components/buttons/BackHomeButton';
import InfoIcon from '../../components/svg/info';

export default function FuentesDeInformacionPage() {
    return (
        <div>
            <title>Mapear Comunidad</title>
            <header>
                <Navbar />
            </header>

            <main className="flex flex-col font-muli">
                <div className="flex-grow p-4 m-4">
                    <div className={`${styles.container__title} mt-32 py-6`}>
                        <h2>Fuentes de información</h2>
                    </div>
                    <p className="text-justify">
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

                    <div className="grid grid-cols-3 gap-12 mt-6 mr-8">
                        <Card
                            title="Datos Argentina"
                            outLink="https://datos.gob.ar/"
                        >
                            <InfoIcon />
                        </Card>

                        <Card
                            title="Mapa Educativo Nacional"
                            outLink="http://mapa.educacion.gob.ar/"
                        >
                            <InfoIcon />
                        </Card>

                        <Card
                            title="Ministerio de Salud de Entre Ríos"
                            outLink="http://www.entrerios.gov.ar/msalud/?page_id=34871"
                        >
                            <InfoIcon />
                        </Card>
                        <Card
                            title="Policía de Entre Ríos"
                            outLink="http://www.policiadeentrerios.gob.ar/"
                        >
                            <InfoIcon />
                        </Card>

                        <Card
                            title=" Secretaría de Extensión de la Facultad de Trabajo
                            Social - UNER"
                            outLink="http://www.fts.uner.edu.ar/"
                        >
                            <InfoIcon />
                        </Card>

                        <Card
                            title="Guía de Recursos Básicos - Acción de Extensión en
                        Emergencia -FTS"
                            outLink="https://bit.ly/2V8Yy1E"
                        >
                            <InfoIcon />
                        </Card>

                        <Card
                            title="CAPAS - Cartografías para la Atención en Salud - HESM"
                            outLink="https://bit.ly/2V8Yy1E"
                        >
                            <InfoIcon />
                        </Card>
                        <Card
                            title="Base de datos Banco de Alimentos Paraná"
                            outLink="https://www.facebook.com/bancodealimentospna/"
                        >
                            <InfoIcon />
                        </Card>

                        <Card
                            title="Arzobispado de Paraná"
                            outLink="http://www.arzparan.org.ar/parroquias/"
                        >
                            <InfoIcon />
                        </Card>
                    </div>

                    <div className="flex justify-end w-full mt-16">
                        <BackHomeButton />
                    </div>
                </div>

                <FooterSection />
            </main>
        </div>
    );
}
