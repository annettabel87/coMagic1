import { NavLink } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <p>
        Такой страницы не существует. Перейти на{' '}
        <NavLink to="/">Главную</NavLink>
      </p>
    </div>
  );
}

export default NotFoundPage;
