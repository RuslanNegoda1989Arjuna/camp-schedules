import ButtonSkew from 'components/ButtonSkew/ButtonSkew';
import React, { useState } from 'react';
import styles from './ActivityForm.module.scss'

const ActivityForm = ({ onAddOption }) => {
  const [activity, setActivity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity.trim() === '') {
      return;
    }
    onAddOption(activity);
    setActivity('');
  };

  const handleChange = (e) => {
    setActivity(e.target.value);
  };

  return (
    <form className={styles.formBox} onSubmit={handleSubmit}>
      <label className={styles.labelActivity}>
        Нова діяльність:
        <input className={styles.inputActivity} type="text" value={activity} onChange={handleChange} />
          </label>
          <ButtonSkew type="submit" text="Додати"  />
    </form>
  );
};

export default ActivityForm;
