import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', ()=> {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id if not found', ()=> {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should add an expense', ()=> {

  const expense = {
      id: '4',
      description: 'laptop',
      note: '',
      amount: 0,
      createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: expense
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', ()=> {
  const amount = 500;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: { amount }
  };

  const state = expensesReducer(expenses, action);

  expect(state[0].amount).toBe(amount);
});

test('should not edit expense if expense not found', ()=> {
  const amount = 500;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: { amount}
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});
