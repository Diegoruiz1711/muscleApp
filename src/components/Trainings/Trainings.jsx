import Aerobics from "./Aerobics/Aerobics"
import Cardio from "./Cardio/Cardio"
import Fitness from "./Fitness/Fitness"
import styles from './trainings.module.css'
const Trainings = () => {
    return (
        <>
            <div className={styles.container}>
                <Fitness />
                <Aerobics />
                <Cardio />
            </div>
            <div className={styles.stepsTitle}>
                Comienza tu entrenamiento en tan solo 5 pasos
            </div>

            <hr className={styles.line} />

            <div className={styles.steps}>
                <div className={styles.circleActive}>1</div>
                <div className={styles.circle}>2</div>
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

export default Trainings;