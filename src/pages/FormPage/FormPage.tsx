import { MouseEvent } from 'react';
import Button from '../../components/Button/Button';

const FormPage = () => {
  const buttonStyles = {
    backgroundColor: 'rgb(161, 124, 74)',
  };
  const buttonHoverStyles = {
    backgroundColor: 'rgb(199, 153, 92)',
  };

  const onClickHandler = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    console.log(e);
  };
  return (
    <div>
      FormPage
      <Button
        type="button"
        style={buttonStyles}
        hoverStyle={buttonHoverStyles}
        onClickHandler={(e) => onClickHandler(e)}
      >
        Добавить
      </Button>
    </div>
  );
};

export default FormPage;
