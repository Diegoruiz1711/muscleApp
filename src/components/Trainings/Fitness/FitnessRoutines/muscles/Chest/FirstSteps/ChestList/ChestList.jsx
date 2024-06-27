import { useContext, useState } from 'react';
import Modal from 'react-modal';
import styles from './ChestList.module.css';
import ExerciseModalContent from '../../../../../../../Modal/ExerciseModal';
import { RoutineContext } from '../../../../../../../../App';


const ChestList = ({ exercises, onExerciseClick }) => {
    const { modalIsOpen, openModal, closeModal } = useContext(RoutineContext);

    return (
        <>
            <div className={styles.listContainer}>
                {exercises.map((exercise, index) => (
                    <div className={styles.exerciseContainer} key={index}>
                        <div className={styles.exerciseName} onClick={() => onExerciseClick(exercise)}>{exercise}</div>
                        <div className={styles.exerciseHelp} onClick={openModal}>?</div>
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
                <ExerciseModalContent closeModal={closeModal} />
            
            </Modal>
        </>
    );
};

export default ChestList;
