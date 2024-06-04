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
            <div className={styles.steps}>
                <div>1- Seleccionar tipo de entrenamiento</div>
                <div>2- Seleccionar grupo muscular</div>
                <div>3- Seleccionar ejercicios</div>
                <div>4- Determinar series y repeticiones</div>
                <div>5- Comenzar a entrenar &#128170;</div>
            </div>
        </>
    )
}

export default Trainings