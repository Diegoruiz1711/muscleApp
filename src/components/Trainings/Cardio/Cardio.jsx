import { useNavigate } from 'react-router-dom'
import cardioIcon from '../../images/index/cardioIcon.png'
import styles from './Cardio.module.css'

const Cardio = () => {

    const navigate = useNavigate();

    const handleNavigateClick = () =>{
        navigate('./cardioroutines')
    }
    return (
        <div className={styles.container}>
                <img src={cardioIcon} alt="Cardio image" className={styles.imgSize} onClick={handleNavigateClick}/>
            </div>
    )
}

export default Cardio;