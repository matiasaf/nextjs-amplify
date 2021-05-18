import Head from 'next/head';
import Navbar from '../components/navigation/navbar';
import TextSection from '../components/text-section/textSection';
import Card from '../components/card/card';
import { StyledDivider } from '../components/styled/divider';
import { NewsCard } from '../components/news-card/newsCard';
import SimpleSlider from '../components/slider/simpleSlider';
import LocationIcon from '../components/svg/locationIcon';
import MailIcon from '../components/svg/mailIcon';
import { BackgroundImage } from '../components/styled/backgroundImage';
import { FooterSection } from '../components/footer-section';
import Iframe from 'react-iframe';
import InfoIcon from '../components/svg/info';
import MosaicoIcon from '../components/svg/instructivo-icon';
import SumateIcon from '../components/svg/sumate-icon';

export default function Home() {
    return (
        <div>
            <title>Mapear Comunidad</title>
            <header>
                <Navbar />
            </header>

            <main className="mt-16 lg:mt-32">
                <BackgroundImage>
                    <div className="flex justify-center py-20">
                        <TextSection />
                    </div>
                </BackgroundImage>

                {/* NOVEDADES SECTION */}

                <div className="flex flex-col justify-around py-8 bg-gray-100">
                    <StyledDivider className="self-center mb-4" />

                    <h1 className="text-center font-muli font-extrabold text-2xl text-gray-700">
                        Mapas
                    </h1>

                    <StyledDivider className="self-center mt-4" />

                    <div className="flex justify-center m-8 flex-wrap">
                        <div className="flex flex-col rounded bg-gray-200 shadow-md lg:w-1/3 lg:mx-4 my-4 w-full">
                            <Iframe
                                url="https://www.google.com/maps/d/embed?mid=12cx7Lz54r8BdgdCN27ovno1OPt4SLzAI"
                                width="450px"
                                height="450px"
                                id="myId"
                                className="w-full"
                                display="initial"
                                position="relative"
                            />
                            <div className="p-8">
                                <div className="text-center text-gray-600 text-2xl font-bold">
                                    Mapear en Emergencia
                                </div>
                                <p className="text-justify mt-6">
                                    En el marco de la acción en emergencia
                                    “Mapear en Emergencia” se construye este
                                    mapa geolocalizando los espacios que
                                    prestaron asistencia durante el Aislamiento
                                    Social Preventivo y Obligatorio (ASPO)
                                    durante el primer semestre del año 2020, en
                                    la ciudad de Paraná. Presenta información
                                    sobre escuelas, comedores y merenderos,
                                    iglesias, líneas de extensión de la Facultad
                                    de Trabajo Social, un recursero de
                                    Organismos Públicos, efectores y áreas
                                    programáticas de salud, comisarías y
                                    jurisdicciones de comisarías de la ciudad.
                                    <br />
                                    <br />
                                    <span className="font-bold">
                                        Para ampliar el mapa, hacer clic en el
                                        margen superior derecho.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col rounded bg-gray-200 shadow-md lg:w-1/3 my-4 lg:mx-4 w-full">
                            <Iframe
                                url="https://www.google.com/maps/d/embed?mid=1PPMtpg8pnwJRNqZV8e1BvgCOtikYaHQH"
                                width="450px"
                                height="450px"
                                id="myId"
                                className="w-full"
                                display="initial"
                                position="relative"
                            />
                            <div className="p-8 flex flex-col">
                                <div className="text-center text-gray-600 text-2xl font-bold">
                                    Mapear Redes
                                </div>
                                <p className="text-justify mt-6">
                                    En el marco de la acción en emergencia
                                    “Mapear Redes”, la cual da continuidad al
                                    trabajo iniciado en “Mapear en Emergencia”
                                    se construye este mapa, el cual presenta
                                    información sobre redes
                                    interinstitucionales, espacios y actividades
                                    deportivas, vecinales, espacios culturales,
                                    servicios de protección de derechos.
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <span className="font-bold">
                                        Para ampliar el mapa, hacer clic en el
                                        margen superior derecho.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CARD SECTION */}

                <div className="flex justify-evenly flex-wrap m-16">
                    <Card
                        title="Instructivos para acceder a los mapas"
                        appLink="informacion-mapas"
                    >
                        <MosaicoIcon />
                    </Card>

                    <Card title="Sumate a la Comunidad" appLink="como-me-sumo">
                        <SumateIcon />
                    </Card>

                    <Card
                        title="Fuentes de información"
                        appLink="fuentes-de-informacion"
                    >
                        <InfoIcon />
                    </Card>
                </div>

                {/* CARTOGRAFIAS SECTION */}

                <div className="flex flex-col justify-around mt-16 py-8 bg-gray-100">
                    <StyledDivider className="self-center mb-4" />

                    <h1 className="text-center font-muli font-extrabold text-2xl text-gray-700">
                        Novedades
                    </h1>

                    <StyledDivider className="self-center mt-4" />

                    <div className="lg:px-48 px-16 lg:my-8">
                        <SimpleSlider />
                    </div>
                </div>

                {/* LOGOS SECTION */}

                <div className="flex justify-evenly items-center my-16 w-full flex-wrap">
                    <img className="h-16" src="images/icon1.png" />
                    <img className="h-16" src="images/logo-fceco.png" />
                    <img className="h-16" src="images/icon2.png" />
                </div>

                {/* FOOTER SECTION */}
                <FooterSection />
            </main>
        </div>
    );
}
