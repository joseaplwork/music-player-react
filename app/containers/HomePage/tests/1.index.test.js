import React from 'react';
import { render, shallow } from 'enzyme';
import Header from 'MP/components/Header';
import Main from 'MP/components/Main';
import LoadingIndicator from 'MP/components/LoadingIndicator';
import List from 'MP/components/List';
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

  it('should render the LoadingIndicator component', () => {
    const renderedComponent = shallow(
      <HomePage loading />
    );

    expect(renderedComponent.find(LoadingIndicator).length).toEqual(1);
  });

  it('should render songs List', () => {
    const songs = [{id:1}, {id:2}];
    const renderedComponent = shallow(
      <HomePage searchStarted songs={songs} />
    );

    expect(renderedComponent.find(List).length).toEqual(1);
  });
});
