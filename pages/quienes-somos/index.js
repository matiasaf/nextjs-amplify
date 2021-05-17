import Navbar from '../../components/navigation/navbar';
import Link from 'next/link';
import { FooterSection } from '../../components/footer-section';
import ContactCard from '../../components/contact/card';
import BackHomeButton from '../../components/buttons/BackHomeButton';

export default function HowWorksPage() {
    return (
        <div className="flex flex-col">
            <title>Mapear Comunidad</title>
            <header>
                <Navbar />
            </header>
            <main className="mt-48">
                <div className="flex font-muli justify-center text-bold text-2xl w-full">
                    Integrantes del equipo
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
                    <ContactCard
                        name="Nadia Ahumada"
                        email="nadiaeahumada@gmail.com"
                        isEmail={true}
                    />

                    <ContactCard
                        name="Zulma Cristina Cabrera"
                        email="zulmacabrera.c@hotmail.com"
                        isEmail={true}
                    />

                    <ContactCard
                        name="Diego Neri Ribero"
                        email=" neriribero@gmail.com"
                        isEmail={true}
                    />

                    <ContactCard
                        name="Sergio Daniel Granetto"
                        email="sergiogranetto10@gmail.com"
                        isEmail={true}
                    />

                    <ContactCard
                        name="María de los Angeles Hergenreder"
                        email="mahangeles@gmail.com"
                        isEmail={true}
                    />

                    <ContactCard
                        name="Azul Mussi"
                        email="azul.mussi.comunicacion@gmail.com"
                        isEmail={true}
                    />

                    <ContactCard
                        name="Silvana Isabel Gómez"
                        email="silvanaisabelgomez@gmail.com"
                        isEmail={true}
                    />

                    <ContactCard
                        name="Valentín Fernando Volpe"
                        email="valentinfernandovolpe@gmail.com"
                        isEmail={true}
                    />
                </div>

                <div className="flex font-muli justify-center text-bold text-2xl w-full">
                    Colaboradores
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
                    <ContactCard
                        name="Maria Paz Montenegro"
                        email="Banco de Alimentos de
                    Paraná"
                        isEmail={false}
                    />
                    <ContactCard
                        name="Adela Ramírez"
                        email="Directora Departamental de Escuelas
                    de Paraná"
                        isEmail={false}
                    />
                    <ContactCard
                        name="Fernanda Facello"
                        email="Concejala de la Ciudad de Paraná"
                        isEmail={false}
                    />
                    <ContactCard
                        name="Sergio Granetto"
                        email="Concejal de la Ciudad de Paraná"
                        isEmail={false}
                    />{' '}
                </div>

                <BackHomeButton />
            </main>

            <FooterSection />
        </div>
    );
}
