import styles from './infoBlock.module.scss'

interface IInfoBlock {
	data: string | null
	infoBlockName: string
}

const InfoBlock = ({data, infoBlockName}: IInfoBlock) => {
  return (
	<div className={styles.info__block}>
		<p>{data}</p>
		<p>{infoBlockName}</p>
	</div>
  )
}

export default InfoBlock
