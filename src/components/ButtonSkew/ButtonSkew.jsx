import React from 'react';
import styles from './ButtonSkew.module.scss';

const ButtonSkew = ({ type, fn, styled, text, location }) => {
  const onClick = e => {
    if (!fn) return;
    fn(e);
  };
  return (
    <button
      className={styles.buttonSkew}
      type={type}
      onClick={onClick}
      styled={styled}
      location={location}
    >
      {text}
    </button>
  );
};

export default ButtonSkew;