import styles from './BicepsRoutine.module.css'
const BicepsRoutine = ({ routine, onExerciseClick }) => {

    return (
            <div className={styles.container}>
                {routine.map((exercise, index) => (
                    <div
                        key={index}
                        className={styles.exerciseContainer}
                        onClick={() => onExerciseClick(exercise)}>
                        {exercise}
                    </div>
                ))}
            </div>
    )
}

export default BicepsRoutine;