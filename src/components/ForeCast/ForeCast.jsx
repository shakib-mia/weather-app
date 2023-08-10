import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../../contexts/context';
import ForecastSlider from '../ForecastSlider/ForecastSlider';

const ForeCast = () => {
    const data = useContext(WeatherContext);
    const [hours, setHours] = useState([])
    useEffect(() => {
        if (data.forecast?.forecastday) {
            setHours(data.forecast?.forecastday[0].hour);
            // console.log(data.forecast?.forecastday[0].hour);
        }
    }, [data.forecast?.forecastday])

    return (
        <div className='mt-10 lg:mt-5 w-screen'>
            <h1 className='text-center lg:text-2xl font-medium text-black mb-5'>{data.locationName.length > 1 ? `Forecast for today at ${data.locationName}` : "Loading..."}</h1>
            <ForecastSlider hours={hours} />
        </div>
    );
};

export default ForeCast;