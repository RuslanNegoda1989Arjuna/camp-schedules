import CampCards from 'components/CampCards/CampCards';
import CampForm from 'components/CampForm/CampForm';
import React, { useState, useEffect } from 'react';
import styles from './SummerCampScheduler.module.scss';
import selectedActivities from '../../data/selectedActivities.json';
import ActivityForm from 'components/ActivityForm/ActivityForm';

const SummerCampScheduler = () => {

  const [formValues, setFormValues] = useState([]);
  const [activities, setActivities] = useState(selectedActivities);

  
  useEffect(() => {
    const storedFormValues = localStorage.getItem('formValues');
    if (storedFormValues) {
      setFormValues(JSON.parse(storedFormValues));
    }
  }, []);

  useEffect(() => {
    const storedActivities = localStorage.getItem('activities');
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    } else {
      setActivities(selectedActivities);
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

  const addActivityOption = (newActivity) => {
    const newActivities = [...activities, { value: newActivity, label: newActivity }];
    setActivities(newActivities);
    localStorage.setItem('activities', JSON.stringify(newActivities));
  };
    
    
    
useEffect(() => {
    localStorage.setItem('formValues', JSON.stringify(formValues));
}, [formValues]);
    
    return (
      <>
        <div className={styles.scheduler}>
          <div className={styles.formBox}>
            <CampForm onSubmit={addScheduler} activityOptions={activities}/>
            <ActivityForm onAddOption={addActivityOption} />
          </div>

          {/* <CampCards values={formValues} onDelete={deleteScheduler}/> */}
        </div>
        {formValues.length !== 0 && <CampCards values={formValues} onDelete={deleteScheduler}/>}
    </>
    )
 }

export default SummerCampScheduler