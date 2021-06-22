import RedesSection from '../redes-section/redes-section';

export const FooterSection = ({}) => (
    <div className="bg-gray-100 lg:py-10 py-5 flex justify-evenly items-center flex-wrap">
        <div className="hidden lg:flex ml-4 font-muli lg:my-16 ">
            <div className="lg:w-8 w-5 ml-2">
                <img
                    className="w-full"
                    src="../images/icono-mapear.png"
                    alt="Icono Mapear Comunidad"
                />
            </div>
            <span className="ml-4 text-2xl lg:text-5xl text-gray-600">
                MAPEAR <span className="text-red-800"> COMUNIDAD </span>
            </span>
        </div>
        <div className="my-4">
           <RedesSection />
        </div>
    </div>
);
