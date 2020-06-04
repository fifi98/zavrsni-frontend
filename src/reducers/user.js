const initialState = {
  user_id: null,
  user_type: null,
  name: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        user_id: action.user.id,
        user_type: action.user.type,
        name: action.user.name,
      };
    case "SIGN_OUT":
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
