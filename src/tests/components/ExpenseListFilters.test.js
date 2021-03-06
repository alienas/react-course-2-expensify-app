import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

//should handle text change
test('should handle text change', () => {
  const value = 'test';
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toBeCalledWith(value);

});

//should sort by date
test('should sort by date', () => {
    const value = 'date';
  wrapper.find('select').at(0).simulate('change', {
    target: { value }
  });
  expect(sortByDate).toHaveBeenCalled();
});


//should sort by amount
test('should sort by amount', () => {
    const value = 'amount';
  wrapper.find('select').at(0).simulate('change', {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

//should handle date changes
test('should handle date changes', () => {

  wrapper.find('DateRangePicker').prop('onDatesChange')(
    {
      startDate: altFilters.startDate,
      endDate: altFilters.endDate
    });
  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

//should handle date focus changes
test('should handle date focus changes', () => {

  wrapper.find('DateRangePicker').prop('onFocusChange')(

      'endDate'
    );
    //console.log(wrapper.debug());
  expect(wrapper.state('calendarFocused')).toBe('endDate');

});
