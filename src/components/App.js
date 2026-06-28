import React, { useState } from 'react';

export default function DynamicForm() {
  const [fields, setFields] = useState([{ name: '', age: '' }]);


  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFields = [...fields];
    updatedFields[index][name] = value;
    setFields(updatedFields);
  };


  const handleAddField = () => {
    setFields([...fields, { name: '', age: '' }]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} style={{ marginBottom: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
            />
            <button type="button" onClick={() => handleRemoveField(index)}>
              Remove
            </button>
          </div>
        ))}

        <div style={{ marginTop: '15px' }}>
          <button type="button" onClick={handleAddField} style={{ marginRight: '10px' }}>
            Add More..
          </button>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
      
      <p style={{ marginTop: '15px', fontSize: '14px', color: '#555' }}>
        After clicking submit check console for data
      </p>
    </div>
  );
}