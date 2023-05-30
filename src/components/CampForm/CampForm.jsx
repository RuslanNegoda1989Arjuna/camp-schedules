import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';

const initialValues = {
  fields: Array(12).fill({ hour: '', minute: '', activity: 'перекус' }),
};

const activities = ['перекус', 'велика гра', 'майстер клас'];

const CampForm = () => {
//   const [showDayHeader, setShowDayHeader] = useState(true);
const [submittedData, setSubmittedData] = useState([]);
 const [day, setDay] = useState(1);
 const [showDayHeader, setShowDayHeader] = useState(true);

  const handleSubmit = (values, { resetForm }) => {
    setSubmittedData([...submittedData, ...values.fields]);
    resetForm();
    setShowDayHeader(false);
  };

//   useEffect(() => {
//     if (!showDayHeader) {
//       setDay((prevDay) => prevDay + 1);
//       setShowDayHeader(true);
//     }
//   }, [showDayHeader, submittedData]);
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <div className="cards-container">
              {values.fields.map((field, index) => (
                <div className="card" key={index}>
                  <div className="card-header">Карточка {index + 1}</div>
                  <div className="card-body">
                    <label htmlFor={`fields[${index}].hour`}></label>
                    <Field
                      type="number"
                      name={`fields[${index}].hour`}
                      min="0"
                      max="23"
                    />

                    <label htmlFor={`fields[${index}].minute`}>:</label>
                    <Field
                      type="number"
                      name={`fields[${index}].minute`}
                      min="0"
                      max="59"
                    />

                    <label htmlFor={`fields[${index}].activity`}>
                      Діяльність:
                    </label>
                    <Field as="select" name={`fields[${index}].activity`}>
                      {activities.map((activity, activityIndex) => (
                        <option key={activityIndex} value={activity}>
                          {activity}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>
              ))}
            </div>

            <button type="submit">Відправити</button>
          </Form>
        )}
          </Formik>
          
           {submittedData.length > 0 && (
      <div className="submitted-data">
        <h2>Введені дані:</h2>
        {showDayHeader && <div className="card-header">День {day}</div>}
        {submittedData.map((data, index) => (
          <div className="card" key={index}>
            {data.hour !== '' && data.minute !== '' && data.activity && (
              <div className="card-body">
                <p>
                  {String(data.hour).padStart(2, '0')} : {String(data.minute).padStart(2, '0')} {data.activity}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    )}

{/* <div className="submitted-data">
      <h2>Введені дані:</h2>
      {showDayHeader && <div className="day-header">День {day}</div>}
      <div className="cards-container">
        {submittedData.map((data, index) => (
          <div className="card" key={index}>
            {data.fields.hour !== '' && data.fields.minute !== '' && data.fields.activity && (
              <div className="card-body">
                <p>
                  {String(data.fields.hour).padStart(2, '0')} : {String(data.fields.minute).padStart(2, '0')} {data.fields.activity}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div> */}
          
    </div>
  );
};

export default CampForm;
