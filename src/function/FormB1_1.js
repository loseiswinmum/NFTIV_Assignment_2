import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    totalEmployees: '',
    maleEmployees: '',
    femaleEmployees: '',
    fullTimeEmployees: '',
    partTimeEmployees: '',
    contractEmployees: '',
    interns: '',
    volunteers: '',
    ageGroup: '',
    region: '',
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
        員工總人數:
        <input
          type="number"
          name="totalEmployees"
          value={formData.totalEmployees}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        男性員工總人數:
        <input
          type="number"
          name="maleEmployees"
          value={formData.maleEmployees}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        女性員工總人數:
        <input
          type="number"
          name="femaleEmployees"
          value={formData.femaleEmployees}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        全職員工總人數:
        <input
          type="number"
          name="fullTimeEmployees"
          value={formData.fullTimeEmployees}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        兼職員工總人數:
        <input
          type="number"
          name="partTimeEmployees"
          value={formData.partTimeEmployees}
          onChange={handleChange}
        />
      </label>
      <br />
      {/* 其他工人類別，根據需求添加 */}
      <label>
        合同工總人數:
        <input
          type="number"
          name="contractEmployees"
          value={formData.contractEmployees}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        實習生總人數:
        <input
          type="number"
          name="interns"
          value={formData.interns}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        志願者總人數:
        <input
          type="number"
          name="volunteers"
          value={formData.volunteers}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        年齡組:
        <input
          type="text"
          name="ageGroup"
          value={formData.ageGroup}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        地理區域:
        <input
          type="text"
          name="region"
          value={formData.region}
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

export default Form;