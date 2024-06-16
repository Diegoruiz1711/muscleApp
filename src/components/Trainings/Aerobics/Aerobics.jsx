import { Link } from 'react-router-dom'
import aerobicsIcon from '../../../assets/images/index/aerobicsIcon.png'
import styles from './Aerobics.module.css'
const Aerobics = () => {

    return (
        <div className={styles.container}>
           <Link to='aerobicsroutines'> <img src={aerobicsIcon} alt="Aerobics image" className={styles.imgSize}/>
           </Link>
           </div>
        )
}

export default Aerobics;