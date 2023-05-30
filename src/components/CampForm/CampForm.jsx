import { Formik, Field, FieldArray, Form, ErrorMessage } from 'formik';
import React, { useState, useEffect } from 'react';

const CampForm = () => {
  const [formValues, setFormValues] = useState([]);

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
    <div className="container">
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
                    <div key={index} className="activity-row">
                      <div className="form-group">
                        <label htmlFor={`activities.${index}.hour`}>Година:</label>
                        <Field
                          type="text"
                          id={`activities.${index}.hour`}
                          name={`activities.${index}.hour`}
                        />
                        <ErrorMessage
                          name={`activities.${index}.hour`}
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor={`activities.${index}.minute`}>Хвилина:</label>
                        <Field
                          type="text"
                          id={`activities.${index}.minute`}
                          name={`activities.${index}.minute`}
                        />
                        <ErrorMessage
                          name={`activities.${index}.minute`}
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="form-group">
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
                          className="error-message"
                        />
                      </div>

                      <button type="button" onClick={() => remove(index)}>
                        Видалити
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => push({ hour: '', minute: '', activity: '' })}>
                    Додати
                  </button>
                </div>
              )}
            </FieldArray>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      <div className="activities-list">
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
