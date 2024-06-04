import { useNavigate } from 'react-router-dom'
import aerobicsIcon from '../../images/index/aerobicsIcon.png'
import styles from './Aerobics.module.css'
const Aerobics = () => {

    const navigate = useNavigate();

    const handleNavigateClick = () => {
        navigate('./aerobicsroutines')
    }

    return (
        <div className={styles.container}>
            <img src={aerobicsIcon} alt="Aerobics image" className={styles.imgSize} onClick={handleNavigateClick}/>
        </div>
        )
}

export default Aerobics;