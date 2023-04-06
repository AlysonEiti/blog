import styles from './NotFound.module.scss';
import error404 from '../../assets/erro_404.png';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.containerContent}>
                <span className={styles.error404}>404</span>

                <h1 className={styles.title}>Ops! Page not found.</h1>

                <p className={styles.paragraph}>Are you sure this is what you were looking for?</p>
                <p className={styles.paragraph}>Wait a few moments and reload the page, or return to home screen.</p>

                <div className={styles.containerButton} onClick={() => navigate(-1)}>
                    <Button aux="lg">
                        Go back
                    </Button>
                </div>

                <img 
                    className={styles.dogImage}
                    src={error404}
                    alt="Social dog with glasses!" 
                />
            </div>
            <div className={styles.whiteSpace}></div>
        </>
    )
}
