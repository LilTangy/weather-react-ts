import styles from './style.module.scss'
import {useState} from "react"


interface IInputProps {
	placeholder: string
	getWeather: any
}

const Input: React.FC<IInputProps> = ({placeholder, getWeather}) => {

	const [cityName, setCityName] = useState('')

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCityName(e.target.value)
	}

	const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			getWeather(cityName)
		}
	}

  return (
	<input className={styles.input} value={cityName} onKeyDown={(e) => keyDownHandler(e)} onChange={(e) => changeHandler(e)} placeholder={placeholder} type="text" />
  )
}

export default Input
