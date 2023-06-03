import styles from './CampCards.module.scss'

const CampCards = ({ values }) => {
  return (
    <div className={styles.container}>
        <h2>Camp Scheduler</h2>
        <ul className={styles.activitiesList}>
        {values.map((activities, dayIndex) => (
          <li className={styles.activitiesItem} key={dayIndex}>
            <h3 className={styles.titleDay}>День {dayIndex + 1}</h3>
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