import { useNavigate } from 'react-router-dom'
import styles from './Buttons.module.css'

const Buttons =()=>{

const navigate = useNavigate()

    const handleSave = () =>{
        navigate('/fitnessroutines')
    };

    const handleGoTo = () =>{
        navigate('/fitnessroutines')
    };

    const handleCancel = () =>{
        navigate('/')
    };

    return (
        <div className={styles.container}>
            <button onClick={handleGoTo}>Agregar otro grupo muscular</button>
            <button onClick={handleSave}>Comenzar a entrenar</button>
            <button onClick={handleCancel}>cancelar</button>
        </div>
    )
}

export default Buttons;