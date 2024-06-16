import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../assets/images/index/logo.png'
import profileImage from '../../assets/images/index/profileImage.png'

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
                <Link to='/' className={styles.navContent}>
                    <div className={styles.menuButtonNavBar}>Inicio</div>
                </Link>
                <Link to='/1' className={styles.navContent}>
                <div className={styles.menuButtonNavBar}>Entrenamientos</div>
                </Link>
                <Link to='/help' className={styles.navContent}>
                    <div className={styles.menuButtonNavBar}>Ayuda</div>
                </Link>
            </div>

            <div className={styles.profile}>
                <img src={profileImage} alt="Logo de iniciar sesion" className={styles.imgSizeProfile} />
            </div>
            
        </div>
    )
}

export default NavBar;