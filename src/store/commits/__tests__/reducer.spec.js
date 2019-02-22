import commitsReducer, {defaultState} from '../reducer';
import actions from '../actions';

describe('Commits reducer', () => {
  it('Should return correct initial state', () => {
    const state = commitsReducer(defaultState, { type: null });
    expect(state).toEqual(defaultState);
  });


  it('Should set repoId on init', () => {
    let repoId = 'facebook';
    const state = commitsReducer(defaultState, actions.init(repoId));

    expect(state).toEqual({ ...defaultState, repoId: repoId, searchTerm: '' });
  });
});
