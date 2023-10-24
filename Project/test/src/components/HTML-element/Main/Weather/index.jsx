import { useState } from 'react'
import './weather.css'
const APIkey = 'bb44b9bde3bbd4fcbb8bb71564edab15'

function Weather() {
	const [search, setSearch] = useState('')
	const [weather, setWeather] = useState('')
	const [imgWeather,setImgWeather] = useState('') 


	const apiGet = () => {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIkey}`
		fetch(url)
			.then(res => res.json()) 
			.then(res => {
				if(search !== res.name) {
					return console.log('Not found city');
				} else {
					setWeather(res)
					console.log(res);
				}
			})
	}

	return (
		<div className='app'>
			<div className='container_weather'>
				<div className='search_box'>
					<input
						type='text'
						placeholder='Name city...'
						onChange={e => setSearch(e.target.value)}
					/>
					<button onClick={apiGet} className='get-weather'>GET</button>
				</div>
				{typeof weather.main != 'undefined' ? (
					<div className='weahter-info'>
						<div className='top'>
							<div className='city'>
								<p>{weather.name}</p>
							</div>
							<div className='temp'>
								<h1>{(weather.main.temp - 273.15).toFixed()}°C</h1>
							</div>
							<div className='desc'>
								<img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" style={{width:120,height:140}} />
								<p>{weather.weather[0].main}</p>
							</div>
						</div>
						<div className='bottom'>
							<div className='feels'>
								<p className='bold'>
								{(weather.main.feels_like - 273.15).toFixed()}°C
								</p>
								<p>Feels Like</p>
							</div>
							<div className='humidity'>
								<p className='bold'>{weather.main.humidity}%</p>
								<p>Humidity</p>
							</div>
							<div className='speed'>
								<p className='bold'>{weather.wind.speed.toFixed()} MPH</p>
								<p>Wind Speed</p>
							</div>
						</div>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	)
}

export default Weather
