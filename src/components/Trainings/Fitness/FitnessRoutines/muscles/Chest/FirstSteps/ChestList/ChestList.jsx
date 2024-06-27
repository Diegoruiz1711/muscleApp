import { useContext, useState } from 'react';
import Modal from 'react-modal';
import styles from './ChestList.module.css';
import ExerciseModalContent from '../../../../../../../Modal/ExerciseModal';
import { RoutineContext } from '../../../../../../../../App';

const ChestList = ({ exercises, onExerciseClick }) => {
    const { modalIsOpen, openModal, closeModal } = useContext(RoutineContext);
    const [selectedExercise, setSelectedExercise] = useState(null);

    const handleExerciseClick = (exercise) => {
        setSelectedExercise(exercise);
        openModal();
    };

    return (
        <>
            <div className={styles.listContainer}>
                {exercises.map((exercise, index) => (
                    <div className={styles.exerciseContainer} key={index}>
                        <div className={styles.exerciseName} onClick={() => onExerciseClick(exercise.exercise)}>{exercise.exercise}</div>
                        <div className={styles.exerciseHelp} onClick={() => handleExerciseClick(exercise)}>?</div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Exercise Modal"
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                {selectedExercise && <ExerciseModalContent exercise={selectedExercise} closeModal={closeModal} />}
            </Modal>
        </>
    );
};

export default ChestList;
