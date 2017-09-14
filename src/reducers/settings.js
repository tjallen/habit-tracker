const initialState = {
  fakeSetting: 'foo',
};

function settingsReducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default settingsReducer;