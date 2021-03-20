import Link from 'next/link';
import LocationIcon from '../svg/locationIcon';

function Navbar() {
    return (
        <nav className="flex top-0 items-center justify-between flex-wrap border-b border-gray-200 py-4">
            <div className="flex ml-4 font-muli">
                <div className="self-center">
                    <LocationIcon height={30} />
                </div>
                <span className="ml-4 text-4xl text-gray-600">
                    Mapear <span className="text-blue-400"> Comunidad </span>
                </span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-400 hover:text-gray hover:border-gray">
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className="w-full lg:w-auto self-stretch text-gray-500 text-lg font-muli">
                <div className="lg:flex justify-center">
                    <img className="mr-8" src="/images/icon1.png" />
                    <img src="/images/icon2.png" />
                </div>
                <div className="lg:flex mt-8">
                    <div className="text-md lg:flex-grow lg:flex justiend">
                        <Link href="/">
                            <a className="block mt-4 pl-4 lg:inline-block lg:mt-0 lg:self-center mr-4 text-center hover:text-blue-500">
                                Inicio
                            </a>
                        </Link>
                    </div>
                    <div className="text-md lg:flex-grow lg:flex">
                        <Link href="/what-is">
                            <a className="block mt-4 pl-4 lg:inline-block lg:mt-0 lg:self-center text-gray-500 mr-4 hover:text-blue-500">
                                ¿Qué es mapear comunidad?
                            </a>
                        </Link>
                    </div>

                    <div className="text-md lg:flex-grow lg:flex">
                        <Link href="/how-works">
                            <a className="block mt-4 pl-4 lg:inline-block lg:mt-0 lg:self-center text-gray-500 mr-4 hover:text-blue-500">
                                ¿Cómo funciona?
                            </a>
                        </Link>
                    </div>

                    <div className="text-md lg:flex-grow lg:flex">
                        <Link href="/contact">
                            <a className="block mt-4 pl-4 lg:inline-block lg:mt-0 lg:self-center text-gray-500 mr-8 hover:text-blue-500">
                                Contacto
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
