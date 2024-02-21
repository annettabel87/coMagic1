import { MouseEvent } from 'react';
import Button from '../../components/Button/Button';
import { generateNewColor } from '../../utils/getRandomColor';

const MainPage = () => {
  const clickHandler = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const newColor = generateNewColor();
    const button = e.currentTarget as HTMLButtonElement;
    button.style.backgroundColor = newColor;
  };

  return (
    <div>
      <Button type="button" onClickHandler={(e) => clickHandler(e)}>
        Редактировать
      </Button>
    </div>
  );
};

export default MainPage;
