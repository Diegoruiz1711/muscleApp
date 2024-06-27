import Button from '../Button/Button';
import styles from './Help.module.css'
import { Link } from 'react-router-dom'; 
import ExerciseModal from '../Modal/ExerciseModal';

  
const Help = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.buttonContainer}>
            {isOpen && <ExerciseModal />}
            
                <Button onClick={handleOpenModal} className={styles.button}>
                    MODAL
                </Button>
            
        </div>
    )
}

export default Help;