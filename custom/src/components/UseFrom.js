import { useState } from 'react';

function UseForm(initialState = { username: '', password: '' }) {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return {
    form,
    handleChange,
  };
}

export default UseForm;
