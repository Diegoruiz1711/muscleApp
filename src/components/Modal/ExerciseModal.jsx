import styles from './ExerciseModal.module.css'
const ExerciseModal = () => {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalTitle}>Press de banca</div>
            <div className={styles.modalMuscleType}>
                <div className={styles.modalMuscleDescription}>Músculo desarrollado: Principalmente el pectoral mayor, también se activan el deltoides anterior y el tríceps braquial.</div>
                <div className={styles.modalMuscleImage}> imagen de la zona del musculo</div>
            </div>
            <div className={styles.modalMuscleType}>
                <div className={styles.modalMusclePEP}>
                    <div>
                        <h5>Precalentamiento</h5>
                        <p>Realiza rotaciones de brazos, estiramientos dinámicos del pecho y algunos press de banca con poco peso.</p>
                    </div>
                    <div>
                        <h5>Descripción del ejercicio</h5>
                        <ul>
                            <li>Acuéstate en un banco plano.</li>
                            <li>Agarra la barra con las manos un poco más anchas que el ancho de los hombros.</li>
                            <li>Baja la barra hasta tocar ligeramente el pecho.</li>
                            <li>Empuja la barra hacia arriba hasta extender completamente los brazos.</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Estiramiento post-ejercicio</h5>
                        <p>Estira los pectorales haciendo estiramientos en puerta o apoyando los brazos en una pared y girando el cuerpo hacia el lado opuesto.</p>
                    </div>
                </div>
                <div className={styles.modalMuscleTime}>Tiempo de descanso entre series: 60-90 segundos.
                </div>
            </div>
        </div>
    )
}

export default ExerciseModal;