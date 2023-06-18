import styles from './CampCards.module.scss'

const CampCards = ({ values, onDelete }) => {

    const handleDelete = (dayIndex) => {
    onDelete(dayIndex);
  };

  return (
    <div className={styles.container}>
        <h2 className={styles.titleDay}>Табірний графік</h2>
        <ul className={styles.activitiesList}>
        {values.map((activities, dayIndex) => (
          <li className={styles.activitiesItem} key={dayIndex}>
            <div className={styles.dayHeader}>
              <h3 className={styles.titleDay}>День {dayIndex + 1}</h3>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(dayIndex)}
              >
                Видалити
              </button>
            </div>

            {activities.map((activity, index) => (
              <p key={index}>
                {activity.hour.padStart(2, '0')} : {activity.minute.padStart(2, '0')} {activity.activity}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
        
)
}

export default CampCards