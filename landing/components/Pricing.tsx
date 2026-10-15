import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Базовый",
    price: "0 ₽ / мес",
    features: [
      "✓ До 5 активных проектов",
      "✓ До 50 задач",
      "✓ Базовые напоминания",
      "✓ Поддержка в чате",
    ],
    highlight: false,
    btnText: "Начать бесплатно",
    isPrimary: false,
  },
  {
    name: "Продвинутый",
    price: "290 ₽ / мес",
    features: [
      "✓ Неограниченно задач",
      "✓ Совместный доступ",
      "✓ Напоминания в Telegram",
      "✓ Приоритетная поддержка",
    ],
    highlight: true,
    btnText: "Выбрать тариф",
    isPrimary: true,
  },
  {
    name: "Команда",
    price: "790 ₽ / мес",
    features: [
      "✓ Все функции Про",
      "✓ До 10 участников",
      "✓ Общие канбан-доски",
      "✓ Поддержка 24/7",
    ],
    highlight: false,
    btnText: "Выбрать тариф",
    isPrimary: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <h2 className={styles.title}>Тарифные планы</h2>
      <p className={styles.subtitle}>Простые и прозрачные условия без скрытых доплат</p>

      <div className={styles.grid}>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${styles.card} ${plan.highlight ? styles.cardHighlight : ""}`}
          >
            <div>
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.price}>{plan.price}</div>
              <ul className={styles.list}>
                {plan.features.map((feat, fIndex) => (
                  <li key={fIndex}>{feat}</li>
                ))}
              </ul>
            </div>
            <button
              className={`${styles.btn} ${
                plan.isPrimary ? styles.btnPrimary : ""
              }`}
            >
              {plan.btnText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
