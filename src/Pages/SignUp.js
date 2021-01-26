import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Link ,useHistory } from "react-router-dom";

import "./styles/login.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles, Copyright } from "../utill/semanticStyle";

import { useProvider } from "../context/Provider";
import { register } from "../context/actions";

function SignUp() {
  const [{errors , loading }, dispatch] = useProvider();
  const classes = useStyles();
  const history =useHistory()
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword:"",
    username:""
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
    console.log("register.." , userData)
    register(userData , history)(dispatch)
    
  };
  console.log(errors&&errors)
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
                id="username"
                value={userData.username}
                onChange={handlechange}
                label="username"
                name="username"
                autoComplete="username"
                error={errors&&errors.username}
                helperText={errors&&errors.username}
              />
            </Grid>

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
                error={errors&&errors.email}
                helperText={errors&&errors.email}
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
                error={(errors&&(errors.password))  || (errors&&(errors.error))}
                helperText={(errors&&(errors.password)) || (errors&&(errors.error))}
              />
            </Grid>


            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={userData.confirmPassword}
                onChange={handlechange}
                autoComplete="current-password"
                error={errors&&errors.confirmPassword}
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
            Register
          </Button>
          {loading && <CircularProgress />}
       

          <Grid container justify="center">
            <Grid item>
              <Link to="/login">Do you have an account? log in</Link>
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

export default SignUp;
