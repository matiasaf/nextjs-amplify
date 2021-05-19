import Navbar from '../../components/navigation/navbar';
import { FooterSection } from '../../components/footer-section';
import BackHomeButton from '../../components/buttons/BackHomeButton';

export default function InformacionMapasPage() {
    return (
        <div>
            <Navbar />

            <main className="mt-52 font-muli">
                <div className="flex flex-col w-full">
                    <h2 className="text-center text-2xl">
                        1) Instructivo para ingresar al mapa.
                    </h2>
                    <img
                        src="../images/instructivos/01.jpeg"
                        alt="Showing the instructive 1 image"
                    />
                </div>

                <div className="flex flex-col w-full">
                    <h2 className="text-center text-2xl">
                        2) Instructivo para utilizar el mapa desde una PC.
                    </h2>
                    <img
                        className="mt-16"
                        src="../images/instructivos/03.jpeg"
                        alt="Showing the instructive 3 image"
                    />
                </div>

                <div className="flex flex-col w-full mt-20">
                    <h2 className="text-center text-2xl">
                        {' '}
                        3) Instructivo para utilizar el mapa desde un celular.
                    </h2>
                    <img
                        className="mt-16"
                        src="../images/instructivos/02.jpeg"
                        alt="Showing the instructive 2 image"
                    />
                </div>

                <div className="mt-20 flex justify-end w-full">
                    <BackHomeButton />
                </div>
            </main>

            <FooterSection />
        </div>
    );
}
