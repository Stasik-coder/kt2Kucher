import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.title}>Управляйте задачами легко и без стресса</h1>
      <p className={styles.description}>
        Простой и удобный планировщик задач для учебы, работы и личных целей.
        Организуйте свои дела за пару кликов.
      </p>
      <button className={styles.cta}>Попробовать бесплатно</button>

      <div className={styles.preview}>
        <div className={styles.previewTitle}>Мои задачи на сегодня:</div>
        <div className={`${styles.taskItem} ${styles.taskItemDone}`}>
          <span>✓</span>
          <span>Подготовить отчет по КТ2</span>
        </div>
        <div className={styles.taskItem}>
          <span>○</span>
          <span>Сверстать лендинг на Next.js</span>
        </div>
        <div className={styles.taskItem}>
          <span>○</span>
          <span>Загрузить проект на проверку</span>
        </div>
      </div>
    </section>
  );
}
