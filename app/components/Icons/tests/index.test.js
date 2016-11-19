import { shallow } from 'enzyme';
import React from 'react';
import logoStyles from '../logo.scss';
import styles from '../icons.scss';
import { SearchIcon, LogoIcon, BackIcon, NextIcon, PreviousIcon, ShareIcon, PauseIcon, PlayIcon } from '../index';

describe('<SearchIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(
      <SearchIcon/>
    );
    expect(renderedComponent.find('svg').length).toEqual(1);
  });

  it('should contain className attribute', () => {
    const className = 'test';
    const renderedComponent = shallow(
      <SearchIcon className={className} />
    );
    expect(renderedComponent.hasClass(className)).toEqual(true);
  });

  it('should render a SVG with inverted colors', () => {
    const renderedComponent = shallow(
      <SearchIcon inverted />
    );
    expect(renderedComponent.hasClass(styles.inverted)).toEqual(true);
  });
});

describe('<LogoIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(
      <LogoIcon/>
    );
    expect(renderedComponent.find('svg').length).toEqual(1);
  });

  it('should contain className attribute', () => {
    const className = 'test';
    const renderedComponent = shallow(
      <LogoIcon className={className} />
    );

    expect(renderedComponent.hasClass(className)).toEqual(true);
  });

  it('should render a SVG with inverted colors', () => {
    const renderedComponent = shallow(
      <LogoIcon inverted />
    );
    expect(renderedComponent.hasClass(logoStyles.inverted)).toEqual(true);
  });
});

describe('<BackIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(
      <BackIcon/>
    );
    expect(renderedComponent.find('svg').length).toEqual(1);
  });

  it('should contain className attribute', () => {
    const className = 'test';
    const renderedComponent = shallow(
      <BackIcon className={className} />
    );
    expect(renderedComponent.hasClass(className)).toEqual(true);
  });

  it('should render a SVG with inverted colors', () => {
    const renderedComponent = shallow(
      <BackIcon inverted />
    );
    expect(renderedComponent.hasClass(styles.inverted)).toEqual(true);
  });
});

describe('<NextIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(
      <NextIcon/>
    );
    expect(renderedComponent.find('svg').length).toEqual(1);
  });

  it('should contain className attribute', () => {
    const className = 'test';
    const renderedComponent = shallow(
      <NextIcon className={className} />
    );
    expect(renderedComponent.hasClass(className)).toEqual(true);
  });

  it('should render a SVG with inverted colors', () => {
    const renderedComponent = shallow(
      <NextIcon inverted />
    );
    expect(renderedComponent.hasClass(styles.inverted)).toEqual(true);
  });
});

describe('<PreviousIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(
      <PreviousIcon/>
    );
    expect(renderedComponent.find('svg').length).toEqual(1);
  });

  it('should contain className attribute', () => {
    const className = 'test';
    const renderedComponent = shallow(
      <PreviousIcon className={className} />
    );
    expect(renderedComponent.hasClass(className)).toEqual(true);
  });

  it('should render a SVG with inverted colors', () => {
    const renderedComponent = shallow(
      <PreviousIcon inverted />
    );
    expect(renderedComponent.hasClass(styles.inverted)).toEqual(true);
  });
});

describe('<ShareIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(
      <ShareIcon/>
    );
    expect(renderedComponent.find('svg').length).toEqual(1);
  });

  it('should contain className attribute', () => {
    const className = 'test';
    const renderedComponent = shallow(
      <ShareIcon className={className} />
    );
    expect(renderedComponent.hasClass(className)).toEqual(true);
  });

  it('should render a SVG with inverted colors', () => {
    const renderedComponent = shallow(
      <ShareIcon inverted />
    );
    expect(renderedComponent.hasClass(styles.inverted)).toEqual(true);
  });
});

describe('<PauseIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(
      <PauseIcon/>
    );
    expect(renderedComponent.find('svg').length).toEqual(1);
  });

  it('should contain className attribute', () => {
    const className = 'test';
    const renderedComponent = shallow(
      <PauseIcon className={className} />
    );
    expect(renderedComponent.hasClass(className)).toEqual(true);
  });

  it('should render a SVG with inverted colors', () => {
    const renderedComponent = shallow(
      <PauseIcon inverted />
    );
    expect(renderedComponent.hasClass(styles.inverted)).toEqual(true);
  });
});

describe('<PlayIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(
      <PlayIcon/>
    );
    expect(renderedComponent.find('svg').length).toEqual(1);
  });

  it('should contain className attribute', () => {
    const className = 'test';
    const renderedComponent = shallow(
      <PlayIcon className={className} />
    );
    expect(renderedComponent.hasClass(className)).toEqual(true);
  });

  it('should render a SVG with inverted colors', () => {
    const renderedComponent = shallow(
      <PlayIcon inverted />
    );
    expect(renderedComponent.hasClass(styles.inverted)).toEqual(true);
  });
});
