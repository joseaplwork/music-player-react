import React from 'react';
import { shallow, mount } from 'enzyme';

import { SearchIcon } from 'MP/components/Icons';

import { loadSongs, changeSearchInput } from '../actions';
import { Searcher, mapDispatchToProps } from '../index';

describe('<Seacher />', () => {
  it('should render the SearchIcon component', () => {
    const renderedComponent = shallow(
      <Searcher />
    );

    expect(renderedComponent.find(SearchIcon).length).toEqual(1);
  });

  it('should render the input element', () => {
    const renderedComponent = shallow(
      <Searcher />
    );

    expect(renderedComponent.find('input').length).toEqual(1);
  });

  it('should have className attribute', () => {
    const className = 'test';
    const renderedComponent = shallow(
      <Searcher className={className}/>
    );

    expect(renderedComponent.hasClass(className)).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onInputChange', () => {
      it('should be injected', () => {
        const dispatch =  jasmine.createSpy('dispatch');
        const result = mapDispatchToProps(dispatch);
        expect(result.onInputChange).toBeDefined();
      });

      it('should dispatch changeSearchInput when called', () => {
        const dispatch =  jasmine.createSpy('dispatch');
        const result = mapDispatchToProps(dispatch);
        const value = 'test';
        result.onInputChange({ target: { value: value } });
        expect(dispatch).toHaveBeenCalledWith(changeSearchInput(encodeURIComponent(value)));
        expect(dispatch).toHaveBeenCalledWith(loadSongs());
      });
    });
  });
});