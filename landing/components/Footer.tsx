import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>TaskFlow</div>
        <div className={styles.links}>
          <a href="#hero">Главная</a>
          <a href="#features">Возможности</a>
          <a href="#pricing">Тарифы</a>
          <a href="#hero">Попробовать</a>
        </div>
        <div className={styles.copyright}>
          © 2026 TaskFlow. Все права защищены. Выполнено в рамках КТ2.
        </div>
      </div>
    </footer>
  );
}
