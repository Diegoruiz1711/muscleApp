import { useEffect, useState, useContext } from 'react';
import styles from './Chest.module.css'
import ChestList from './FirstSteps/ChestList/ChestList';
import ChestRoutine from './FirstSteps/ChestRoutine/ChestRoutine';
import Button from '../../../../../Button/Button';
import { useNavigate } from 'react-router-dom';
import {api} from '../../../../../../utils/api'
import { RoutineContext } from '../../../../../../App';

const Chest = () => {
    const navigate = useNavigate();
    const [exercises, setExercises] = useState([]);
    const [availableExercises, setAvailableExercises] = useState([]);
    const [routine, setRoutine] = useState([]);
    const [error, setError] = useState(null);
    const { routineName } = useContext(RoutineContext);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const response = await api().get('/exercises/chest');
                setExercises(response.data);
                setAvailableExercises(response.data.map(exercise => exercise.exercise));
            } catch (error) {
                console.error('Error fetching exercises:', error);
                setError(error);
            }
        };
        fetchExercises();
    }, []);

    const addExerciseToRoutine = (exercise) => {
        setAvailableExercises(availableExercises.filter(item => item !== exercise));
        setRoutine([...routine, exercise]);
    };

    const removeExerciseFromRoutine = (exercise) => {
        setRoutine(routine.filter(item => item !== exercise));
        setAvailableExercises([...availableExercises, exercise]);
    };

    const handleContinue = () => {
        navigate('/chest-step3', { state: { routine } });
    };

    const handleGoBack = () => {
        navigate('fitnessroutines');
    };

    return (
        <>
        <div className={styles.title}>
            <h1>Pectorales - {routineName}</h1>
        </div>
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
                    <Button className={styles.button} onClick={handleContinue}>
                        CONTINUAR
                    </Button>
                    <Button className={styles.button} onClick={handleGoBack}>
                        ATRÁS
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
    );
};

export default Chest;
