import React, { useState } from 'react';

function FormB2_1() {
  const [formData, setFormData] = useState({
    workRelatedDeaths: '',
    injuryDeathRate: '',
    dataYear1: '',
    dataYear2: '',
    dataYear3: '',
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
        與工作有關的死亡人數:
        <input
          type="number"
          name="workRelatedDeaths"
          value={formData.workRelatedDeaths}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        報告期內基於工人人數或工作小時數的工傷死亡率:
        <input
          type="number"
          step="0.01"
          name="injuryDeathRate"
          value={formData.injuryDeathRate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        三個報告期中的第一個報告期的數據:
        <input
          type="number"
          name="dataYear1"
          value={formData.dataYear1}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        三個報告期中的第二個報告期的數據:
        <input
          type="number"
          name="dataYear2"
          value={formData.dataYear2}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        三個報告期中的第三個報告期的數據:
        <input
          type="number"
          name="dataYear3"
          value={formData.dataYear3}
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

export default FormB2_1;