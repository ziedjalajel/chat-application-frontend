import * as actionTypes from "../actions/types";

const initialState = {
  chats: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHATS:
      return {
        ...state,
        chats: action.payload,
        loading: false,
      };

    case actionTypes.ADD_CHAT:
      const { newChat } = action.payload;
      return {
        ...state,
        chats: [...state.chats, newChat],
      };
    case actionTypes.DELETE_CHAT:
      return {
        ...state,
        chats: state.chats.filter((chat) => chat.id !== action.payload.chatId),
      };
    default:
      return state;
  }
};

export default reducer;
