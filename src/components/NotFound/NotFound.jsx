import pageNotFound from '../../assets/images/index/pageNotFound.png';
import styles from './NotFound.module.css'
const NotFound = () =>{
    return(
        <div className={styles.container}>
            <img src={pageNotFound} className={styles.imgSizes} alt="Error 404 page not found" />
        </div>
    )
}

export default NotFound;