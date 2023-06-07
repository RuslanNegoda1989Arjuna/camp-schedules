import { Formik, Field, FieldArray, Form, ErrorMessage } from 'formik';
// import React, { useState, useEffect } from 'react';
import styles from "./CampForm.module.scss";
import { BsPlusCircleFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { nanoid } from 'nanoid';
import selectedActivities from '../../data/selectedActivities.json';
import ButtonSkew from '../ButtonSkew/ButtonSkew'


const CampForm = ({ onSubmit }) => {


  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.activities);
    resetForm();
  };

  return (
    <div className={styles.container}>
      <h2>Графік</h2>
      <Formik
        initialValues={{
          activities: [{id: nanoid(), hour: '', minute: '', activity: '' }],
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
                        <label htmlFor={`activities.${index}.minute`}></label>
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
                        <label htmlFor={`activities.${index}.activity`}></label>
                        <Field
                          className={styles.selectActivity}
                          as="select"
                          id={`activities.${index}.activity`}
                          name={`activities.${index}.activity`}
                        >
                         {selectedActivities.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
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

            {/* <button className={styles.submit} type="submit">Submit</button> */}
             <ButtonSkew type="submit" text="Додати день"  />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CampForm;
