import { useState } from 'react';

export default function SimpleForm() {
  const [name1, setName] = useState('');
  const [name2, setName2] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(`La suma del numero  ${name1} y ${name2} es: ${parseFloat(name1) + parseFloat(name2)}`);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escriba un número"
        value={name1}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Escriba otro número"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        />
        <button type="submit">Sumar</button>
    </form>
  );
}