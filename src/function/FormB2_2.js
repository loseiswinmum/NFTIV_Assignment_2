import React, { useState } from 'react';

function FormB2_2() {
  const [formData, setFormData] = useState({
    lostWorkDays: '',
    explanatoryNote: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        工傷損失天數:
        <input
          type="number"
          name="lostWorkDays"
          value={formData.lostWorkDays}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        解釋性說明:
        <textarea
          name="explanatoryNote"
          value={formData.explanatoryNote}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">提交報告</button>
    </form>
  );
}

export default FormB2_2;