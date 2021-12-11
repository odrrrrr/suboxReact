import React, { useRef } from 'react';
import Intro from '../../components/main/Intro/Intro';
import { useDispatch, useSelector } from 'react-redux';
import { playingBtn } from '../../modules/playing/playBtns';
import birdSound from '../../sound/birdSound.mp3';

const IntroContainer = () => {
  const dispatch = useDispatch();
  const { introPlayState } = useSelector(({ playBtns }) => ({
    introPlayState: playBtns.introPlayState,
  }));
  const audioContainer = useRef(null);

  const onPlayingBtn = (e) => {
    const audioPlayer = audioContainer.current.children[0];

    if (introPlayState === false) {
      dispatch(playingBtn({ key: e.target.name, playState: true }));
      audioPlayer.play();
    } else {
      dispatch(playingBtn({ key: e.target.name, playState: false }));
      audioPlayer.pause();
    }
  };
  return (
    <>
      <Intro onPlayingBtn={onPlayingBtn} introPlayState={introPlayState} />
      <div ref={audioContainer}>
        <audio>
          <source src={birdSound} />
        </audio>
      </div>
    </>
  );
};
export default IntroContainer;
