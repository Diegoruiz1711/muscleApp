import styles from './ChestRoutine.module.css'
const ChestRoutine = ({ routine, onExerciseClick }) => {

    return (
        <div className={styles.listContainer}>
            {routine.map((exercise, index) => (
                <div className={styles.exerciseContainer}>
                    <div className={styles.exerciseName} key={index} onClick={() => onExerciseClick(exercise)}>{exercise}</div>
                    <div className={styles.exerciseHelp}>?</div>
                </div>
            ))}
        </div>
    )
}

export default ChestRoutine;