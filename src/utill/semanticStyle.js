import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

export function Copyright() {
  return (
    <Typography variant="body2" align="center" style={{color:"#1db954"}}>
      {'Copyright © '}
      {
        "Amna Jasser "
      }
   
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:" rgb(230, 241, 230); ",
    borderRadius:"1.2rem",
    boxShadow: " 0 4px 60px -2px #159342",
    color:"#000"
    
  }, 
  form: {
    width: '90%', 
    marginTop: theme.spacing(3)
  
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
