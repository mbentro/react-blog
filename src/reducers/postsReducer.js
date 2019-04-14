export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POST':
      return action.payload;
    // case 'FETCH_USERS':
    //   return action.payload;
    default:
      return state;
  }
};
