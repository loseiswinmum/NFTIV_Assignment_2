import React, { useState } from 'react';

function FormB1_2() {
  const [formData, setFormData] = useState({
    totalTurnoverRate: '',
    maleTurnoverRate: '',
    femaleTurnoverRate: '',
    ageGroupTurnoverRate: '',
    regionTurnoverRate: '',
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
        員工總離職率:
        <input
          type="number"
          step="0.01"
          name="totalTurnoverRate"
          value={formData.totalTurnoverRate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        男性員工離職率:
        <input
          type="number"
          step="0.01"
          name="maleTurnoverRate"
          value={formData.maleTurnoverRate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        女性員工離職率:
        <input
          type="number"
          step="0.01"
          name="femaleTurnoverRate"
          value={formData.femaleTurnoverRate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        相關年齡段員工流失率:
        <input
          type="number"
          step="0.01"
          name="ageGroupTurnoverRate"
          value={formData.ageGroupTurnoverRate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        相關地區員工流失率:
        <input
          type="number"
          step="0.01"
          name="regionTurnoverRate"
          value={formData.regionTurnoverRate}
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

export default FormB1_2;