import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [inputEnteredAmount, setInputAmount] = useState('');
  const [inputEnteredName, setInputName] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({
      title: inputEnteredName,
      amount: inputEnteredAmount
    });
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              value={inputEnteredName}
              onChange={event => {
                setInputName(event.target.value);
              }}
              id="title"
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              value={inputEnteredAmount}
              onChange={event => {
                setInputAmount(event.target.value);
              }}
              id="amount"
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
