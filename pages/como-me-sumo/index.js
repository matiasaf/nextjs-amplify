import Navbar from '../../components/navigation/navbar';
import { FooterSection } from '../../components/footer-section';
import BackHomeButton from '../../components/buttons/BackHomeButton';

export default function ComoMeSumoPage() {
    return (
        <>
            <Navbar />

            <main className="mt-44 flex-grow h-screen font-muli text-justify">
                <div className="px-16 mb-4">
                    <p className="text-lg">
                        Mapear Comunidad es una iniciativa que nace a partir del
                        interés de relevar datos de
                        instituciones / organizaciones / actores / proyectos de
                        extensión universitarios y geo localizarlos creando así
                        mapas. Estos pueden ser recuperados tanto por la
                        población en general como por los organismos del Estado
                        para planificar política social. Se construyen para ser
                        una herramienta dinámica y actual, y que, al ser
                        apropiada por la comunidad, potencia y fortalece el
                        trabajo en territorio.
                    </p>
                    <br />
                    <h3 className="text-lg">
                        ¿Cómo aportar al Mapear Comunidad?
                    </h3>
                    <br />
                    <p className="text-lg">
                        Actualizando la información publicada en los mapas.
                        Sumando información a los mapas. En ambos casos,
                        ingresando al siguiente enlace podes sumar y actualizar
                        la información de los mapas:
                    </p>

                    <div className="flex mt-16">
                        <div className="flex flex-grow font-muli text-white mb-16 ml-16">
                            <div className="bg-blue-300 flex justify-center p-2 rounded-2xl w-36 transform transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:scale-110">
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfwWvjzxKGZ51kJg879O5zhlByEMmuNk4inQ6wCKua8y0q8wg/viewform"
                                    target="_blank"
                                >
                                    Carga de datos
                                </a>
                            </div>
                        </div>
                        <BackHomeButton />
                    </div>
                </div>
            </main>
            <FooterSection />
        </>
    );
}
