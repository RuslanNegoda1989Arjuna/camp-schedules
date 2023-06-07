import CampCards from 'components/CampCards/CampCards';
import CampForm from 'components/CampForm/CampForm';
import React, { useState, useEffect } from 'react';

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
    
    
    
useEffect(() => {
    // Зберігаємо оновлені значення форми в локальному сховищі
    localStorage.setItem('formValues', JSON.stringify(formValues));
}, [formValues]);
    
    return (
        <>

            <CampForm onSubmit={addScheduler}/>
            <CampCards values={formValues} />
    </>
    )
 }

export default SummerCampScheduler