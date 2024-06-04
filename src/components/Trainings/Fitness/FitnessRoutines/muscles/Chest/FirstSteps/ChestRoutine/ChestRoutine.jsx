import styles from './ChestRoutine.module.css'
const ChestRoutine = ({ routine, onExerciseClick }) => {

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

export default ChestRoutine;