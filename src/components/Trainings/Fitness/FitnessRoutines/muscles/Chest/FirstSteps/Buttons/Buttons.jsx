import { useNavigate } from 'react-router-dom'
import styles from './Buttons.module.css'

const Buttons =({ routine })=>{

const navigate = useNavigate()

    const handleSave = () =>{
        navigate('/chest-step3', { state: { routine } })
    };
    const handleCancel = () =>{
        navigate('/')
    };

    return (
        <div className={styles.container}>
            <button onClick={handleSave}>Continuar</button>
            <button onClick={handleCancel}>cancelar</button>
        </div>
    )
}

export default Buttons;