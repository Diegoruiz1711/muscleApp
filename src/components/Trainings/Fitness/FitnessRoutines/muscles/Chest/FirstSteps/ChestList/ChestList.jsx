import styles from './ChestList.module.css'
const ChestList = ({ exercises, onExerciseClick }) => {

    

    return (
        <div className={styles.container}>
            {exercises.map((exercise, index) => (
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

export default ChestList;

