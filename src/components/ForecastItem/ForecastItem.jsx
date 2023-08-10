// import React from 'react';
import PropTypes from "prop-types"
import { timeHours } from "../../constants";

const ForecastItem = (props) => {
    const { temp_c, condition, time } = props

    return <div className={`item w-[80%] rounded-xl py-5 mx-auto flex flex-col items-center ${parseInt(time.split(" ")[1].split(":")[0]) === timeHours ? "border-[3px] border-slate-500 border-opacity-50 bg-slate-200" : "bg-slate-100"}`} onClick={() => console.log(condition)}>
        <h4>{time.split(" ")[1]}</h4>
        <img src={condition.icon} className='!w-10' alt="" />
        <h5>{temp_c.toString()}<sup>o</sup>C</h5>
    </div>;
};

ForecastItem.propTypes = {
    condition: PropTypes.shape({
        icon: PropTypes.string.isRequired,
    }).isRequired,
    time: PropTypes.string.isRequired,
    temp_c: PropTypes.number.isRequired
};


export default ForecastItem;