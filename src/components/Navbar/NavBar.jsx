import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../images/index/logo.png'
import profileImage from '../images/index/profileImage.png'

const NavBar = () => {

    const navigate = useNavigate()

    const handleNavigateIndex = () => {
        navigate('./')
    }



    return (
        <div className={styles.container}>

            <div className={styles.logo}>
                <img src={logo} alt="Logo de la App" className={styles.imgSize} onClick={handleNavigateIndex} />
            </div>

            <div className={styles.menu}>
                <Link to='/cardio' className={styles.navContent}>
                    <button className={styles.menuButtonNavBar}>Inicio</button>
                </Link>
                <Link to='/fitness' className={styles.navContent}>
                    <button className={styles.menuButtonNavBar}>Entrenamientos</button>
                </Link>
                <Link to='/aerobics' className={styles.navContent}>
                    <button className={styles.menuButtonNavBar}>Entrenamientos</button>
                </Link>
            </div>

            <div className={styles.profile}>
                <img src={profileImage} alt="Logo de la App" className={styles.imgSizeProfile} />
            </div>
            
        </div>
    )
}

export default NavBar;