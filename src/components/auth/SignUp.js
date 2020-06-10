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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() { 

    const [userName, setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    onUserNameChange = (event) => {
        setUserName(event.target.value);
    }
    onEmailChange = (event) => {
        setEmail(event.target.value);
    }
    onPassword = (event) => {
        setPassword(event.target.value);
    }

    const classes = useStyles(); 
    return ( 
    <Container component="main" maxWidth="xs"> 
        <CssBaseline /> 
        <div className={classes.paper}> 
            <Avatar className={classes.avatar}> 
                <LockOutlinedIcon /> 
            </Avatar> 
            <Typography component="h1" variant="h5"> Sign up </Typography> 
            <form className={classes.form} noValidate={false}> 
                <Grid container spacing={2}> 
                    <Grid item xs={12}> 
                        <TextField value={userName} autoComplete="fname" name="User Name" variant="outlined" required fullWidth id="userName" label="User Name" autoFocus /> 
                    </Grid> 
                    <Grid item xs={12}> 
                        <TextField value={email} variant="outlined" type="email" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" /> 
                    </Grid> 
                    <Grid item xs={12}> 
                        <TextField value={password} variant="outlined" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" /> 
                    </Grid> 
                    <Grid item xs={12}> 
                        <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="I want to receive inspiration, marketing promotions and updates via email." /> 
                    </Grid> 
                </Grid> 
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} > Sign Up </Button> 
                <Grid container justify="flex-end"> 
                    <Grid item> 
                        <Link component={RouterLink} to="/" variant="body2"> Already have an account? Sign in </Link> 
                    </Grid> 
                </Grid> 
            </form> 
        </div> 
    </Container> 
    );
}
