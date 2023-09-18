import styles from './style.module.scss'

interface ITempProps {
	results: any
}

const Temperature: React.FC<ITempProps> = ({results}) => {
  return (
	<div className={styles.temp__wrapper}>
		<p>Temperature</p>
		{results.isLoading ? (<p>Loading...</p>) : ""}
		{results.isError ? (<p>Error</p>) : ""}
	 	<p className={styles.temp__value}>{results.data ? ((results.data?.main?.temp - 273).toFixed() + "°C") : null}</p>
	</div>
  )
}

export default Temperature
