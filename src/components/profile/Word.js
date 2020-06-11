import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'; 
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import WordList from './WordList';

const useStyles = makeStyles((theme)=>({
    card: {
        position: 'relative',
        marginTop: theme.spacing(8),
        minWidth: 200,
    },
    header: {
        marginBottom: theme.spacing(2), 
    },
    text: {

    },
    editIcon: {
        backgroundColor: theme.palette.secondary.main,
        position: 'relative',
        right: theme.spacing(0),
        left: 'auto',
        marginLeft: 'auto'
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="sm">
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.header} component="h1" variant="h4">{props.word.value}</Typography> 
                <WordList header="translations:" items={props.word.translations}/>
                {/* <Typography  component="h1" variant="h5">examples:</Typography>  */}
                {/* {
                    props.word.examples.map((element,i)=>{
                        return (
                            <Typography key={i} className={classes.text} component="p">{`- ${element}`}</Typography>  
                        )
                    }) 
                } */}
                <WordList header="examples:" items={props.word.examples}/>
                <Typography  component="h1" variant="h5">group:</Typography> 
                <Typography className={classes.text} component="p">{props.word.group}</Typography>  
                <CardActions disableSpacing>
                <Fab className={classes.editIcon} aria-label="edit"><EditIcon/></Fab>
                </CardActions>
                
            </CardContent>
        </Card>
        </Container>
    )
}