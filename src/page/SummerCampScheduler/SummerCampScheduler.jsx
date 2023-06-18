import CampCards from 'components/CampCards/CampCards';
import CampForm from 'components/CampForm/CampForm';
import React, { useState, useEffect } from 'react';
import styles from './SummerCampScheduler.module.scss'

const SummerCampScheduler = () => {

    const [formValues, setFormValues] = useState([]);
    console.log(formValues);
  useEffect(() => {
    // Зберігаємо значення форми в стані
    const storedFormValues = localStorage.getItem('formValues');
    if (storedFormValues) {
      setFormValues(JSON.parse(storedFormValues));
    }
  }, []);
    
      
    const addScheduler = Schaduler => {

    setFormValues([...formValues, Schaduler]);
  };
    const deleteScheduler = (dayIndex) => {
    const updatedFormValues = formValues.filter(
      (_, index) => index !== dayIndex
    );
    setFormValues(updatedFormValues);
  };
    
    
    
useEffect(() => {
    // Зберігаємо оновлені значення форми в локальному сховищі
    localStorage.setItem('formValues', JSON.stringify(formValues));
}, [formValues]);
    
    return (
      <>
        <div className={styles.scheduler}>
            <CampForm onSubmit={addScheduler}/>
            <CampCards values={formValues} onDelete={deleteScheduler}/>
        </div>
    </>
    )
 }

export default SummerCampScheduler