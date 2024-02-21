import { DateView } from '../../components/Date/DateView';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <DateView />
    </div>
  );
};

export default MainPage;
