/*
 *
 * Player
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import { selectCurrentSong, selectNext, selectPrevious } from 'MP/containers/App/selectors';
import { NextIcon, PreviousIcon, PlayIcon, PauseIcon } from 'MP/components/Icons';

import styles from './styles.scss';
import messages from './messages';
import { selectPlaying, selectAvailable } from './selectors';
import { playNext, playPrevious, playSong, pauseSong } from './actions';

export class Player extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.isDevice = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);
    this.startPlaying = this.startPlaying.bind(this);
    this.videoEnded = this.videoEnded.bind(this);
  }

  componentDidMount() {
    this.addListeners();
  }

  componentWillUpdate(nextState) {
    const { next, prev } = this.props;

    if (nextState.next !== next && nextState.prev !== prev) {
      this.removeListeners();
    }
  }

  componentDidUpdate(prevProps) {
    const { next, prev } = this.props;

    if (prevProps.next !== next && prevProps.prev !== prev) {
      this.addListeners();
    }
  }

  componentWillUnmount() {
    this.removeListeners();
    this.videoEnded();
  }

  removeListeners() {
    this.audio.removeEventListener('ended', this.videoEnded);
    if (!this.isDevice) {
      this.audio.removeEventListener('loadeddata', this.startPlaying);
    }
  }

  addListeners() {
    this.audio.addEventListener('ended', this.videoEnded);
    if (!this.isDevice) {
      this.audio.addEventListener('loadeddata', this.startPlaying);
    }
  }

  videoEnded() {
    const { triggerPauseSong } = this.props;
    triggerPauseSong(this.audio);
  }

  startPlaying() {
    const { triggerPlaySong } = this.props;
    triggerPlaySong(this.audio);
  }

  render() {
    const {
      className, song, next, prev, playing, available,
      triggerPauseSong,
      triggerPlaySong,
      triggerNext,
      triggerPrevious,
    } = this.props;
    const classes = className ? `${styles.wrapper} ${className}` : styles.wrapper;
    const diskClasses = playing ? `${styles.disk} ${styles.playing}` : styles.disk;
    const prevDisabled = prev == null ? styles.disabled : null;
    const nextDisabled = !next ? styles.disabled : null;
    const diskStyles = {
      backgroundImage: `url(${song.artworkUrl60})`,
    };
    let component = (
      <a tabIndex="0" onClick={() => triggerPauseSong(this.audio)}>
        <PauseIcon className={styles.control} />
      </a>
    );

    if (!playing) {
      const evtClasses = !available && !this.isDevice ? styles.disabled : null;

      component = (
        <a tabIndex="0" className={evtClasses} onClick={!evtClasses ? () => triggerPlaySong(this.audio) : false}>
          <PlayIcon className={styles.control} />
        </a>
      );
    }

    return (
      <div className={classes}>
        <div className={styles.title}>
          <strong>{song.trackName}</strong>
          <p>{song.artistName}</p>
        </div>
        <div className={styles.player}>
          <div className={diskClasses} style={diskStyles}>
            <div className={styles.line1} />
            <div className={styles.line2} />
            <div className={styles.line3} />
          </div>
          {component}
          <audio ref={(c) => { this.audio = c; }} src={song.previewUrl} />
        </div>
        <div className={styles.controls}>
          <a tabIndex="0" className={prevDisabled} onClick={!prevDisabled ? () => triggerPrevious(prev, this.audio) : false}>
            <PreviousIcon className={styles.control} />
          </a>
          <p>{song.trackTimeMillis}</p>
          <a tabIndex="0" className={nextDisabled} onClick={!nextDisabled ? () => triggerNext(next, this.audio) : false}>
            <NextIcon className={styles.control} />
          </a>
        </div>
        <div className={styles.back}>
          <Link to="/">
            <FormattedMessage {...messages.back} />
          </Link>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  className: React.PropTypes.string,
  prev: React.PropTypes.number,
  next: React.PropTypes.number,
  playing: React.PropTypes.bool,
  available: React.PropTypes.bool,
  triggerPauseSong: React.PropTypes.func,
  triggerPlaySong: React.PropTypes.func,
  triggerNext: React.PropTypes.func,
  triggerPrevious: React.PropTypes.func,
  song: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object,
  ]),
};

export const mapStateToProps = createStructuredSelector({
  prev: selectPrevious(),
  next: selectNext(),
  song: selectCurrentSong(),
  playing: selectPlaying(),
  available: selectAvailable(),
});

export function mapDispatchToProps(dispatch) {
  return {
    triggerPauseSong: (audio) => {
      dispatch(pauseSong(audio));
    },
    triggerPlaySong: (audio) => {
      dispatch(playSong(audio));
    },
    triggerNext: (key, audio) => {
      dispatch(playNext(key, audio));
    },
    triggerPrevious: (key, audio) => {
      dispatch(playPrevious(key, audio));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
