import LibraryIcon from '../svg/libraryIcon';
import Link from 'next/link';

const Card = ({ title, appLink, outLink }) => (
    <>
        {appLink && (
            <Link href={appLink}>
                <div className="m-4 lg:w-1/4 w-full bg-gray-200 rounded flex flex-col justify-center items-center px-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-md">
                    <div className="mt-8">
                        <LibraryIcon />
                    </div>
                    <div className="my-8 font-muli text-gray-700 text-center">
                        <h1 className="font-bold">{title}</h1>
                    </div>
                </div>
            </Link>
        )}
        {outLink && (
            <a href={outLink} target="_blank">
                <div className="m-4 w-full bg-gray-200 rounded flex flex-col justify-center items-center px-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-md">
                    <div className="mt-8">
                        <LibraryIcon />
                    </div>
                    <div className="my-8 font-muli text-gray-700 text-center">
                        <h1 className="font-bold">{title}</h1>
                    </div>
                </div>
            </a>
        )}
    </>
);

export default Card;
