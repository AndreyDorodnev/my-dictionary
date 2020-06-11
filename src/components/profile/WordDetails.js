import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    field: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1)
    },
    button: {
        alignSelf: "flex-end"
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <>
            {
                props.items.map((element,i)=>{
                    return (
                        <TextField onChange={event=>props.onTextChange(event.target.value,i)} value={element.value} className={classes.field} key={element.id} id="standard-basic" label={props.label} fullWidth/> 
                    )
                })
            }
            <Button onClick={props.addBtnClick} color="secondary" className={classes.button}>Add</Button>
        </>
    )
}