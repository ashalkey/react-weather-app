import React from "react";

const Weather = props => (
    <div>
        {props.city && props.country
            && <p>Location: {props.city}, {props.country}</p>}
        {props.temperature && <p>Temperature: {props.temperature}</p>}
        {props.humidity && <p>Humidity: {props.humidity}%</p>}
        {props.description &&
            <p>Conditions: {props.description.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}</p>}
        {props.error && <p>{props.error}</p>}
    </div>
);

export default Weather;