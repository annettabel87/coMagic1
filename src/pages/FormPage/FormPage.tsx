import { useState } from 'react';
import { CardsField } from '../../components/CardsField/CardsField';
import { Form } from '../../components/Form/Form';
import { IFormCard } from '../../types/types';
import styles from './FormPage.module.css';

const FormPage = () => {
  const [cards, setCards] = useState<IFormCard[]>([]);
  const addCardData = (data: IFormCard) => {
    setCards((current) => [data, ...current]);
  };

  return (
    <div className={styles.formPage}>
      <div className={styles.container}>
        <Form addCardData={addCardData} />
        <CardsField cardData={cards} />
      </div>
    </div>
  );
};

export default FormPage;
