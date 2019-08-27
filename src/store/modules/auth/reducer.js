import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false
};

const auth = (state = INITIAL_STATE, action) => produce(state, draft => {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      draft.loading = false;
      break;
    case '@auth/SIGN_IN_SUCCESS':
      draft.token = action.payload.token;
      draft.signed = true;
      draft.loading = false;
      break;
    case '@auth/SIGN_FAILURE':
      draft.loading = false;
      break;
    case '@auth/SIGN_OUT':
      draft.token = null;
      draft.signed = false;
      break;
    default:
  }
});

export default auth;
