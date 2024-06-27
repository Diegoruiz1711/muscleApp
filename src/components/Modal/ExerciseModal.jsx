import React from 'react';
import styles from './ExerciseModal.module.css';
import clock from '../../assets/images/fitness/clock.png';

const ExerciseModalContent = ({ exercise, closeModal }) => {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalClose} onClick={closeModal}>
                X
            </div>
            <div className={styles.modalTitle}>{exercise.exercise}</div>
            <div className={styles.modalMuscleSection}>
                <div className={styles.modalMuscleTitle}>Músculos implicados</div>
                <div className={styles.modalMuscleDescription}>{exercise.musclesExercised}</div>
            </div>
            <div className={styles.modalMuscleSection}>
                <div className={styles.modalMuscleTitle}>Precalentamiento</div>
                <div className={styles.modalMuscleDescription}>{exercise.preTraining}</div>
            </div>
            <div className={styles.modalMuscleExecitionSection}>
                <div className={styles.modalExecutionSection}>
                    <div className={styles.modalMuscleTitle}>Ejecución</div>
                    <div className={styles.modalMuscleExecutionDescription}>
                        <ul>
                            {exercise.description.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.modalMuscleTimeSection}>
                    <div className={styles.modalMuscleTimeTitle}>
                        Tiempo de descanso entre series
                    </div>
                    <div className={styles.modalMuscleTime}>
                        <img src={clock} alt="clock image" className={styles.modalTimeImg} />
                    </div>
                    <div className={styles.modalMuscleTime}>
                        {exercise.breakTime}
                    </div>
                </div>
            </div>
            <div className={styles.modalMuscleSection}>
                <div className={styles.modalMuscleTitle}>Estiramiento</div>
                <div className={styles.modalMuscleDescription}>{exercise.postTraining}</div>
            </div>
        </div>
    );
};

export default ExerciseModalContent;
