import { Link } from 'react-router-dom'
import fitnessIcon from '../../../assets/images/index/fitnessIcon.png'
import styles from './Fitness.module.css'

const Fitness = () => {

    return (

        <div className={styles.container}>
        <Link to='/fitnessroutines'><img src={fitnessIcon} alt="Fitness image" className={styles.imgSize}/></Link>
    </div>

    )
}

export default Fitness;
