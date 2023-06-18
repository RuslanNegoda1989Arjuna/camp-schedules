import React, { useState } from 'react';
import styles from './ActivityForm.module.scss';
import EmojiPicker from '../EmojiPicker/EmojiPicker';
import ButtonSkew from 'components/ButtonSkew/ButtonSkew';

const ActivityForm = ({ onAddOption }) => {
  const [activity, setActivity] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

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

  const handleEmojiClick = (emoji) => {
    setActivity((prevActivity) => prevActivity + emoji);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prevShowEmojiPicker) => !prevShowEmojiPicker);
  };

  return (
    <form className={styles.formBox} onSubmit={handleSubmit}>
      <label className={styles.labelActivity}>
        Нова діяльність:
        <input className={styles.inputActivity} type="text" value={activity} onChange={handleChange} />
      </label>
      <button className={styles.smileBtn} type="button" onClick={toggleEmojiPicker}>
        {showEmojiPicker ? '😝' : '😃'}
      </button>
      {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
      <ButtonSkew type="submit" text="Додати" />
    </form>
  );
};

export default ActivityForm;
