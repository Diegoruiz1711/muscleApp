import styles from './BicepsList.module.css'
const BicepsList = ({ exercises, onExerciseClick }) => {



    return (
        <div className={styles.container}>
            {exercises.map((exercise, index) => (
                <div
                    className={styles.exerciseContainer}
                    key={index}
                    onClick={() => onExerciseClick(exercise)}>
                    {exercise}
                </div>
            ))}
        </div>
    )
}

export default BicepsList;

