import selectors from '../selectors';
import { defaultState } from '../reducer';

describe('Commit selectors', () => {
  it('Should return isFetching correctly', () => {
    const result = selectors.getIsFetching(defaultState);
    expect(result).toEqual(defaultState.isFetching);
  });

  it('Should return RepoId correctly', () => {
    let repoId = 'facebook';
    const mockState = {...defaultState, repoId};
    const result = selectors.getRepoId(mockState);
    expect(result).toEqual(repoId);
  });

  it('Should return commit list correctly', () => {
    const commits = [{sha:'dba1b90'}, {sha: 'dba1b91'}];
    const mockState = {...defaultState, commits};
    const result = selectors.getCommits(mockState);
    expect(result).toEqual(commits);
  });

  it('Should return commit list correctly', () => {
    const commits = [{sha:'dba1b90'}, {sha: 'dba1b91'}];
    const mockState = {...defaultState, commits};
    const result = selectors.getCommits(mockState);
    expect(result).toEqual(commits);
  });
});
