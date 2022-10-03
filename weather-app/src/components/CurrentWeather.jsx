export default function CurrentWeather({temp, metric, handleOnClick}) {
    
    return (
        <div className="current-box">
            <div className="temp">
                {temp}{metric}
            </div>
         
            <div className="toggle-scale">
                <button type="button" className="metric" value="°C" onClick={handleOnClick}>C</button>
                <button type="button" className="metric" value="°F" onClick={handleOnClick}>F</button>
            </div>
        </div>
       
    )
}