import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Link, useHistory } from "react-router-dom";

import "./styles/login.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles, Copyright } from "../utill/semanticStyle";

import { useProvider } from "../context/Provider";
import { login } from "../context/actions";

function Login() {
  const history = useHistory();
  const [{ errors, loading }, dispatch] = useProvider();
  const classes = useStyles();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("loging..", userData);
    login(userData, history)(dispatch);
  };
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <div>
          <img
            className="img_login"
            src="https://fontmeme.com/permalink/201231/5f5177f9a48284d39524fe59f802bb4e.png"
            alt="logo"
          />
        </div>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                value={userData.email}
                onChange={handlechange}
                label="email"
                name="email"
                autoComplete="email"
                error={errors && errors.email}
                helperText={errors && errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={userData.password}
                onChange={handlechange}
                autoComplete="current-password"
                error={(errors && errors.password) || (errors && errors.error)}
                helperText={
                  (errors && errors.password) || (errors && errors.error)
                }
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            {loading && <CircularProgress color='inherit' />}
            Log In
          </Button>

          <Grid container justify="center">
            <Grid item>
              <Link to="/register">Dont have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Login;
