import { useState } from 'react';
import styles from './Chest.module.css'
import ChestList from './FirstSteps/ChestList/ChestList';
import ChestRoutine from './FirstSteps/ChestRoutine/ChestRoutine';
import Button from '../../../../../Button/Button';
import { useNavigate } from 'react-router-dom'

const Chest = () => {

    const navigate = useNavigate();

    const [availableExercises, setAvailableExercises] = useState([
        'Press de banca',
        'Press inclinado',
        'Press declinado',
        'Aperturas con mancuernas',
        'Pullover',
        'Fondos en paralelas',
        'Press de banca con barra',
        'Press de banca con mancuernas',
        'Aperturas en máquina (Pec Deck)',
        'Press de pecho en máquina',
        'Press en máquina Smith',
        'Press con banda de resistencia',
        'Press en banco plano con barra',
        'Press en banco inclinado con barra',
        'Press en banco declinado con barra',
        'Aperturas en banco inclinado',
        'Aperturas en banco declinado',
        'Press de banca con agarre cerrado',
        'Fondos asistidos en máquina',
        'Press con mancuernas en banco plano',
        'Press con mancuernas en banco inclinado',
        'Press con mancuernas en banco declinado',
        'Aperturas en polea alta',
        'Aperturas en polea baja',
        'Aperturas en cable crossover',
        'Press de banca con cadenas',
        'Press de banca con banda elástica',
        'Flexiones',
        'Flexiones con manos juntas(Diamante)',
        'Flexiones inclinadas',
        'Flexiones declinadas',
        'Flexiones con palmada',
        'Flexiones en anillas',
        'Flexiones en TRX',
        'Press de pecho en máquina Hammer Strength',
        'Press de pecho unilateral con mancuernas',
        'Press de pecho unilateral en máquina',
        'Press de pecho en banco con stability ball',
        'Push - up con peso adicional',
        'Flexiones arqueadas',
        'Flexiones con agarre amplio',
        'Flexiones con peso corporal en anillas',
        'Flexiones en paralelas',
        'Press de pecho en máquina Marcy',
        'Press de pecho en máquina Cybex',
        'Press con mancuernas en banca ajustable',
        'Press de pecho con cable',
        'Flexiones de pecho con BOSU',
        'Press de pecho con Kettlebell',
        'Flexiones con bandas de resistencia',
    ]);

    const [routine, setRoutine] = useState([]);

    const addExerciseToRoutine = (exercise) => {
        setAvailableExercises(availableExercises.filter(item => item !== exercise));
        setRoutine([...routine, exercise]);
    };

    const removeExerciseFromRoutine = (exercise) => {
        setRoutine(routine.filter(item => item !== exercise));
        setAvailableExercises([...availableExercises, exercise]);
    };

    const handleSave = () => {
        navigate('/chest-step3', { state: { routine } })
    };

    const handleCancel = () => {
        navigate('/')
    };


    return (
        <>
            <div className={styles.container}>
                <div>
                    <ChestList
                        exercises={availableExercises}
                        onExerciseClick={addExerciseToRoutine}
                    />
                </div>
                <div>
                    <ChestRoutine
                        routine={routine}
                        onExerciseClick={removeExerciseFromRoutine}
                    />
                </div>
                <div className={styles.buttonsContainer}>

                    <Button onClick={handleSave} className={styles.button} routine={routine}>
                        CONTINUAR
                    </Button>
                    <Button onClick={handleCancel} className={styles.button}>
                        CANCELAR
                    </Button>

                </div>

            </div>

            <hr className={styles.line} />

            <div className={styles.steps}>
                <div className={styles.circle}>1</div>
                <div className={styles.circle}>2</div>
                <div className={styles.circleActive}>3</div>
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

export default Chest;