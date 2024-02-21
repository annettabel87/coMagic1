import { IFormCard } from '../../types/types';
import { Card } from './Card/Card';
import styles from './CardsField.module.css';

export interface ICardsFieldProps {
  cardData: IFormCard[];
}

export const CardsField = ({ cardData }: ICardsFieldProps) => {
  return (
    <div className={styles.cardsField}>
      {cardData.length ? (
        cardData.map((itemData: IFormCard) => (
          <Card key={itemData.id} {...itemData} />
        ))
      ) : (
        <p>карточек нет</p>
      )}
    </div>
  );
};
