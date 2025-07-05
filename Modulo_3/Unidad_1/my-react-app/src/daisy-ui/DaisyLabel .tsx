import React from 'react';

export const DaisyLabel: React.FC = () => {
  return (
    <label className="form-control w-full max-w-xs">
      <span className="label">Publish date</span>
      <input
        type="date"
        className="input input-bordered w-full max-w-xs"
        data-theme="light"
      />
    </label>
  );
};