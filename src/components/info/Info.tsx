import InfoBlock from "../infoBlock/InfoBlock"
import Temperature from "../temperature/Temperature"
import styles from "./info.module.scss"

interface IInfoProps {
	results: any
}

const Info: React.FC<IInfoProps> = ({results}) => {

	let tempData = results?.data ? ((results?.data?.main?.feels_like - 273).toFixed() + "°C") : null;
	let humidityData = results?.data ? ((results?.data?.main?.humidity).toFixed() + "%") : null;
	let windsData = results?.data ? ((results?.data?.wind?.speed).toFixed() + " m/s") : null;

	if (results.isLoading) {
		tempData = humidityData = windsData = "Loading..."
	}
	if (results.isError) {
		tempData = humidityData = windsData = "Error"
	}
  return (

	<>	
		<Temperature results={results}/>
		<div className={styles.info}>
			<InfoBlock data={tempData} infoBlockName="Feels Like" />
			<InfoBlock data={humidityData} infoBlockName="Humidity" />
			<InfoBlock data={windsData} infoBlockName="Winds" />
		</div>
	</>
  )
}

export default Info
