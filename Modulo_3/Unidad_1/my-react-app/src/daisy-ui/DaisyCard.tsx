// components/DaisyCard.tsx
import React from 'react';

export const DaisyCard: React.FC = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://i.pinimg.com/736x/bf/1a/03/bf1a031f0f65e284e2d500009ab78263.jpg" alt="gatito" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Gatito Adorable</h2>
        <p>Una tarjeta con diseño limpio usando DaisyUI.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Adoptar</button>
        </div>
      </div>
    </div>
  );
};