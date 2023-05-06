export default function Info({ value }) {
    if (!value) {
        return null;
    }

    const temp = value?.data?.main.temp;
    const feels_like = value?.data?.main.feels_like;
    const max_temp = value?.data?.main.temp_max;
    const min_temp = value?.data?.main.temp_min;
    const wind = Math.round(value?.data?.wind.speed);

    return (
        <div className="info">
            <div>
                <div>
                    Temperature:
                    <div className="values">{temp}°C</div>
                </div>
                <div>
                    Max/min temperature:
                    <div className="values">
                        {max_temp}°C / {min_temp}°C
                    </div>
                </div>
            </div>
            <div>
                <div>
                    Feels like:
                    <div className="values">{feels_like}°C</div>
                </div>
                <div>
                    Wind speed:
                    <div className="values">{wind}m/s</div>
                </div>
            </div>
        </div>
    );
}
