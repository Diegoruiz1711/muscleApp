import { useState, useContext } from "react";
import fitnessIcon from "../../assets/images/index/fitnessIcon.png";
import cardioIcon from "../../assets/images/index/cardioIcon.png";
import aerobicsIcon from "../../assets/images/index/aerobicsIcon.png";
import styles from './Trainings.module.css';
import { Link } from "react-router-dom";
import Button from '../Button/Button';
import { RoutineContext } from "../../App";

const Trainings = () => {
    const [showRoutineName, setShowRoutineName] = useState(false);
    const { routineName, setRoutineName } = useContext(RoutineContext);

    const handleClick = () => {
        setShowRoutineName(true);
    };
    const handleInputChange = (event) => {
        setRoutineName(event.target.value);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.imgContainer} onClick={handleClick}>
                    <img src={fitnessIcon} alt="Fitness image" className={styles.imgSize} />
                </div>
                <div className={styles.container} onClick={handleClick}>
                    <img src={cardioIcon} alt="Cardio image" className={styles.imgSize} />
                </div>
                <div className={styles.container} onClick={handleClick}>
                    <img src={aerobicsIcon} alt="Aerobics image" className={styles.imgSize} />
                </div>
            </div>

            {showRoutineName && (
                <div className={styles.routineName}>
                    <h5>¿Cual es el nombre de la rutina?</h5>
                    <input type="text" name="" id="" className={styles.routineNameInput} onChange={handleInputChange} value={routineName} />
                    <Link to='/fitnessroutines' className={styles.buttonsContainer}>
                        <Button className={styles.button}>
                            CONTINUAR
                        </Button>
                    </Link>
                </div>
            )}

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