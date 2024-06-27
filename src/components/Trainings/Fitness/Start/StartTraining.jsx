import styles from './StartTraining.module.css'
const StartTraining = () => {
    return (
        <>
            <div className={styles.listContainer}>
                <div className={styles.title}>
                    <h1>Mi Rutina</h1>
                </div>
                <div className={styles.muscletitle}>
                    <h2>Pectorales</h2>
                </div>
                <div className={styles.exerciseContainer}>Pecho plano</div>
                <div className={styles.setsReps}>
                    <div className={styles.sets}>
                        Serie 1
                    </div>
                    <div className={styles.reps}>
                        <div>
                            Repeticiones:
                        </div>
                        <div className={styles.repsInputDone}>
                            15
                        </div>
                    </div>
                    <div className={styles.weight}>
                        <div>
                            Carga:
                        </div>
                        <div className={styles.repsInputDone}>
                            120
                        </div>
                        <div>
                            Lbs
                        </div>

                    </div>
                    <div className={styles.inputContainer}>
                        <input type="checkbox" name="done" id="done" className={styles.doneInput}  checked/>
                    </div>

                </div>
                <div className={styles.setsReps}>
                    <div className={styles.sets}>
                        Serie 2
                    </div>
                    <div className={styles.reps}>
                        <div>
                            Repeticiones:
                        </div>
                        <div className={styles.repsInput}>
                            10
                        </div>
                    </div>
                    <div className={styles.weight}>
                        <div>
                            Carga:
                        </div>
                        <div className={styles.repsInput}>
                            80
                        </div>
                        <div>
                            Kg
                        </div>

                    </div>
                    <div className={styles.inputContainer}>
                        <input type="checkbox" name="done" id="done" className={styles.doneInput}/>
                    </div>

                </div>
            </div>


        </>
    )
}

export default StartTraining