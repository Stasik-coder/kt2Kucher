import styles from "./Features.module.css";

const features = [
  {
    icon: "📋",
    title: "Списки и канбан-доски",
    text: "Организуйте задачи по проектам, выставляйте приоритеты и перемещайте карточки по этапам выполнения.",
  },
  {
    icon: "⏰",
    title: "Умные напоминания",
    text: "Не пропускайте важные дедлайны благодаря встроенным уведомлениям на устройства и напоминаниям.",
  },
  {
    icon: "👥",
    title: "Совместная работа",
    text: "Делитесь списками с коллегами, распределяйте задачи и отслеживайте прогресс команды в реальном времени.",
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <h2 className={styles.title}>Возможности платформы</h2>
      <p className={styles.subtitle}>
        Всё самое необходимое для удобного планирования ваших задач
      </p>

      <div className={styles.grid}>
        {features.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
