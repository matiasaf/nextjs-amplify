import Navbar from '../../components/navigation/navbar';
import ContactCard from '../../components/contact/card';
import { FooterSection } from '../../components/footer-section';
import BackHomeButton from '../../components/buttons/BackHomeButton';

export default function ContactPage() {
    return (
        <div>
            <Navbar />

            <main className="flex mt-36 lg:mt-52 justify-center items-center">
                <div className="lg:w-1/2 w-full px-4">
                    <ContactCard
                        name="Para contactarnos enviá un correo electrónico a la siguiente dirección: "
                        email="mapearcomunidad@gmail.com"
                        isEmail={true}
                    />
                </div>
            </main>

            <div className="my-16">
                <BackHomeButton />
            </div>
            <FooterSection />
        </div>
    );
}
