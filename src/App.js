import React, {useState} from 'react';
import ButtonAppBar from './components/layout/AppBar';
import NavBar from './components/layout/NavBar';
import Main from './components/layout/Main';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseLine from '@material-ui/core/CssBaseline';
import {BrowserRouter as Router} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

function App() {

  const [isMenuHide, setMenuHide] = useState(true);
  const classes = useStyles();

  const toogleMenu = () => {
    setMenuHide(val => !val);
  }

  return (
    <div id='app' className={classes.root}>
      <Router>
        <CssBaseLine/>
        <ButtonAppBar menuBtnClick={toogleMenu}/>
        <NavBar hide={isMenuHide} toogleMenu={toogleMenu}/>
        <Main/>
      </Router>
    </div>
  );
}

export default App;