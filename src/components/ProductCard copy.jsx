import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ image, title, description }) => {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => {
    setCantidad(prev => prev + 1);
  };

  const decrementar = () => {
    setCantidad(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setCantidad(isNaN(value) || value < 1 ? 1 : value);
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-outline-secondary" onClick={decrementar}>-</button>
          <input 
            type="number" 
            className="form-control text-center" 
            value={cantidad} 
            min="1"
            onChange={handleChange}
            style={{ width: '60px' }}
          />
          <button className="btn btn-outline-secondary" onClick={incrementar}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;