import { useNavigate } from 'react-router-dom'
import fitnessIcon from '../../images/index/fitnessIcon.png'
import styles from './Fitness.module.css'

const Fitness = () => {

    const navigate = useNavigate();

const handleNavigateClick = () => {
    navigate('./fitnessroutines');
}
    return (

        <div className={styles.container}>
        <img src={fitnessIcon} alt="Cardio image" className={styles.imgSize} onClick={handleNavigateClick}/>
    </div>

    )
}

export default Fitness;
