import React from 'react';

export const DaisyRadio: React.FC = () => {
  return (
    <div>
      <input type="radio" name="radio-8" className="radio radio-warning" defaultChecked />
      <input type="radio" name="radio-8" className="radio radio-warning" />
    </div>
  );
};