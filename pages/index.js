import Head from 'next/head';
import Link from 'next/link';
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

export default function Home() {
    return (
        <div>
            <Navbar />

            <main className="mt-32">
                <BackgroundImage>
                    <div className="flex justify-center py-20">
                        <TextSection />
                    </div>
                </BackgroundImage>

                {/* NOVEDADES SECTION */}

                <div className="flex flex-col justify-around py-8 bg-gray-100">
                    <StyledDivider className="self-center mb-4" />

                    <h1 className="text-center font-muli font-extrabold text-2xl text-gray-700">
                        Acciones
                    </h1>

                    <StyledDivider className="self-center mt-4" />

                    <div className="flex justify-center m-8 flex-wrap">
                        <NewsCard
                            mapUrl="https://www.google.com/maps/d/embed?mid=1wHADhzFZTOz37t7KwDxy4bzOuRdMcMR9"
                            title="Mapear en emergencia"
                            body="Durante la primera mitad de 2020, Poblaciones incorporó nuevas herramientas y opciones que se integraron a la plataforma.…"
                        />

                        <NewsCard
                            mapUrl="https://www.google.com/maps/d/embed?mid=1xowCKXXVM4MESRs1Op7oSFQtH8cYT2Fm"
                            title="Mapear redes"
                            body="Durante la primera mitad de 2020, Poblaciones incorporó nuevas herramientas y opciones que se integraron a la plataforma.…"
                        />
                    </div>
                </div>

                {/* CARD SECTION */}

                <div className="flex justify-evenly flex-wrap m-16">
                    <Card title="Fuentes de información" link="fuentes-de-informacion" />
                    <Card title="¿Cómo accedo a la información de los mapas?" link="informacion-mapas" />
                    <Card title=" ¿Cómo me sumo a  la iniciativa?" link="como-me-sumo" />
                </div>

                {/* CARTOGRAFIAS SECTION */}

                <div className="flex flex-col justify-around mt-16 py-8 bg-gray-100">
                    <StyledDivider className="self-center mb-4" />

                    <h1 className="text-center font-muli font-extrabold text-2xl text-gray-700">
                        Novedades
                    </h1>

                    <StyledDivider className="self-center mt-4" />

                    <div className="px-16 my-8">
                        <SimpleSlider />
                    </div>
                </div>

                {/* LOGOS SECTION */}

                <div className="flex justify-evenly items-center my-16 w-full flex-wrap">
                    <img className="h-16" src="images/icon1.png" />
                    <img className="h-16" src="images/icon2.png" />
                </div>

                {/* FOOTER SECTION */}
                <FooterSection />
            </main>
        </div>
    );
}
