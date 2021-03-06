import Head from 'next/head';
import Navbar from '../../components/navigation/navbar';
import ContactCard from '../../components/contact/card';
import { FooterSection } from '../../components/footer-section';
import BackHomeButton from '../../components/buttons/BackHomeButton';

export default function ContactPage() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/svg+xml"
                    href="../SVG/072-location.svg"
                />
                <title>Mapear Comunidad</title>
            </Head>

            <Navbar />

            <main className="flex flex-col mt-36 h-screen justify-center items-center">
                <div className="lg:w-1/2 w-full px-4 lg:mt-28">
                    <ContactCard
                        name="Para contactarnos enviá un correo electrónico a la siguiente dirección: "
                        email="mapearcomunidad@gmail.com"
                        isEmail={true}
                    />
                </div>

                <div className="self-end">
                    <BackHomeButton />
                </div>
            </main>

            <FooterSection />
        </div>
    );
}
