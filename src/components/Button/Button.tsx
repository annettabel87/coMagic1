import {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
  useState,
} from 'react';
import styles from './Button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
  onClickHandler: (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
  children: ReactNode;
  style?: CSSProperties;
  hoverStyle?: CSSProperties;
}

const Button = ({
  type = 'button',
  onClickHandler,
  children,
  style,
  hoverStyle,
  ...props
}: IButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <button
      type={type}
      onClick={(e) => onClickHandler(e)}
      className={styles.button}
      style={{
        ...style,
        ...(isHovering ? hoverStyle : null),
      }}
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
