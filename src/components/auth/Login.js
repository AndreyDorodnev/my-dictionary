import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'; 
import {Link as RouterLink} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

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
    link: {
        display: 'block',
        textAlign: 'center',
    },
    errorMsg: {
        color: theme.palette.error.main,
    }
}));
    
export default function SignIn(props) 
{ 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const classes = useStyles(); 

    const dataSubmit = (event) => {
        event.preventDefault();
        props.dataSubmit&&props.dataSubmit();
    }

    const emailChange = (event)=>{
        setEmail(event.target.value);
    }
    const passwordChange = event => {
        setPassword(event.target.value);
    }

    return ( 
        <Container component="main" maxWidth="xs">
            {console.log('RENDER')}
            <CssBaseline /> 
            <div className={classes.paper}>
                <Avatar className={classes.avatar}> 
                    <LockOutlinedIcon /> 
                </Avatar> 
                <Typography component="h1" variant="h5"> Sign in </Typography> 
                <form className={classes.form} noValidate={false} onSubmit={dataSubmit}> 
                    <TextField value={email} onChange={emailChange} variant="outlined" type="email" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus /> 
                    <TextField value={password} onChange={passwordChange} variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" /> 
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> 
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} > Sign In </Button> 
                    <Container>
                        <Link className={classes.link} component={RouterLink} to={ROUTES.RESET_PASSWORD} variant="body2"> Forgot password? </Link> 
                        <Link className={classes.link} component={RouterLink} to={ROUTES.SIGN_UP} variant="body2"> {"Don't have an account? Sign Up"} </Link> 
                    </Container>
                </form> 
            </div> 
        </Container> 
    );
}
