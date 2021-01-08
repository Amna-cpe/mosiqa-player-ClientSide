export const initialState = {
  user: {
    Authenticated: false,
  },
  songs: [],
  playing: false,
  songPlaying: null,
  likes: [],
  loading: false,
  errors: [],
  results: [],
};

const reducer = (state, action) => {
  console.log(action.type);

  switch (action.type) {
    case "SET_USER":
      let userDetails = action.payload;
      userDetails.Authenticated = true;
      return {
        ...state,
        user: { ...userDetails },
      };
    case "SET_AUTHENTICATED":
      return {
        ...state,
        user: {
          ...state.user,
          Authenticated: true,
        },
      };
    case "SET_SONGS":
      return {
        ...state,
        songs: action.payload,
      };
    case "SET_LIKES":
      return {
        ...state,
        likes: action.payload,
      };
    case "SET_PLAYING":
      return {
        ...state,
        songPlaying: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_LOADING":
      return {
        ...state,
        loading: false,
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    case "CLEAR_ERRORS":
      return {
        ...state,
        errors: [],
      };

    case "LOG_OUT":
      return {
        user: {
          Authenticated: false,
        },
        playing: false,
        songPlaying: null,
        likes: [],
        loading: false,
        errors: [],
      };

    case "LIKE_SONG":
      let copyLikes = state.user.likes;
      // update it
      //if the same song id exist remove it else add it (unliking)
      let UNLIKE = copyLikes.find(
        (like) => like.songId === action.payload.songId
      );
      console.log("unliking" , UNLIKE)

      if(UNLIKE){
        copyLikes = copyLikes.filter(l=>l.songId !== action.payload.songId)
      }
      if (!UNLIKE) {
        copyLikes = [
          ...state.user.likes,
          {
            songId: action.payload.songId,
            username: state.user.username,
          },
        ];
      }

      let copyUser = state.user;
      copyUser.likes = copyLikes;
      // reset it

      return {
        ...state,
        user: copyUser,
      };

    case "ADD_SONG":
      let copySongs = state.songs;
      copySongs = [action.payload, ...state.songs];

      return {
        ...state,
        songs: copySongs,
      };

    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        results: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
