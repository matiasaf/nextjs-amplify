import Head from 'next/head';
import Navbar from '../components/navigation/navbar';
import Slider from '../components/slider/slider';
import TextSection from '../components/text-section/textSection';
import Card from '../components/card/card';
import { StyledDivider } from '../components/styled/divider';
import { NewsCard } from '../components/news-card/newsCard';
import { CartografiaCard } from '../components/cartografia-card/cartografiaCard';

export default function Home() {
    return (
        <div>
            <Navbar />
            <main>
                <div className="flex justify-center mt-20">
                    <div className="bg-gray-700 w-1/6"></div>
                    <TextSection />
                </div>

                {/* CARD SECTION */}

                <div className="flex mt-16 justify-evenly flex-wrap">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

                {/* NOVEDADES SECTION */}

                <div className="flex flex-col justify-around my-16 py-8">
                    <StyledDivider className="self-center mb-4" />

                    <h1 className="text-center font-muli font-extrabold text-2xl text-gray-600">
                        Novedades
                    </h1>

                    <StyledDivider className="self-center mt-4" />

                    <div className="flex justify-center m-8 flex-wrap">
                        <NewsCard
                            imgUrl="https://poblaciones.org/wp-content/uploads/2020/08/nov.png"
                            title="2020: Nueva funcionalidad en Poblaciones"
                            body="Durante la primera mitad de 2020, Poblaciones incorporó nuevas herramientas y opciones que se integraron a la plataforma.…"
                        />

                        <NewsCard
                            imgUrl="https://poblaciones.org/wp-content/uploads/2020/08/nov.png"
                            title="2020: Nueva funcionalidad en Poblaciones"
                            body="Durante la primera mitad de 2020, Poblaciones incorporó nuevas herramientas y opciones que se integraron a la plataforma.…"
                        />

                        <NewsCard
                            imgUrl="https://poblaciones.org/wp-content/uploads/2020/07/foto2-1-scaled-e1594796147475.jpg"
                            title="2020: Nueva funcionalidad en Poblaciones"
                            body="Durante la primera mitad de 2020, Poblaciones incorporó nuevas herramientas y opciones que se integraron a la plataforma.…"
                        />
                    </div>

                    <button className="mt-8 self-center bg-blue-400 w-32 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Ver todas
                    </button>
                </div>

                {/* CARTOGRAFIAS SECTION */}

                <div className="flex flex-col justify-around my-16 py-8 bg-gray-200">
                    <h1 className="text-center font-muli font-extrabold text-2xl text-gray-700">
                        Cartografias
                    </h1>
                    <StyledDivider className="self-center mt-4" />

                    <Slider />

                    <button className="mt-8 self-center bg-blue-400 w-32 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Ver todas
                    </button>
                </div>
            </main>
        </div>
    );
}
