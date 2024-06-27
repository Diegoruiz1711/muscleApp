import { useContext } from 'react';
import { Link } from 'react-router-dom';
import abdominal_abs from '../../../../assets/images/fitness/abdominal_abs.png';
import abductors from '../../../../assets/images/fitness/abductors.png';
import aductors from '../../../../assets/images/fitness/aductors.png';
import biceps from '../../../../assets/images/fitness/biceps.png';
import calves from '../../../../assets/images/fitness/calves.png';
import chest from '../../../../assets/images/fitness/chest.png';
import dorsal from '../../../../assets/images/fitness/dorsal.png';
import forearms from '../../../../assets/images/fitness/forearms.png';
import glutes from '../../../../assets/images/fitness/glutes.png';
import hamstrings from '../../../../assets/images/fitness/hamstrings.png';
import lumbar_spine from '../../../../assets/images/fitness/lumbar_spine.png';
import neck from '../../../../assets/images/fitness/neck.png';
import obiques_abs from '../../../../assets/images/fitness/obliques_abs.png';
import quadriceps from '../../../../assets/images/fitness/quadriceps.png';
import shoulders from '../../../../assets/images/fitness/shoulders.png';
import traps from '../../../../assets/images/fitness/traps.png';
import triceps from '../../../../assets/images/fitness/triceps.png';
import styles from './FitnessRoutines.module.css';
import { RoutineContext } from '../../../../App';


const FitnessRoutines = () => {
    const { routineName } = useContext(RoutineContext);
    return (
        <>
            <h1 className={styles.title}>Selecciona los músculos que quieres agregar a {routineName}</h1>

            <div className={styles.container}>
                <div className={styles.muscleContainer}>
                    <Link to='/chest' className={styles.linkContainer}>
                        <img src={chest} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Pectorales</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/biceps' className={styles.linkContainer}>
                        <img src={biceps} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Biceps</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/forearms' className={styles.linkContainer}>
                        <img src={forearms} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Antebrazos</h2>
                </div>

                <div className={styles.muscleContainer}>
                    <Link to='/neck' className={styles.linkContainer}>
                        <img src={neck} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Cuello</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/shoulders' className={styles.linkContainer}>
                        <img src={shoulders} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Deltoides</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/triceps' className={styles.linkContainer}>
                        <img src={triceps} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Triceps</h2>
                </div>

                <div className={styles.muscleContainer}>
                    <Link to='/traps' className={styles.linkContainer}>
                        <img src={traps} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Trapecios</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/dorsal' className={styles.linkContainer}>
                        <img src={dorsal} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Dorsales</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/quadriceps' className={styles.linkContainer}>
                        <img src={quadriceps} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Cuádriceps</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/aductors' className={styles.linkContainer}>
                        <img src={aductors} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Aductores</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/abductors' className={styles.linkContainer}>
                        <img src={abductors} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Abductores</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/calves' className={styles.linkContainer}>
                        <img src={calves} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Pantorrillas</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/hamstrings' className={styles.linkContainer}>
                        <img src={hamstrings} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Isquiotibiales</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/glutes' className={styles.linkContainer}>
                        <img src={glutes} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Glúteos</h2>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.muscleContainer}>
                    <Link to='/abdominalabs' className={styles.linkContainer}>
                        <img src={abdominal_abs} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Abdominales</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/obliquesabs' className={styles.linkContainer}>
                        <img src={obiques_abs} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Oblicuos</h2>
                </div>
                <div className={styles.muscleContainer}>
                    <Link to='/lumbarspine' className={styles.linkContainer}>
                        <img src={lumbar_spine} alt="icon" className={styles.imgSize} />
                    </Link>
                    <h2 className={styles.muscleFont}>Lumbares</h2>
                </div>
            </div>


            <hr className={styles.line} />

            <div className={styles.steps}>
                <div className={styles.circle}>1</div>
                <div className={styles.circleActive}>2</div>
                <div className={styles.circle}>3</div>
                <div className={styles.circle}>4</div>
                <div className={styles.circle}>5</div>
            </div>
            <div className={styles.circlesDescriptions}>
                <div className={styles.stepsDescription}>Seleccionar tipo de entrenamiento</div>
                <div className={styles.stepsDescription}>Seleccionar grupo muscular</div>
                <div className={styles.stepsDescription}>Seleccionar ejercicios</div>
                <div className={styles.stepsDescription}>Determinar series y repeticiones</div>
                <div className={styles.stepsDescription}>Comenzar a entrenar &#128170;</div>
            </div>

        </>
    )
}

export default FitnessRoutines;