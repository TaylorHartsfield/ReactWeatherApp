export default function CurrentWeather({temp, metric, handleOnClick}) {
    
    return (
        <div className="current-box">
            <div className="temp">
                <div className="temp-content">{temp}{metric}</div></div>
            <div className="toggle-scale">
                <button type="button" value="°C" onClick={handleOnClick}>C</button>
                <button type="button" value="°F" onClick={handleOnClick}>F</button>
            </div>
        </div>
    )
}