import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import { shape } from '../messages';
import NotFoundPage from '../index';

describe('<NotFoundPage />', () => {
  it('should render the Page Not Found text', () => {
    const renderedComponent = shallow(
      <NotFoundPage />
    );

    expect(renderedComponent.contains(
      <h1>
        <FormattedMessage {...shape.header} />
      </h1>)).toEqual(true);
  });
});
