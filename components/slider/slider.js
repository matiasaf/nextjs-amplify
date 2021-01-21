import { useState } from 'react';
import { css } from 'emotion';
import { CartografiaCard } from '../cartografia-card/cartografiaCard';
import { data } from '../../data';
function Slider() {
    const [slide, setSlide] = useState(data.slides[2]);
    const [slides, setSlides] = useState(data.slides);

    function nextProperty() {
        const newIndex = slide.index + 1;
        console.log(slide.index);
        console.log(slides[newIndex]);
        setSlide(slides[newIndex]);
    }

    function prevProperty() {
        const newIndex = slide.index - 1;
        console.log(slide.index);
        console.log(slides[newIndex]);
        setSlide(slides[newIndex]);
    }

    return (
        <div className="flex flex-col justify-evenly h-xlarge">
            <div className="flex self-center">
                <button
                    onClick={nextProperty}
                    disabled={slide.index === slides.length - 1}
                >
                    Next
                </button>
                <button onClick={prevProperty} disabled={slide.index === 0}>
                    Prev
                </button>
            </div>

            <div className="flex justify-center">
                <div
                    className={css`
                        height: 264px;
                        position: relative;
                    `}
                >
                    <div
                        className={css`
                            display: flex;
                            position: absolute;
                            transition: transform 300ms
                                cubic-bezier(0.455, 0.03, 0.515, 0.955);
                        `}
                        style={{
                            transform: `translateX(-${
                                slide.index * (100 / slides.length)
                            }%)`,
                        }}
                    >
                        {slides.map((item, index) => (
                            <CartografiaCard
                                key={index}
                                active={slide.index === index}
                                category={item.category}
                                title={item.title}
                                imgUrl={item.imgUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
