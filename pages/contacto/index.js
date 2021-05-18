import Navbar from '../../components/navigation/navbar';
import ContactCard from '../../components/contact/card';
import { FooterSection } from '../../components/footer-section';

export default function ContactPage() {
    return (
        <div>
            <Navbar />

            <main className="flex mt-46 justify-center items-center h-96 lg:h-screen">
                <div className="lg:w-1/2 w-full px-4">
                    <ContactCard
                        name="Envianos un e-mail si quieres contactarnos."
                        email="mapearenemergencia@gmail.com"
                        isEmail={true}
                    />
                </div>
            </main>
            <FooterSection />
        </div>
    );
}
