import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Route,Switch} from 'react-router-dom';

import Login from '../auth/Login';
import * as ROUTES from '../../constants/routes';
import SignUp from '../auth/SignUp';
import ChangePassword from '../auth/ChangePassword';
import ResetPassword from '../auth/ResetPassword';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));

export default (props) => {

    const classes = useStyles(); 

    return (
        <main className={classes.content}>
        <Switch>
            <Route exact path="/"><Login/></Route>
            <Route exact path={ROUTES.SIGN_UP}><SignUp/></Route>
            <Route exact path={ROUTES.CHANGE_PASSWORD}><ChangePassword/></Route>
            <Route exact path={ROUTES.RESET_PASSWORD}><ResetPassword/></Route>
        </Switch>

        </main>
    )
}