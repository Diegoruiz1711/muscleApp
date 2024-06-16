import { Link } from 'react-router-dom'
import cardioIcon from '../../../assets/images/index/cardioIcon.png'
import styles from './Cardio.module.css'

const Cardio = () => {

    return (
        <div className={styles.container}>
             <Link to='/cardioroutines'><img src={cardioIcon} alt="Cardio image" className={styles.imgSize}/></Link>
            </div>
    )
}

export default Cardio;