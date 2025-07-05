import { useState } from 'react';

export default function ColorBox() {
  const [color, setColor] = useState('orange');

  return (
    <>
      <div style={{ width: 100, height: 100, backgroundColor: color }}></div>
      <button onClick={() => setColor('cyan')}>Cambiar color</button>
    </>
  );
}