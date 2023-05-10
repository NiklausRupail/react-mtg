import styles from './Header.module.scss';

const Header = (props) => {
  const { title } = props;
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
