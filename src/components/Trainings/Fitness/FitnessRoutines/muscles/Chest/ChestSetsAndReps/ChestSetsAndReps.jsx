import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ChestSetsAndReps.module.css';
import Button from '../../../../../../Button/Button';
import { useForm } from 'react-hook-form';
import { api } from '../../../../../../../utils/api';
import { RoutineContext } from '../../../../../../../App';

const ChestSetsAndReps = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [routine, setRoutine] = useState([]);
    const [setsReps, setSetsReps] = useState({});
    const { routineName } = useContext(RoutineContext);

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        if (location.state && location.state.routine) {
            setRoutine(location.state.routine);
        }
    }, [location.state]);

    const handleSetsChange = (exercise, sets) => {
        setSetsReps((prevSetsReps) => ({
            ...prevSetsReps,
            [exercise]: {
                sets: Number(sets),
                reps: new Array(Number(sets)).fill(0),
                weight: new Array(Number(sets)).fill(''),
                unit: new Array(Number(sets)).fill('kg'),
            },
        }));
    };

    const handleRepsChange = (exercise, setIndex, reps) => {
        setSetsReps((prevSetsReps) => ({
            ...prevSetsReps,
            [exercise]: {
                ...prevSetsReps[exercise],
                reps: prevSetsReps[exercise].reps.map((prevReps, idx) =>
                    idx === setIndex ? Number(reps) : prevReps
                ),
            },
        }));
    };

    const handleWeightChange = (exercise, setIndex, weight) => {
        setSetsReps((prevSetsReps) => ({
            ...prevSetsReps,
            [exercise]: {
                ...prevSetsReps[exercise],
                weight: prevSetsReps[exercise].weight.map((prevWeight, idx) =>
                    idx === setIndex ? weight : prevWeight
                ),
            },
        }));
    };

    const handleUnitChange = (exercise, setIndex, unit) => {
        setSetsReps((prevSetsReps) => ({
            ...prevSetsReps,
            [exercise]: {
                ...prevSetsReps[exercise],
                unit: prevSetsReps[exercise].unit.map((prevUnit, idx) =>
                    idx === setIndex ? unit : prevUnit
                ),
            },
        }));
    };

    const onSubmit = async (data) => {
        const exerciseData = routine.map((exercise) => ({
            name: exercise,
            sets: setsReps[exercise].sets,
            reps: setsReps[exercise].reps,
            weight: setsReps[exercise].weight,
            unit: setsReps[exercise].unit,
        }));

        try {
            await api().post('/exercises/chestRoutine', { exercises: exerciseData });
            // navigate('/fitnessroutines', { state: { routine, setsReps } });
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
            } else {
                console.error('Error while sending the POST request', error);
            }
        }
    };

    const handleAdd = () => {
        navigate('/fitnessroutines', { state: { routine, setsReps } });
    };

    const handleStart = () => {
        const routines = routine.map((exercise) => ({
            exercise,
            setsReps: setsReps[exercise] || { sets: 0, reps: [], weight: [], unit: 'kg' },
        }));
        navigate('/fitnessstart', { state: routines });
    };

    const handleCancel = () => {
        navigate('/chest');
    };

    return (
        <>
            <div className={styles.title}>
                <h1>Pectorales - {routineName}</h1>
            </div>
            <div className={styles.body}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.listContainer}>
                    {routine.map((exercise, exerciseIndex) => (
                        <div key={exerciseIndex} className={styles.exerciseSetReps}>
                            <div className={styles.exerciseContainer}>
                                <div>{exercise}</div>
                                <div>
                                    <label htmlFor={`sets-${exercise}`}>Series </label>
                                    <select
                                        id={`sets-${exercise}`}
                                        className={styles.setSeriesInput}
                                        onChange={(e) => handleSetsChange(exercise, e.target.value)}
                                        value={setsReps[exercise]?.sets || 0}
                                    >
                                        {[...Array(11).keys()].map((i) => (
                                            <option key={i} value={i}>
                                                {i}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {[...Array(setsReps[exercise]?.sets || 0).keys()].map((setIndex) => (
                                <div key={setIndex} className={styles.setDetails}>
                                    <div>Serie {setIndex + 1}</div>
                                    <div className={styles.reps}>
                                        <label htmlFor={`reps-${exercise}-${setIndex}`}>Repeticiones </label>
                                        <select
                                            className={styles.setRepsInput}
                                            id={`reps-${exercise}-${setIndex}`}
                                            onChange={(e) => handleRepsChange(exercise, setIndex, e.target.value)}
                                            value={setsReps[exercise]?.reps[setIndex] || 0}
                                        >
                                            {[...Array(20).keys()].map((i) => (
                                                <option key={i} value={i + 1}>
                                                    {i + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className={styles.weight}>
                                        <label htmlFor={`weight-${exercise}-${setIndex}`}>Carga </label>
                                        <select
                                            className={styles.setRepsInput}
                                            id={`weight-${exercise}-${setIndex}-unit`}
                                            onChange={(e) =>
                                                handleUnitChange(exercise, setIndex, e.target.value)
                                            }
                                            value={setsReps[exercise]?.unit[setIndex] || 'kg'}
                                        >
                                            <option value="kg">kg</option>
                                            <option value="lbs">lbs</option>
                                        </select>
                                        <input
                                            className={styles.inputFormat}
                                            id={`weight-${exercise}-${setIndex}`}
                                            type="number"
                                            min={0}
                                            onChange={(e) =>
                                                handleWeightChange(exercise, setIndex, e.target.value)
                                            }
                                            value={setsReps[exercise]?.weight[setIndex] || ''}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className={styles.buttonsContainer}>
                        <Button type="submit" className={styles.button}>
                            GUARDAR RUTINA
                        </Button>
                    </div>
                </form>
                <div className={styles.buttonsContainer}>
                    <Button onClick={handleAdd} className={styles.button}>
                        AGREGAR OTRO GRUPO MUSCULAR
                    </Button>
                    <Button onClick={handleStart} className={styles.button}>
                        COMENZAR A ENTRENAR
                    </Button>
                    <Button onClick={handleCancel} className={styles.button}>
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

export default ChestSetsAndReps;
