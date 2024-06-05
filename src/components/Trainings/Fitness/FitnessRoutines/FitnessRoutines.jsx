import { Link } from 'react-router-dom';
import biceps from '../../../images/fitness/biceps.png'
import chest from '../../../images/fitness/chest.png'
import shoulders from '../../../images/fitness/shoulders.png'
import legs from '../../../images/fitness/legs.png'
import back from '../../../images/fitness/back.png'
import triceps from '../../../images/fitness/triceps.png'
import styles from './FitnessRoutines.module.css'
const FitnessRoutines = () => {
    return (
        <>
            <h1 className={styles.title}>Selecciona los músculos que quieres trabajar</h1>

            <div className={styles.container}>
                <div className={styles.muscleContainer}>
                    <Link to='/chest' className={styles.linkContainer}>
                        <img src={chest} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Pectorales</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/back' className={styles.linkContainer}>
                        <img src={back} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Espalda</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/legs' className={styles.linkContainer}>
                        <img src={legs} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Piernas</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/triceps' className={styles.linkContainer}>
                        <img src={triceps} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Triceps</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/biceps' className={styles.linkContainer}>
                        <img src={biceps} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Biceps</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/shoulders' className={styles.linkContainer}>
                        <img src={shoulders} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Hombros</h2>
                </div>
            </div>


            <hr className={styles.line} />

            <div className={styles.steps}>
                <div className={styles.circle}>1</div>
                <div className={styles.circleActive}>2</div>
                <div className={styles.circle}>3</div>
                <div className={styles.circle}>4</div>
                <div className={styles.circle}>5</div>
            </div>
            <div className={styles.circlesDescriptions}>
                <div className={styles.stepsDescription}>Seleccionar tipo de entrenamiento</div>
                <div className={styles.stepsDescription}>Seleccionar grupo muscular</div>
                <div className={styles.stepsDescription}>Seleccionar ejercicios</div>
                <div className={styles.stepsDescription}>Determinar series y repeticiones</div>
                <div className={styles.stepsDescription}>Comenzar a entrenar &#128170;</div>
            </div>

        </>
    )
}

export default FitnessRoutines;