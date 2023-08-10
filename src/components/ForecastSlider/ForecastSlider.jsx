
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ForecastItem from '../ForecastItem/ForecastItem';
import { timeHours } from '../../constants';
import { useEffect, useState } from 'react';

const ForecastSlider = ({ hours }) => {
    const [startPosition, setStartPosition] = useState(0)

    useEffect(() => {
        if (window.innerWidth >= 0) {
            setStartPosition(timeHours)
        }

        if (window.innerWidth >= 640) {
            setStartPosition(timeHours)
        }

        if (window.innerWidth >= 768) {
            setStartPosition(timeHours - 1)
        }

        if (window.innerWidth >= 1024) {
            setStartPosition(timeHours)
        }

        if (window.innerWidth >= 1280) {
            setStartPosition(timeHours - 2)
        }

        if (window.innerWidth >= 1536) {
            setStartPosition(timeHours - 3)
        }
    }, [])

    return <div className='relative'>
        <OwlCarousel className='owl-theme text-black' items={6} dots={false} nav startPosition={
            startPosition

        } responsive={{
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            },
            1280: {
                items: 5
            },
            1536: {
                items: 7
            },


        }}>
            {hours.length ? hours.map((props, key) => <ForecastItem {...props} key={key} />) : "Loading..."}
        </OwlCarousel>

        {hours.length > 0 && <div className="absolute bottom-0 left-0 right-0 w-screen flex justify-center z-[9999999]">
            <div className='flex gap-5 items-center'>
                <div className='text-black scale-y-[2] hover:bg-gray-700 px-5 rounded hover:text-white cursor-pointer' onClick={() => console.log(document.getElementsByClassName('owl-prev')[0].click())}>{"<"}</div>
                <div className='text-black scale-y-[2] hover:bg-gray-700 px-5 rounded hover:text-white cursor-pointer' onClick={() => console.log(document.getElementsByClassName('owl-next')[0].click())}>{">"}</div>
            </div>
        </div>}
    </div>
};

ForecastSlider.propTypes = {
    hours: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ForecastSlider;