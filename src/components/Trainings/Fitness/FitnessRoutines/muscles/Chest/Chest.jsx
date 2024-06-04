import { useState } from 'react';
import Buttons from './FirstSteps/Buttons/Buttons';
import styles from './Chest.module.css'
import ChestList from './FirstSteps/ChestList/ChestList';
import ChestRoutine from './FirstSteps/ChestRoutine/ChestRoutine';

const Chest = () => {

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

    return (
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
        <div>
            <Buttons 
            routine={routine}
            />
        </div>
    </div>
    )
}

export default Chest;