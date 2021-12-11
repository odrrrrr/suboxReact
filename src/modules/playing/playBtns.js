import { createAction, handleActions } from 'redux-actions';

const PLAYING_BTN = 'playing/PLAYING_BTN';
export const playingBtn = createAction(PLAYING_BTN, ({ key, playState }) => ({
  key,
  playState,
}));

const initialState = {
  introPlayState: false,
};

const playBtns = handleActions(
  {
    [PLAYING_BTN]: (state, { payload: { key, playState } }) => ({
      ...state,
      [key]: playState,
    }),
  },
  initialState
);

export default playBtns;
