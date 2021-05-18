import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

import LocationIcon from '../svg/locationIcon';
import useWindowsWidth from '../customs-hooks/useWindowWidth';

function Navbar() {
    const [menuOn, setOnMenu] = useState(false);
    const router = useRouter();
    const onSmallScreen = useWindowsWidth();

    return (
        <nav className="fixed w-full bg-white flex top-0 items-center justify-between flex-wrap border-b border-gray-200 py-4 z-30">
            <div className="flex lg:ml-4 font-muli">
                <div className="self-center">
                    <LocationIcon height={onSmallScreen ? 25 : 40} />
                </div>
                <span className="ml-2 lg:ml-4 text-lg md:text-3xl 2xl:text-5xl text-gray-600">
                    MAPEAR <span className="text-blue-400"> COMUNIDAD </span>
                </span>
            </div>
            <div className="mr-2 mb-2 lg:hidden">
                <button
                    onClick={() => setOnMenu((prevValue) => !prevValue)}
                    className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-400 hover:text-gray hover:border-gray"
                >
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
            <div className="w-full lg:w-auto self-stretch text-gray-500 text-base 2xl:text-lg font-muli">
                <div className="hidden lg:flex justify-center">
                    <a href="http://www.fts.uner.edu.ar/" target="_blank">
                        <img className="mr-8" src="/images/icon1.png" />
                    </a>
                    <a href="http://www.fceco.uner.edu.ar/" target="_blank">
                        <img
                            className="mr-8 w-40"
                            src="/images/logo-fceco.png"
                        />
                    </a>
                    <a href="https://www.parana.gob.ar/" target="_blank">
                        {' '}
                        <img src="/images/icon2.png" />
                    </a>
                </div>
                <div className={`lg:flex mt-8 ${menuOn ? 'block' : 'hidden'}`}>
                    <div className="text-md lg:flex-grow lg:flex">
                        <Link href="/">
                            <a
                                className={`block mt-4 pl-4 lg:inline-block lg:mt-0 lg:self-center lg:mr-4 hover:text-blue-500 ${
                                    router.pathname == '/'
                                        ? `text-blue-500`
                                        : ''
                                }`}
                            >
                                Inicio
                            </a>
                        </Link>
                    </div>
                    <div className="text-md lg:flex-grow lg:flex">
                        <Link href="/que-es-mapear-comunidad">
                            <a
                                className={`block mt-4 pl-4 lg:inline-block lg:mt-0 lg:self-center text-gray-500 mr-4 hover:text-blue-500 ${
                                    router.pathname ==
                                    '/que-es-mapear-comunidad'
                                        ? `text-blue-500`
                                        : ''
                                }`}
                            >
                                ¿Qué es mapear comunidad?
                            </a>
                        </Link>
                    </div>

                    <div className="text-md lg:flex-grow lg:flex">
                        <Link href="/quienes-somos">
                            <a
                                className={`block mt-4 pl-4 lg:inline-block lg:mt-0 lg:self-center text-gray-500 mr-4 hover:text-blue-500 ${
                                    router.pathname == '/quienes-somos'
                                        ? `text-blue-500`
                                        : ''
                                }`}
                            >
                                ¿Quiénes somos?
                            </a>
                        </Link>
                    </div>

                    <div className="text-md lg:flex-grow lg:flex">
                        <Link href="/contacto">
                            <a
                                className={`block mt-4 pl-4 lg:inline-block lg:mt-0 lg:self-center text-gray-500 mr-8 hover:text-blue-500 ${
                                    router.pathname == '/contact'
                                        ? `text-blue-500`
                                        : ''
                                }`}
                            >
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
