import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './BicepsSetsAndReps.module.css';
import Button from '../../../../../../Button/Button';

const BicepsSetsAndReps = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [routine, setRoutine] = useState([]);

    useEffect(() => {
        if (location.state && location.state.routine) {
            setRoutine(location.state.routine);
        }
    }, [location.state]);

    const [setsReps, setSetsReps] = useState({});

    const handleSetsChange = (exercise, sets) => {
        setSetsReps({
            ...setsReps,
            [exercise]: {
                sets: Number(sets),
                reps: new Array(Number(sets)).fill(0),
                weight: new Array(Number(sets)).fill('')
            }
        });
    };

    const handleRepsChange = (exercise, setIndex, reps) => {
        const exerciseData = setsReps[exercise] || { sets: 0, reps: [], weight: [] };
        exerciseData.reps[setIndex] = Number(reps);
        setSetsReps({
            ...setsReps,
            [exercise]: exerciseData
        });
    };

    const handleWeightChange = (exercise, setIndex, weight) => {
        const exerciseData = setsReps[exercise] || { sets: 0, reps: [], weight: [] };
        exerciseData.weight[setIndex] = weight;
        setSetsReps({
            ...setsReps,
            [exercise]: exerciseData
        });
    };

    const handleAdd = () => {
        navigate('/fitnessroutines', { state: { routine, setSetsReps } });
    };

    const handleStart = () => {
        navigate('/fitnessroutines', { state: { routineroutine, setSetsReps } });
    };

    const handleCancel = () => {
        navigate('/chest');
    };

    return (
        <>
            <div className={styles.body}>
                <div className={styles.container}>
                    {routine.map((exercise, index) => (
                        <div key={index} >
                            <div className={styles.exerciseContainer}>
                                <div>{exercise}</div>
                                <div>
                                    <label htmlFor={`sets-${exercise}`}>Series </label>
                                    <select
                                        id={`sets-${exercise}`}
                                        onChange={(e) => handleSetsChange(exercise, e.target.value)}
                                    >
                                        {[...Array(11).keys()].map(i => (
                                            <option key={i} value={i}>{i}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {[...Array(setsReps[exercise]?.sets || 0).keys()].map(setIndex => (
                                <div key={setIndex} className={styles.setDetails}>
                                    <div>Serie {setIndex + 1}</div>
                                    <div className={styles.reps}>
                                        <label htmlFor={`reps-${exercise}-${setIndex}`}>Repeticiones </label>
                                        <select
                                            id={`reps-${exercise}-${setIndex}`}
                                            onChange={(e) => handleRepsChange(exercise, setIndex, e.target.value)}
                                        >
                                            {[...Array(20).keys()].map(i => (
                                                <option key={i} value={i + 1}>{i + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className={styles.weight}>
                                        <label htmlFor={`weight-${exercise}-${setIndex}`}>Peso </label>
                                        <select
                                            id={`weight-${exercise}-${setIndex}-unit`}
                                            onChange={(e) => handleWeightChange(exercise, setIndex, `${e.target.value}${setsReps[exercise]?.weight[setIndex]?.replace(/[^\d]/g, '') || ''}`)}
                                        >
                                            <option value="kg">kg</option>
                                            <option value="lbs">lbs</option>
                                        </select>
                                        <input
                                            className={styles.inputFormat}
                                            id={`weight-${exercise}-${setIndex}`}
                                            type="number"
                                            min={0}
                                            onChange={(e) => handleWeightChange(exercise, setIndex, `${setsReps[exercise]?.weight[setIndex]?.replace(/[^\d]/g, '') || ''}${e.target.value}`)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className={styles.buttonsContainer}>
                    <Button onClick={handleAdd} className={styles.button} routine={routine}>
                        AGREGAR OTRO GRUPO MUSCULAR
                    </Button>
                    <Button onClick={handleStart} className={styles.button} routine={routine}>
                        COMENZAR A ENTRENAR
                    </Button>
                    <Button onClick={handleCancel} className={styles.button} routine={routine}>
                        ATRÁS
                    </Button>
                </div>
            </div>
            <hr className={styles.line} />

            <div className={styles.steps}>
                <div className={styles.circle}>1</div>
                <div className={styles.circle}>2</div>
                <div className={styles.circle}>3</div>
                <div className={styles.circleActive}>4</div>
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

export default BicepsSetsAndReps;
