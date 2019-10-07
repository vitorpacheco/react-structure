export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGOUT: 'auth/LOGOUT',
};

const initialState = {
  isLogged: false,
  token: null,
  user: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      return Object.assign({}, state, { token: action.payload.token });
    case Types.LOGOUT:
      return { ...state };
    default:
      return state;
  }
}

export function login(username, password) {
  return {
    type: Types.LOGIN,
    payload: {
      username,
      password,
    },
  };
}

export function logout() {
  return {
    type: Types.LOGOUT,
  };
}
