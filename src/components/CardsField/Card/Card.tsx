import { IFormCard } from '../../../types/types';
import userIcon from '/user.png';
import styles from './Card.module.css';

export const Card = ({ name, surname, birth, country, photo }: IFormCard) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        {typeof photo === 'string' ? (
          <img className={styles.img} src={photo} alt="image" />
        ) : (
          <img className={styles.img} src={userIcon} alt="image" />
        )}
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.description}>
          {name} {surname}
        </div>
        <div className={styles.description}>
          <span className={styles.textBold}>День рождения:</span> {birth}
        </div>
        <div className={styles.description}>
          <span className={styles.textBold}>Страна:</span> {country}
        </div>
      </div>
    </div>
  );
};
