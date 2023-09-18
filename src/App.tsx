import "./app.scss"
import Input from './components/input/Input'

import Info from "./components/info/Info"
import { useLazyGetWeatherApiQuery } from "./redux/services/openWeather"

function App() {
	
	const [getWeather, results] = useLazyGetWeatherApiQuery({});
	console.log(results);
	
	return (
		<div className='wrapper'>
			<Input placeholder='Type here a city and press the Enter' getWeather={getWeather} />
			<Info results={results}/>
		</div>
	)
}

export default App
