import Head from 'next/head';
import Navbar from '../components/navigation/navbar';
import TextSection from '../components/text-section/textSection';
import Card from '../components/card/card';
import { StyledDivider } from '../components/styled/divider';
import { NewsCard } from '../components/news-card/newsCard';
import SimpleSlider from '../components/slider/simpleSlider';
import LocationIcon from '../components/svg/locationIcon';
import InstagramIcon from '../components/svg/instagramIcon';
import MailIcon from '../components/svg/mailIcon';

export default function Home() {
    return (
        <div>
            <Navbar />

            <main>
                <div className="flex justify-center mt-20">
                    <div className="bg-gray-700 w-1/6 h-56"></div>
                    <TextSection />
                </div>

                {/* NOVEDADES SECTION */}

                <div className="flex flex-col justify-around my-16 py-8 bg-gray-100">
                    <StyledDivider className="self-center mb-4" />

                    <h1 className="text-center font-muli font-extrabold text-2xl text-gray-700">
                        Proyectos
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
                    <Card title="Fuentes de información" />
                    <Card title="Colaboradores" />
                    <Card title="Quéres ser parte de la iniciativa?" />
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

                <div className="flex justify-evenly items-center h-64 my-16 w-full">
                    <img src="images/icon1.png" />
                    <img src="https://3.bp.blogspot.com/-rJi8G6r0zd4/XxYZSE6SDCI/AAAAAAAAAFs/dvoFSGcpm2Y9Q2kHqSroZLrSJc0dimtIACK4BGAYYCw/s1600/BAP.jpg" />
                    <img src="images/icon2.png" />
                </div>

                {/* FOOTER SECTION */}
                <div className="bg-gray-100 h-64 flex justify-evenly items-center">
                    <div className="flex ml-4  font-muli">
                        <div className="self-center">
                            <LocationIcon height={30} />
                        </div>
                        <span className="ml-4 text-5xl text-gray-600">
                            Mapear{' '}
                            <span className="text-blue-400"> Comunidad </span>
                        </span>
                    </div>
                    <div>
                        <div className="font-muli mt-4 flex flex-col">
                            <div className="flex items-center">
                                <InstagramIcon height={32} />
                                <label className="text-gray-800 ml-4">
                                    mapearcomunidad
                                </label>
                            </div>

                            <div className="flex items-center mt-8">
                                <MailIcon height={32} />
                                <label className="text-gray-800 ml-4">
                                    mapearenemergencia@gmail.com
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
