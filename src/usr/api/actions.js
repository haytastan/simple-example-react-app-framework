export const makeGreetingText = (userName) => (dispatch) => {
  dispatch('greeting', userName ? `Hello, ${userName} !!!` : 'Hello, Noname !!!');
};
