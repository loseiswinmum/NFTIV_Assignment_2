import React, { useState } from 'react';

function FormB2_3() {
  const [formData, setFormData] = useState({
    qualitativeDescription: '',
    managementSystem: '',
    healthServices: '',
    scope: '',
    responsibility: '',
    leadingIndicators: '',
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
        對發行人採取的相關措施的定性描述，以及這些措施的實施和監控情況:
        <textarea
          name="qualitativeDescription"
          value={formData.qualitativeDescription}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        是否實施了職業健康和安全管理體系，如果實施，是否採用了公認的風險管理和/或管理體系標準/指南:
        <textarea
          name="managementSystem"
          value={formData.managementSystem}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        是否提供職業健康服務和自願健康促進服務，如果提供，發行人如何促進其員工的最佳身心健康:
        <textarea
          name="healthServices"
          value={formData.healthServices}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        涵蓋的工人、活動和工作場所的範圍:
        <textarea
          name="scope"
          value={formData.scope}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        誰負責，他們做什麼以及向誰報告:
        <textarea
          name="responsibility"
          value={formData.responsibility}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        用於向管理層和其他利益相關者（例如監管機構）通報職業健康和安全績效的領先指標:
        <textarea
          name="leadingIndicators"
          value={formData.leadingIndicators}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">提交報告</button>
    </form>
  );
}

export default FormB2_3;