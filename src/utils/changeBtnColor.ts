import { MouseEvent } from 'react';
import { generateNewColor } from './getRandomColor';

export const changeBtnColor = (
  e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
) => {
  const newColor = generateNewColor();
  const button = e.currentTarget as HTMLButtonElement;
  button.style.backgroundColor = newColor;
};
