import LibraryIcon from '../svg/libraryIcon';

const Card = ({ title }) => (
    <div className="m-4 w-1/4 bg-gray-200 rounded flex flex-col justify-center items-center px-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-md ">
        <div className="mt-8">
            <LibraryIcon />
        </div>
        <div className="my-8 font-muli text-gray-700 text-center">
            <h1 className="font-bold">{title}</h1>
            {/* <p className="text-sm mt-4">
                Servir en el desarrollo de análisis espaciales basados en
                información proveniente de diferentes actores locales, fuentes y
                organizaciones.
            </p> */}
        </div>
    </div>
);

export default Card;
