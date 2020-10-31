import Head from 'next/head';
import Navbar from '../components/navigation/navbar';
import Slider from '../components/slider/slider';
import TextSection from '../components/text-section/textSection';
import Card from '../components/card/card';

export default function Home() {
    return (
        <div>
            <Navbar />
            <main>
                <div className="flex justify-center mt-20">
                    <Slider />
                    <TextSection />
                </div>

                {/* CARD SECTION */}

                <div className="flex mt-16 justify-evenly flex-wrap">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

                {/* CARTOGRAFIAS SECTION */}

                <div className="flex mt-16 h-56 flex-col justify-center bg-gray-200">
                    <h1 className="text-center font-muli font-bold text-2xl">
                        Cartografias
                    </h1>
                    <div className="flex justify-evenly mt-8">
                        <div className="bg-gray-800 w-48 text-white">
                            Imagen 1
                        </div>
                        <div className="bg-gray-800 w-48 text-white">
                            Imagen 2
                        </div>
                        <div className="bg-gray-800 w-48 text-white">
                            Imagen 3
                        </div>
                    </div>

                    <button class="mt-8 self-center bg-blue-400 w-32 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Ver todas
                    </button>
                </div>
                <p>
                    {/* <HomeIcon height={60} weight={60} />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Button
                    </button> */}
                </p>
            </main>
        </div>
    );
}
