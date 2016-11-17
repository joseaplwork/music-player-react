import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function HomePage() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.hello} />
      </h1>
    </div>
  );
}

export default HomePage;
