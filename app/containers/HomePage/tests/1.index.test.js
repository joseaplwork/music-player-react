import React from 'react';
import { render, shallow } from 'enzyme';
import Header from 'MP/components/Header';
import Main from 'MP/components/Main';
import LoadingIndicator from 'MP/components/LoadingIndicator';
import Presentation from 'MP/components/Presentation';

import { HomePage } from '../index';

describe('<HomePage />', () => {
  it('should render the Main component', () => {
    const renderedComponent = shallow(
      <HomePage />
    );

    expect(renderedComponent.find(Main).length).toEqual(1);
  });

  it('should render the Header component', () => {
    const renderedComponent = shallow(
      <HomePage />
    );

    expect(renderedComponent.find(Header).length).toEqual(1);
  });

  it('should render the Presentation component', () => {
    const renderedComponent = shallow(
      <HomePage />
    );

    expect(renderedComponent.find(Presentation).length).toEqual(1);
  });

  it('should render the LoadingIndicator component', () => {
    const renderedComponent = shallow(
      <HomePage loading />
    );

    expect(renderedComponent.find(LoadingIndicator).length).toEqual(1);
  });


  it('should remove Presentation component when search has started', () => {
    const renderedComponent = shallow(
      <HomePage searchStarted />
    );

    expect(renderedComponent.find(Presentation).length).toEqual(0);
  });
});
