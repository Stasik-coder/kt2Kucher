import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>TaskFlow</div>
      <nav className={styles.nav}>
        <a href="#hero">Главная</a>
        <a href="#features">Возможности</a>
        <a href="#pricing">Тарифы</a>
        <a href="#footer">Контакты</a>
        <button className={styles.btn}>Войти</button>
      </nav>
    </header>
  );
}
