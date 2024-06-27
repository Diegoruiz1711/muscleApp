import { useContext } from 'react';
import styles from './ExerciseModal.module.css';
import { RoutineContext } from '../../App';
import clock from '../../assets/images/fitness/clock.png'

const ExerciseModalContent = () => {
    const { closeModal } = useContext(RoutineContext);

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalClose} onClick={closeModal}>
                X
            </div>
            <div className={styles.modalTitle}>Press de banca</div>
            <div className={styles.modalMuscleSection}>
                <div className={styles.modalMuscleTitle}>Músculos implicados</div>
                <div className={styles.modalMuscleDescription}>Principalmente el pectoral mayor, también se activan el deltoides anterior y el tríceps braquial.</div>

            </div>
            <div className={styles.modalMuscleSection}>
                <div className={styles.modalMuscleTitle}>Precalentamiento</div>
                <div className={styles.modalMuscleDescription}>Realiza rotaciones de brazos, estiramientos dinámicos del pecho y algunos press de banca con poco peso.</div>

            </div>
            <div className={styles.modalMuscleExecitionSection}>
                    <div className={styles.modalExecutionSection}>
                        <div className={styles.modalMuscleTitle}>Ejecución</div>
                        <div className={styles.modalMuscleExecutionDescription}>
                            <ul >
                                <li>Acuéstate en un banco plano.</li>
                                <li>Agarra la barra con las manos un poco más anchas que el ancho de los hombros.</li>
                                <li>Baja la barra hasta tocar ligeramente el pecho.</li>
                                <li>Empuja la barra hacia arriba hasta extender completamente los brazos.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.modalMuscleTimeSection}>
                        <div className={styles.modalMuscleTimeTitle}>
                            Tiempo de descanso entre series
                            </div>
                        
                        <div className={styles.modalMuscleTime}>
                            <img src={clock} alt="clock image" className={styles.modalTimeImg}/>
                        </div >
                        <div className={styles.modalMuscleTime}>
                            60-90 segundos.
                            </div> 
                    </div>
                </div>
                <div className={styles.modalMuscleSection}>
                    <div className={styles.modalMuscleTitle}>Estiramiento</div>
                    <div className={styles.modalMuscleDescription}>Estira los pectorales haciendo estiramientos en puerta o apoyando los brazos en una pared y girando el cuerpo hacia el lado opuesto.</div>

                </div>
            
            </div>
            );
};

            export default ExerciseModalContent;
