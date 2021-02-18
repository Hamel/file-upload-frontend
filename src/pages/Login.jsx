import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Modal from 'react-modal';

import Footer from '../components/Footer';
// import Modal from '../components/Modal';

import Image from '../imgs/betterHome.jpg';

// Background image styles
const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 845,
        width: `calc(100vw + 48px)`,
        margin: -24,
        padding: 24,
        zIndex: 0,
    }
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const history = useHistory()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const PostData = () => {
      fetch('/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email,
              password
          })
      })
      .then(res => res.json())
      .then(data => {
          if(data.error){
              console.log(data)
              alert('ERROR: Please complete all fields')
          } else {
              if(true) {
                  <Redirect to="/" />
                  history.push('/')
              }
          }
      })
      .catch(err => {
          console.log(err)
      })
  }


  return (
    <div style={styles.paperContainer}>
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper} style={{ backgroundColor: 'white', opacity: 1, padding: 15, borderRadius: 15 }}>
        <Typography component="h1" variant="h5">
          Hamel
        </Typography>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit((data) => console.log(data))}>
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            // value={this.state.value(email)}
            // onChange={this.handleChange(e => setEmail(e.target.value))}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // value={this.state.value(password)} 
            // onChange={this.handleChange(e => setPassword(e.target.value))}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => PostData()}
            Link={'/'}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Footer />
    </Container>
  </div>
  );
}