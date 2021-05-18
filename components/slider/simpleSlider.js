import React from 'react';
import Slider from 'react-slick';
import { css } from 'emotion';
import useWindowsWidth from '../customs-hooks/useWindowWidth';

export default function SimpleSlider() {
    const onSmallScreen = useWindowsWidth();

    const goToLink = (link) => {
        window.open(link, '_blank');
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: onSmallScreen ? 1 : 2,
        slidesToScroll: onSmallScreen ? 1 : 2,
    };

    return (
        <Slider {...settings}>
            <div className="p-8">
                <div
                    className={css`
                        background: linear-gradient(
                                rgba(255, 255, 255, 0.2),
                                rgba(255, 255, 255, 0.2)
                            ),
                            url('https://noticias.uner.edu.ar/public/uploads/Maperar.png');
                        height: 20rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        box-shadow: 0 3px 6px rgba(37, 43, 47, 0.55);
                    `}
                    onClick={() =>
                        goToLink(
                            'https://noticias.uner.edu.ar/notas/10379/las-palabras-en-accion-mapear-en-emergencia'
                        )
                    }
                >
                    <div className="bg-gray-300 w-1/2 opacity-75 rounded p-2">
                        <div className="text-gray-800 font-muli">
                            Las palabras en accion: Mapear en Emergencia
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-8">
                <div
                    className={css`
                        background: linear-gradient(
                                rgba(255, 255, 255, 0.2),
                                rgba(255, 255, 255, 0.2)
                            ),
                            url('images/noticia-2.jpeg');
                        box-shadow: 0 3px 6px rgba(37, 43, 47, 0.55);
                        height: 20rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    `}
                    onClick={() =>
                        goToLink(
                            'https://www.elonce.com/secciones/institucionales/633732-presentaron-un-mapeo-con-informacinn-para-la-emergencia-sanitaria-en-paranna.htm'
                        )
                    }
                >
                    <div className="bg-gray-300 w-1/2 opacity-75 rounded p-2">
                        <div className="text-gray-800 font-muli">
                            Mapeo con información para la emergencia sanitaria.
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
}
