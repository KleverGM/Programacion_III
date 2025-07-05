import { useContext } from 'react';
import { CartContext } from './CartContext';
import { LanguageContext } from './LanguageContext ';

export default function CartView() {
  const { items, addItem, removeItem } = useContext(CartContext);
  const { lang } = useContext(LanguageContext);

  return (
    <div>
      <h2>{lang === 'es' ? 'Carrito' : 'Cart'}</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} <button onClick={() => removeItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem({ id: Date.now(), name: lang === 'es' ? 'Nuevo producto' : 'New product' })}>
        {lang === 'es' ? 'Agregar producto' : 'Add product'}
      </button>
    </div>
  );
}
