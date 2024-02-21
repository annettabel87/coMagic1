import { useState, MouseEvent, useEffect } from 'react';
import { getDate } from '../../utils/getDate';
import Button from '../Button/Button';
import { changeBtnColor } from '../../utils/changeBtnColor';
import styles from './DateView.module.css';

const buttonHoverStyles = {
  opacity: '0.7',
};

export const DateView = () => {
  const [date, setDate] = useState(() => getDate(new Date()));
  const [inputValue, setInputValue] = useState(date);
  const [isEdit, setIsEdit] = useState(false);

  const clickHandler = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    changeBtnColor(e);
    setIsEdit(true);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = new Date(e.target.value);
    setInputValue(getDate(time));
  };

  useEffect(() => {
    setDate(inputValue);
    setIsEdit(false);
  }, [inputValue]);

  return (
    <div className={styles.dateView}>
      <p className={styles.text}>{date}</p>
      <Button
        type="button"
        onClickHandler={(e) => clickHandler(e)}
        hoverStyle={buttonHoverStyles}
      >
        Редактировать
      </Button>
      {isEdit && (
        <div>
          <input
            type="date"
            name="date"
            id="date"
            onChange={(e) => onChangeHandler(e)}
            value={inputValue}
          />
        </div>
      )}
    </div>
  );
};
