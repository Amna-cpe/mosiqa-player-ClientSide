import axios from "axios";
import jwtDecode from "jwt-decode";

export const login = (userData, history) => (dispatch) => {
  console.log("you are ", userData);

  dispatch({ type: "SET_LOADING" });

  axios
    .post("/login", userData)
    .then((res) => {
      console.log(res.data);
      AuthRoute(res.data);
      getUserData()(dispatch);
      dispatch({ type: "SET_AUTHENTICATED" });
      dispatch({ type: "CLEAR_ERRORS" });
      history.push("/");
    })
    .catch((err) => {
      console.log("the error", err);
      dispatch({
        type: "SET_ERRORS",
        payload: err.response.data,
      });
    });
};

export const register = (userData, history) => (dispatch) => {
  console.log("you are ", userData);

  dispatch({ type: "SET_LOADING" });

  axios
    .post("/signup", userData)
    .then((res) => {
      console.log(res.data);
      AuthRoute(res.data);
      getUserData()(dispatch);
      dispatch({ type: "SET_AUTHENTICATED" });
      dispatch({ type: "CLEAR_ERRORS" });
      history.push("/");
    })
    .catch((err) => {
      console.log("the error", err?.response);
      dispatch({
        type: "SET_ERRORS",
        payload: err?.response.data,
      });
    });
};

export const getUserData = () => (dispatch) => {
  console.log("getting user data");
  axios
    .get("/user")
    .then((res) => {
      dispatch({
        type: "SET_USER",
        payload: res.data,
      });
    })
    .then(() => {
      dispatch({ type: "CLEAR_LOADING" });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSongs = (dispatch) => {
  axios
    .get("/getSongs")
    .then((res) => {
      dispatch({
        type: "SET_SONGS",
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addSong = (song, dispatch) => {
  console.log("here is songs upload", song);

  const form = new FormData();
  form.append("audio", song, song.name);
  dispatch({ type: "SET_LOADING" });
  axios
    .post("/upload", form)
    .then((res) => {
      dispatch({
        type: "ADD_SONG",
        payload: res.data,
      });
    })
    .then(() => {
      dispatch({ type: "CLEAR_LOADING" });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const like = (songId, dispatch) => {
  axios
    .post(`/likeSong/${songId}`)
    .then((res) => {
      dispatch({
        type: "LIKE_SONG",
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const search = (searchItem, dispatch) => {
  console.log("at the reducer", searchItem);
  dispatch({ type: "SET_LOADING" });

  axios
    .post("/searchSongs", {
      search: searchItem,
    })
    .then((res) => {
      dispatch({
        type: "SET_SEARCH_RESULTS",
        payload: res.data,
      });
    })
    .then(() => {
      dispatch({ type: "CLEAR_LOADING" });
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({
        type: "SET_ERRORS",
        payload: err?.response.data,
      });
    });
};

const AuthRoute = (token) => {
  const AuthToken = `Bearer ${token}`;
  //we need this in order when refreshing the page
  // will see if token expires ==> redirect else cont..
  localStorage.setItem("AuthToken", AuthToken);
  //THIS IS IMP. TO ACCESS THE POST TO SERVER NEED TO HAVE AUTHORIZATION
  axios.defaults.headers.common["Authorization"] = AuthToken;
};

export const checkToken = (dispatch) => {
  const token = localStorage.getItem("AuthToken");

  if (token) {
    const DecodedToken = jwtDecode(token);
    console.log(DecodedToken);

    if (DecodedToken.exp * 1000 < Date.now()) {
      //REMOVE ANY EXPIRED TOKEN
      dispatch({ type: "LOG_OUT" });
    } else {
      dispatch({ type: "SET_AUTHENTICATED" });
      axios.defaults.headers.common["Authorization"] = token;
      getUserData()(dispatch);
    }
  }
};
