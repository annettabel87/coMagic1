import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import { createPhotoFile } from '../../utils/createPhotoFile';
import { validateConstants } from '../../constants/constants';
import { IAddCardData, IFormData, IFormCard } from '../../types/types';
import styles from './Form.module.css';

export const Form = ({ addCardData }: IAddCardData) => {
  const buttonStyles = {
    backgroundColor: 'rgb(161, 124, 74)',
  };
  const buttonHoverStyles = {
    backgroundColor: 'rgb(199, 153, 92)',
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<IFormData>({
    mode: 'onChange',
  });

  const onSubmit = handleSubmit((data: IFormData) => {
    const cardData: IFormCard = {
      id: Date.now().toString(),
      ...data,
      photo:
        data.photo instanceof FileList ? createPhotoFile(data.photo) : null,
    };
    addCardData(cardData);

    reset();
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.label} htmlFor="name">
        Имя:
        <input
          className={styles.textInput}
          type="text"
          {...register('name', {
            required: 'введите имя',
            minLength: {
              value: validateConstants.MIN_LENGTH_NAME,
              message: 'имя слишком короткое',
            },
            maxLength: {
              value: validateConstants.MAX_LENGTH_NAME,
              message: 'имя слишком длинное',
            },
          })}
        />
        <p>
          {' '}
          {errors?.name && (
            <span className={styles.validateError}>{errors.name.message}</span>
          )}{' '}
        </p>
      </label>
      <label className={styles.label} htmlFor="surname">
        Фамилия:
        <input
          className={styles.textInput}
          type="text"
          {...register('surname', {
            required: 'введите фамилию',
            minLength: {
              value: validateConstants.MIN_LENGTH_NAME,
              message: 'фамилия слишком короткая',
            },
          })}
        />
        <p>
          {' '}
          {errors?.surname && (
            <span className={styles.validateError}>
              {errors.surname.message}
            </span>
          )}{' '}
        </p>
      </label>
      <label className={styles.label} htmlFor="birth">
        Дата рождения:
        <p>
          {' '}
          {errors?.birth && (
            <span className={styles.validateError}>{errors.birth.message}</span>
          )}{' '}
        </p>
        <input
          className={styles.inputDate}
          type="date"
          {...register('birth', {
            required: 'введите дату вашего рождения',
          })}
        />
      </label>
      <label className={styles.label} htmlFor="country">
        Страна:
        <p>
          {' '}
          {errors?.country && (
            <span className={styles.validateError}>select one option</span>
          )}{' '}
        </p>
        <select
          {...register('country', {
            required: 'выберите страну',
          })}
        >
          <option value="Россия">Россия</option>
          <option value="Беларусь">Беларусь</option>
          <option value="Украина">Украина</option>
        </select>
      </label>
      <label className={styles.label} htmlFor="photo">
        Загрузите фото
        <p>
          {' '}
          {errors?.photo && (
            <span className={styles.validateError}>{errors.photo.message}</span>
          )}{' '}
        </p>
        <input
          className={styles.inputFile}
          type="file"
          {...register('photo', {
            required: 'добавьте фото',
          })}
        />
      </label>
      <label className={styles.label} htmlFor="согласен">
        <p>
          {' '}
          {errors?.agree && (
            <span className={styles.validateError}>{errors.agree.message}</span>
          )}{' '}
        </p>
        <input
          className={styles.inputCheckbox}
          type="checkbox"
          {...register('agree', {
            required: 'вы не согласились с условиями',
          })}
        />
        Я согласен
      </label>
      <Button
        type="submit"
        disabled={!isDirty || !isValid}
        style={buttonStyles}
        hoverStyle={buttonHoverStyles}
      >
        Добавить
      </Button>
    </form>
  );
};
