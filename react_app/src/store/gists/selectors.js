export const gistsSelector = (state) => ({
    gists: state.gists.gists,
    gistError: state.gists.gistError,
    gistPending: state.gists.gistPending,
  });