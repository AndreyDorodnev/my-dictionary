import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import Login from '../auth/Login';
// import SignUp from '../auth/SignUp';
// import ChangePassword from '../auth/ChangePassword';
// import ResetPassword from '../auth/ResetPassword';

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
            {/* <Container> */}
            {/* <Login/> */}
            {/* <SignUp/> */}
            {/* <ResetPassword/> */}
            {/* <ChangePassword/> */}
            {/* </Container> */}
        </main>
    )
}