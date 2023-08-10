import { useContext } from 'react';
import { WeatherContext } from '../../contexts/context';

const Data = () => {
    const { current } = useContext(WeatherContext)

    // console.log(current);

    return (
        <div className='w-11/12 md:w-7/12 lg:w-1/2 mx-auto text-center bg-gradient-to-br from-slate-600 via-slate-500 to-slate-600 p-10 rounded-3xl mt-10 md:mt-28 lg:mt-20 3xl:mt-56 text-white'>
            <div className="flex flex-col justify-center items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 lg:text-2xl">
                <img title={current?.condition?.text} src={current?.condition?.icon ? "https:" + current?.condition?.icon : ""} alt="" />
                <p>Covered by cloud: {current?.cloud}%</p>
                <p>{current?.condition?.text}</p>
                <p>Current Temperature: {current?.temp_c}<sup>o</sup>C</p>
                <p>Feels Like: {current?.feelslike_c}<sup>o</sup>C</p>
                <p>Last Updated: {current?.last_updated}</p>
            </div>
        </div>
    );
};

export default Data;