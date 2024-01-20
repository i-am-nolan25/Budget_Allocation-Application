import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value, 10);

        // Calculate total expenses
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

        // Check if the new budget is greater than or equal to total expenses
        if (updatedBudget >= totalExpenses) {
            setNewBudget(updatedBudget);

            // Dispatch an action to update the budget in the context
            dispatch({
                type: 'SET_BUDGET',
                payload: updatedBudget,
            });
        } else {
            alert("You cannot reduce the budget value lower than the spending");
        }
    }

    return (   
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
