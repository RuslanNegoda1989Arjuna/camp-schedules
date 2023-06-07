import { Formik, Field, FieldArray, Form, ErrorMessage } from 'formik';
import React, { useState, useEffect } from 'react';
import styles from "./CampForm.module.scss";
import { BsPlusCircleFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';

const CampForm = () => {
  const [formValues, setFormValues] = useState([]);
  console.log(formValues);

  useEffect(() => {
    // Зберігаємо значення форми в стані
    const storedFormValues = localStorage.getItem('formValues');
    if (storedFormValues) {
      setFormValues(JSON.parse(storedFormValues));
    }
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    setFormValues([...formValues, values.activities]);
    resetForm();
  };

  useEffect(() => {
    // Зберігаємо оновлені значення форми в локальному сховищі
    localStorage.setItem('formValues', JSON.stringify(formValues));
  }, [formValues]);

  return (
    <div className={styles.container}>
      <h2>Форма</h2>
      <Formik
        initialValues={{
          activities: [{ hour: '', minute: '', activity: '' }],
        }}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="activities">
              {({ push, remove }) => (
                <div>
                  {values.activities.map((_, index) => (
                    <div key={index} className={styles.activityRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor={`activities.${index}.hour`}></label>
                        <Field
                          className={styles.time}
                          type="text"
                          id={`activities.${index}.hour`}
                          name={`activities.${index}.hour`}
                        />
                        <ErrorMessage
                          name={`activities.${index}.hour`}
                          component="div"
                          className={styles.errorMessage}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor={`activities.${index}.minute`}><b>:</b></label>
                        <Field
                          className={styles.time}
                          type="text"
                          id={`activities.${index}.minute`}
                          name={`activities.${index}.minute`}
                        />
                        <ErrorMessage
                          name={`activities.${index}.minute`}
                          component="div"
                          className={styles.errorMessage}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor={`activities.${index}.activity`}>Діяльність:</label>
                        <Field
                          as="select"
                          id={`activities.${index}.activity`}
                          name={`activities.${index}.activity`}
                        >
                          <option value="">Оберіть діяльність</option>
                          <option value="перекус">перекус</option>
                          <option value="велика гра">велика гра</option>
                          <option value="майстер клас">майстер клас</option>
                        </Field>
                        <ErrorMessage
                          name={`activities.${index}.activity`}
                          component="div"
                          className={styles.errorMessage}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <button className={styles.btnPlusMinus} type="button" onClick={() => push({ hour: '', minute: '', activity: '' })}>
                       <BsPlusCircleFill className={styles.minusPlus}/>
                      </button>

                      <button className={styles.btnPlusMinus} type="button" onClick={() => remove(index)}>
                       <AiFillDelete className={styles.minusPlus}/>
                      </button>
                      </div>
                      
                    </div>
                  ))}
                </div>
              )}
            </FieldArray>

            <button className={styles.submit} type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      <div className={styles.activitiesList}>
        {formValues.map((activities, dayIndex) => (
          <div key={dayIndex}>
            <h3>День {dayIndex + 1}</h3>
            {activities.map((activity, index) => (
              <p key={index}>
                {activity.hour.padStart(2, '0')} : {activity.minute.padStart(2, '0')} {activity.activity}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampForm;
